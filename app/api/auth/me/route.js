import { NextResponse } from "next/server"
import { sessionVerify } from "@/utils/server/sessions"

export const POST = async data => {
    const { session } = await sessionVerify(data)
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    return NextResponse.json({ user: session.user }, { status: 200 })
}