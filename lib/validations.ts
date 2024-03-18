import { z } from "zod";

export const claimUserNameScheme = z.object({
  username: z
    .string()
    .min(1, { message: "Should be at least one character long" }),
});

export const signupSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  username: z
    .string()
    .min(1, { message: "Username must be atleast 1 character" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(24, { message: "Password length should be maximum 24 character" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
});

export const signinSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Should be at least one character long" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(24, { message: "Password length should be maximum 24 character" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special character",
    }),
});
