import z from "zod"

const answerSchema = z.object({
    content: z.string("لطفا محتوای پاسخ وارد کنید"),
    questionID: z.string("لطفا یک سوال را انتخاب کنید"),
})

export const validateAnswer = async (data) => {
    return await answerSchema.safeParse(data)
}