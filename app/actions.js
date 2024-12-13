'use server'
import connect from "@/utils/server/connect";
import FollowModel from "@/utils/server/models/follow";
import LanguageModel from "@/utils/server/models/language"
import QuestionModel from "@/utils/server/models/question";
import UserModel from "@/utils/server/models/user";
import AnswerModel from "@/utils/server/models/answer";

import { decoder, passwordDecode, passwordHash, setSession } from "@/utils/server/sessions";
import { languageSchema } from "@/utils/validations/language";
import questionSchema from "@/utils/validations/question";
import { loginValidator, registerValidator } from "@/utils/validations/user";
import { cookies } from "next/headers";
import { validateAnswer } from "@/utils/validations/answer";
import { dataParse } from "@/modules";

export const getLanguages = async () => {
    await connect()
    try {
        const languages = await LanguageModel.find({}, '-__v') // Exclude the __v field
            .populate('questions', null, null, { strictPopulate: false }) // Populate questions
            .populate('followers') // Populate followers
            .lean(); // Ensure plain objects

        // Sanitize data
        const sanitizedLanguages = dataParse((languages));


        return {
            languages: sanitizedLanguages || [],
            success: true
        };
    } catch (error) {

        return {
            message: error.message || "An unknown error occurred.",
            success: false
        };
    }
};

export const register = async (data) => {
    await connect()
    try {
        const { success, data: userInfo, error } = registerValidator.safeParse(data)


        if (!success) {
            return {
                message: "لطفا تمامی فیلد هارا تکمیل کنید",
                success: false
            }
        }

        const isUserExist = await UserModel.findOne({
            $or: [{ email: userInfo.email }, { username: userInfo.username }]
        })

        if (isUserExist) return {
            message: "این نام کاربری و یا ایمیل قبلا ثبت شده است",
            success: false
        };

        const password = await passwordHash(userInfo.password)

        const user = await UserModel.create({
            ...userInfo,
            password
        })

        if (!user) return;

        await setSession({ email: userInfo.email })

        return {
            message: "ثبت نام با موفقیت انجام شد",
            success: true
        }

    } catch (error) {
        return {
            message: error.message,
            success: false
        }
    }
}

export const getMe = async () => {
    await connect()
    const _cookies = await cookies()
    const accessToken = _cookies.get("session")?.value || false



    if (accessToken) {
        const userEmail = await decoder(accessToken)
        const user = await UserModel.findOne({ email: userEmail.email }).populate("followedLanguages")


        if (user) {
            const plainAccount = {
                id: user._id.toString(), // Convert ObjectId to string
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
            };

            return plainAccount
        }
    } else {
        return {}
    }
}

export const login = async payload => {
    await connect()
    try {
        const { success, data, error } = loginValidator.safeParse(payload)

        if (!success) return {
            message: "لطفا مشخصات را کامل کنید.",
            success: false
        };

        const { identifier, password } = data

        const user = await UserModel.findOne({
            $or: [{ email: identifier }, { username: identifier }]
        })

        if (!user) return {
            message: "نام کاربری یا رمز عبور اشتباه است.",
            success: false
        };

        const isPasswordValid = await passwordDecode(password, user.password)

        if (!isPasswordValid) return {
            message: "نام کاربری یا رمز عبور اشتباه است.",
            success: false
        };

        await setSession({ email: user.email })

        const plainAccount = {
            id: user._id.toString(), // Convert ObjectId to string
            username: user.username,
            fullname: user.fullname,
            email: user.email,
            avatar: user.avatar,
        }

        return {
            message: "ورود با موفقیت انجام شد.",
            success: true,
            data: plainAccount
        }

    } catch (error) {
        return {
            message: error.message || "خطایی رخ داده است.",
            success: false
        }
    }
}

export const langCreate = async (payload) => {
    await connect()
    try {

        const { success, data, error } = languageSchema.safeParse(payload)




        if (!success) return {
            message: "لطفا تمامی فیلد هارا تکمیل کنید !",
            success: false,
        };

        const isLangExistBefore = await LanguageModel.findOne({
            shortName: data.shortName
        })

        if (isLangExistBefore) return {
            message: "این زبان و دسته بندی قبلا ساخته شده است !",
            success: false,
        };

        const lang = await LanguageModel.create({ ...payload })

        if (!lang) return;

        return {
            message: `زبان ${lang.name} با موفقیت ایجاد گردید !`,
            success: true
        }

    } catch (error) {
        return {
            message: error.message,
            success: false
        }
    }
}

export const getQuestions = async () => {
    await connect()
    const questions = await QuestionModel.find().populate('responses').lean();

    // حذف مقادیر غیرضروری
    const sanitizedQuestions = questions.map(({ __v, _id, ...rest }) => ({
        id: _id.toString(),
        ...rest,
    }));

    return {
        data: sanitizedQuestions || [],
        success: true,
    };
};

export const editLang = async (payload) => {
    try {
        await connect()
        const { id: langID } = payload
        const { success, data, error } = languageSchema.safeParse(payload)



        if (!success) return {
            message: "لطفا تمامی فیلد ها را تکمیل کنید",
            success: false
        };

        const language = await LanguageModel.findOne({
            _id: payload.id
        })

        if (!language) return {
            success: false,
            message: "زبان مورد نظر شما پیدا نشد"
        }


        const updatedLang = await LanguageModel.findOneAndUpdate({
            _id: payload.id
        }, payload)

        if (!updatedLang) return {
            success: false,
            message: "عملیات با خطا مواجه شد"
        };

        return {
            success: true,
            message: "اطلاعات زبان  شما با موفقیت ویرایش شد."
        }

    } catch (error) {
        return {
            message: error.message,
            success: false
        }

    }

}

export const followLanguage = async (language) => {
    await connect()
    try {
        const user = await getMe()

        if (!user) return {
            message: "شما وارد حساب کاربری خود نشده اید !",
            success: false
        }

        const lang = await LanguageModel.findOne({ shortName: language }).lean();

        if (!lang) return {
            message: "زبان مورد نظر وجود ندارد !",
            success: false
        };

        const isFollowed = await FollowModel.findOne({ user: user.id, language: lang._id }).lean();

        if (isFollowed) return {
            message: "شما قبلا این زبان را دنبال کرده اید !",
            success: false
        };

        const follow = await FollowModel.create({
            user: user.id,
            language: lang._id
        })

        if (!follow) return {
            message: "عملیات با خطا مواجه شد !",
            success: false
        }

        return {
            success: true,
            message: "با موفقیت زبان مورد نظر را دنبال کردید !",
        }

    } catch (error) {
        return {
            msg: error.message,
            success: false
        }
    }
}

export const unfollowLanguage = async (languageID) => {
    try {
        await connect()
        const user = await getMe()
        const parsedUser = dataParse((user))

        if (!user) return {
            message: "شما وارد حساب کاربری خود نشده اید !",
            success: false
        }

        const language = await LanguageModel.findOne({ _id: languageID }).populate("followers");
        const parsedLanguage = dataParse((language));

        if (!language) return {
            message: "زبان مورد نظر وجود ندارد !",
            success: false
        }

        const isFollowed = parsedLanguage.followers.find(f => f.user === parsedUser.id)

        if (!isFollowed) return {
            message: "شما این زبان را دنبال نکرده اید !",
            success: false
        };

        const unfollow = await FollowModel.findOneAndDelete({ user: parsedUser.id, language: languageID });

        if (!unfollow) return {
            message: "خطایی رخ داده است !",
            success: false
        }

        return {
            success: true,
            message: "با موفقیت این زبان مورد نظر آنفالو شد !"
        }

    } catch (error) {
        return {
            message: error.message,
            success: false
        }
    }
}

export const getFollowedLanguages = async () => {
    await connect()
    try {

        return {}


    } catch (error) {
        return {}
    }
}


export const getLanguage = async langID => {
    try {
        await connect()
        const { id: userID } = await getMe()
        let isParamsID = String(langID).length > 12

        const theLanguageID = isParamsID ? ({
            _id: langID
        }) : ({
            shortName: langID
        })


        const lang = await LanguageModel.findOne(theLanguageID).populate({
            path: 'followers',
            populate: [
                {
                    path: "language"
                },
                {
                    path: "user",
                    select: "-__v -password"
                }
            ]
        }).populate({
            path: "questions",
            populate: [
                {
                    path: "author"
                }
            ]
        }).populate("followers")


        if (!lang) return {
            ok: false,
            message: "زبان مورد نظر شما پیدا نشد !",
        };


        const langFollowers = lang.followers
        const isUserFollowed = langFollowers.some(follower => follower.user._id.toString() == userID)

        const objectiveData = dataParse((lang))

        return {
            isFollowedByUser: isUserFollowed,
            language: objectiveData,
            ok: true
        }
    } catch (error) {
        return {
            message: error.message || "Something went wrong !!",
            ok: false
        }
    }
}

export const createQuestion = async quest => {
    try {
        await connect()
        const { success, data, error } = questionSchema.safeParse(quest)

        if (!success) return {
            message: "اطلاعات وارد شده صحیح نمی‌باشد",
            success: false
        };

        const targetLanguage = await LanguageModel.findOne({
            shortName: quest.language
        })

        if (!targetLanguage) return {
            message: "زبان مورد نظر شما یافت نشد !",
            success: false
        }

        const langID = dataParse((targetLanguage._id))

        const newQuestion = await QuestionModel.create({ ...quest, language: langID })

        if (!newQuestion) return {
            message: "عملیات با خطا مواجه شد !",
            success: false,
        };


        return {
            message: "پرسش شما با موفقیت ثبت گردید!",
            success: true
        }

    } catch (err) {
        return {
            message: err.message,
            success: false,
        }
    }
}

export const getLanguageQuestions = async quest => {
    try {
        await connect()
        const question = await QuestionModel.findOne({
            _id: quest
        }).populate(
            "author",
            "-password"
        ).populate("language").populate("responses")

        if (!question) return;

        const parsedData = dataParse((question))

        return {
            question: parsedData
        }

    } catch (error) {
        return {
            error: error.message
        }
    }
}

export const removeQuestion = async ID => {
    try {
        await connect()

        if (!ID) return {
            message: "لطفا آیدی پرسش را وارد کنید",
            ok: false
        };


        const removeAction = await QuestionModel.findOneAndDelete({
            _id: ID
        })

        if (!removeAction) return {
            message: "عملیات با خطا مواجه شد",
            ok: false
        };

        return {
            message: "پرسش با موفقیت حذف گردید !",
            ok: true
        }


    } catch (error) {
        return {
            message: error.message,
            ok: false
        }
    }
}
export const getAlternativeQuestions = async tags => {
    try {
        // Ensure the database is connected
        await connect();

        if (!tags) {
            return {
                message: "تگی ارسال نشده است !",
                ok: false
            };
        }

        // Fetch all questions
        const allQuestions = await QuestionModel.find({});

        // Filter questions by tags if necessary
        const filteredQuestions = allQuestions.filter(question =>
            question.tags.some(tag => tags.includes(tag))
        );

        return {
            message: "Data fetched successfully!",
            ok: true,
            data: filteredQuestions
        };
    } catch (error) {
        return {
            message: "An error occurred while fetching questions.",
            ok: false,
            error: error.message
        };
    }
};

export const createAnswer = async (data) => {
    try {
        await connect()
        const user = await getMe()

        if (!user) return {
            message: "لطفا وارد حساب خود شوید !",
            ok: false
        }

        const validation = await validateAnswer(data)

        if (!validation.success) return {
            message: "لطفا محتوای پاسخ را وارد نمائید.",
            ok: false
        };

        const answer = await AnswerModel.create({
            content: data.content,
            question: data.questionID,
            user: user.id
        })

        if (!answer) return {
            message: "عملیات با خطا مواجه شد",
            ok: false
        }

        return {
            message: "پاسخ شما با موفقیت ثبت شد.",
            ok: true,
            data: dataParse(answer)
        }
    } catch (error) {
        return {
            message: "An error occurred while creating the answer.",
            ok: false,
            error: error.message
        };
    }
}

export const getAnswers = async (questionID) => {
    try {
        await connect()
        const answers = await AnswerModel.find({ question: questionID })
            .populate([
                {
                    path: "user",
                    select: "-password"
                },
                {
                    path: "question",
                    strictPopulate: false,
                }
            ])
            .lean(); // تبدیل اسناد Mongoose به اشیاء ساده

        const objectiveData = dataParse((answers))

        return await objectiveData
    } catch (error) {
        return {
            ok: false,
            error: error.message
        }
    }

}

export const getAllQuestions = async () => {
    try {
        await connect()
        const databaseItems = await QuestionModel.find({}).populate("responses").lean()
        const objectiveData = await dataParse((databaseItems))

        return objectiveData
    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
    }
}

export const getAllAnswers = async () => {
    try {
        await connect()
        const databaseItems = await AnswerModel.find({}).populate([
            {
                path: "question",
                populate: {
                    path: "language"
                }
            },
            {
                path: "user",
                select: "-password -__v"
            }
        ]).lean()

        const objectiveData = await dataParse((databaseItems))

        return objectiveData
    } catch (error) {
        return {
            ok: false,
        }
    }
}

export const removeComment = async commentID => {
    try {
        await connect()

        if (!commentID) return {
            ok: false,
            message: "لطفا شناسه کامنت را ارسال کنید"
        };

        const removedComment = await AnswerModel.findOneAndDelete({
            _id: commentID
        })

        if (!removedComment) return {
            ok: false,
            message: "کامنت مورد نظر یافت نشد"
        };

        return {
            ok: true,
            message: "کامنت با موفقیت حذف شد"
        }

    } catch (error) {
        return {
            message: error.message,
            ok: false
        }
    }
}
