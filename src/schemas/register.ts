import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(24, { message: "Password length should be maximum 24 character" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
});
