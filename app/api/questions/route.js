import connect from "@/utils/server/connect"
import QuestionModel from "@/utils/server/models/question"
import { NextResponse } from "next/server"
import questionSchema from "@/utils/validations/question"

export const GET = async (req, res) => {
    try {
        await connect()
        const questions = await QuestionModel.find({})

        return NextResponse.json({
            questions
        })

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}

export const POST = async (req, res) => {
    try {
        await connect()
        const data = await req.json()

        const { success, data: finalData, error } = questionSchema.safeParse(data)

        if (!success) return NextResponse.json({
            message: error.format()
        }, {
            status: 422
        });

        const newQuestion = await QuestionModel.create(finalData)

        return NextResponse.json({
            message: "Question added successfully",
            data: newQuestion
        })

    } catch (error) {
        return NextResponse.json({
            message: error.message
        }, {
            status: 500
        })
    }
}