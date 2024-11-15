import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { sessionVerify } from "./utils/server/sessions";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const session = req.cookies.get('session')?.value;

  console.log(session)



  if (pathname == '/auth') {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  const response = NextResponse.next();
  return response;
}
