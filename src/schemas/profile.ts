import { isValidPhoneNumber } from "libphonenumber-js";
import { z } from "zod";

export const profileSchema = z.object({
  fullname: z.string().min(2, { message: "Name is required" }),
  biography: z
    .string()
    .max(500, "Biography must be at most 500 characters")
    .optional(),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .refine((str) => isValidPhoneNumber(str), "Invalid phone number")
    .optional()
    .or(z.literal("")),
  website: z
    .string()
    .trim()
    .refine((str) => !/^https?:\/\//.test(str), {
      message: "URL should not start with 'http://' or 'https://'",
    })
    .refine(
      (str) => /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d{1,5})?(\/.*)?$/.test(str),
      { message: "Invalid domain or URL format" }
    )
    .optional()
    .or(z.literal("")),
});
