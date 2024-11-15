import { NextResponse } from "next/server"

export async function middleware(request) { 
    console.log('Hello World')

    return NextResponse.next()
}