import connect from "@/utils/server/connect"
import LanguageModel from "@/utils/server/models/language"
import productValidation from "@/utils/validations/language"
import { NextResponse } from "next/server"

export const GET = async (req, res) => {
    try {
        connect()
        const languages = await LanguageModel.find({}, '-__v')

        return NextResponse.json({
            data: [...languages]
        })
    } catch (error) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 500
        })
    }
}

export async function POST(req, res) {
    try {
        await connect()
        const languageData = await req.json()

        
        const { success, data, error } = productValidation.safeParse(languageData)

        if (!success) {
            return NextResponse.json({
                error: error.format()
            }, {
                status: 422
            })
        }

        const language = await LanguageModel.create(data)

        if (!language) return;

        return NextResponse.json({
            data: language
        }, {
            status: 201
        })
    } catch (error) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 500
        })

    }
}