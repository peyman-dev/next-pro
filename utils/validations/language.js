import { z } from 'zod'

export const languageSchema = z.object({
    name: z.string("عنوان زبان یک متن اجباری می‌باشد.").min(3),
    shortName: z.string("نام کوتاه زبان یک متن اجباری می‌باشد.").min(2),
    image: z.string("آدرس تصویر زبان یک متن اجباری می‌باشد."),
    description: z.string("لطفا توضیحات زبان را وارد نمائید ...")
})
