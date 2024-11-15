import z from 'zod'

const schema = z.object({
    title: z.string("عنوان سوال باید یک متن باشد"),
    bounty: z.number("مقدار بونتی باید عدد باشد").min(0).max(100_000_000),
    description: z.string("توضیحات باید یک متن باشد"),
    tags: z.array().min(1).max(5),
    category: z.string("دسته بندی باید یک متن باشد"),
})

export default schema