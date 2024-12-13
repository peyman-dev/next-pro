import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  const baseURL = req.url
  const hasAccessToken = req.cookies.get('session')?.value ? true : false
  


  if (hasAccessToken && String(pathname).startsWith('/auth')) {
    return NextResponse.redirect(new URL('/dashboard/', req.url))
  }
  if (pathname == '/auth') {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  
  if (String(pathname).startsWith('/dashboard') && !hasAccessToken) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  const response = NextResponse.next();
  return response;
}
