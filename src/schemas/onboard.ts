import { z } from "zod";

export const OnboardSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" })
    .max(80, { message: "Username must be at most 80 characters" })
    .regex(/^[a-z0-9-_]+$/, {
      message:
        "Username can only contain lowercase letters, numbers, hyphens, and underscores",
    })
    .regex(/^[a-z0-9]/, {
      message: "Username must start with a letter or number",
    })
    .regex(/[a-z0-9]$/, {
      message: "Username must end with a letter or number",
    }),
});
