import { z } from "zod";

const RESERVED_USERNAMES = ["dashboard", "auth", "api", "settings"];

export const signupSchema = z.object({
  name: z.string().min(2).max(25),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long" })
    .max(24, { message: "Password length should be maximum 24 character" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain atleast 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
  username: z
    .string()
    .min(2, "Username must be at least 2 characters.")
    .max(20, "Username must be at most 20 characters.")
    .regex(/^[a-z0-9](?:[a-z0-9-_]{1,18}[a-z0-9])?$/, {
      message:
        "Username must only contain lowercase letters, numbers, hyphens or underscores, and cannot start or end with one.",
    })
    .refine((value) => !RESERVED_USERNAMES.includes(value), {
      message: "This username is reserved.",
    }),
});

export type SignupFormFields = z.infer<typeof signupSchema>;
