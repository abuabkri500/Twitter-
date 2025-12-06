import z from "zod/v3"

export const userShema = z.object({
    name:z.string().min(3,{message: "Nmae cannot be less than 3 characters"}).trim().optional(),
    email:z.string().email({message: "please enter a valid email."}).trim(),
    password:z.string().min(8,{message: "Contain at least 8 character long"}).regex(/[a-zA-Z]/,{message: "password"})
    .regex(/[0-9]/,{message: "Conatine at least one number."})
    .regex(/[^a-zA-Z0-9 ]/, {
        message: "Contain at least one special character.",
    }).trim(),
})

export type UserInput = z.infer<typeof userShema>