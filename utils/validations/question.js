import z from 'zod';

const questionSchema = z.object({
    title: z.string().nonempty("عنوان سوال باید یک متن باشد"),
    bounty: z.string().regex(/^\d+$/, "مقدار بونتی باید عدد باشد"),
    description: z.string().nonempty("توضیحات باید یک متن باشد"),
    tags: z.array(z.string()).min(1, "حداقل یک تگ باید وارد شود").max(3, "حداکثر سه تگ می‌توانید وارد کنید"),
    language: z.string().nonempty("لطفا زبان پرسش خود را وارد نمائید"),
    author: z.string().nonempty("نویسنده پرسش باید وارد شود"),
});

export default questionSchema;
