import { z } from "zod"

export const userValidator = z.object({
    username: z.string("لطفا نام کاربری را وارد کنید").min(4).max(20),
    fullname: z.string("لطفا نام و نام خانوادگی را وارد کنید"),
    email: z.string("لطفا ایمیل را وارد کنید").email("ایمیل به درستی وارد نشده است."),
    password: z.string("لطفا رمز عبور را وارد کنید").min(8),
    avatar: z.string().optional(),
    role: z.enum(["ADMIN", "USER", "SUPPORT", "AUTHOR", "FOUNDER", "MANAGER"], "لطفا نقش کاربر را انتخاب کنید"),
})

export const registerValidator = z.object({
    username: z.string("لطفا نام کاربری را وارد کنید").min(4).max(20),
    fullname: z.string("لطفا نام و نام خانوادگی را وارد کنید"),
    email: z.string("لطفا ایمیل را وارد کنید").email("ایمیل به درستی وارد نشده است."),
    password: z.string("لطفا رمز عبور را وارد کنید").min(8),
})

export const loginValidator = z.object({
    identifier: z.string("لطفا نام کاربری و یا ایمیل را وارد کنید"),
    password: z.string("لطفا رمز عبور را وارد کنید").min(8)
})