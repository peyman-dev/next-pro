'use server'
import connect from "@/utils/server/connect";
import LanguageModel from "@/utils/server/models/language"
import UserModel from "@/utils/server/models/user";
import { passwordHash, setSession } from "@/utils/server/sessions";
import { registerValidator } from "@/utils/validations/user";

export const getLanguages = async () => {
    try {
        await connect()
        const languages = await LanguageModel.find({});

        return {
            languages: languages || [],
            success: true
        };
    } catch (error) {
        console.error("Error fetching languages:", error);

        return {
            message: error.message || "An unknown error occurred.",
            success: false
        };
    }
};

export const register = async (data) => {
    try {
        await connect()
        console.log("data" + data)
        const { success, data: userInfo, error } = registerValidator.safeParse(data)

        console.log(error)
        console.log("success " + success)

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