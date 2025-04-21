import { z } from "zod";

export const envSchema = z.object({
  BETTER_AUTH_URL: z.string().min(1, "Required"),
  BETTER_AUTH_SECRET: z.string().min(1, "Required"),
  DATABASE_URL: z.string().min(1, "Required"),
  GITHUB_CLIENT_ID: z.string().min(1, "Required"),
  GITHUB_CLIENT_SECRET: z.string().min(1, "Required"),
  GOOGLE_CLIENT_ID: z.string().min(1, "Required"),
  GOOGLE_CLIENT_SECRET: z.string().min(1, "Required"),
  RESEND_API_KEY: z.string().min(1, "Required"),
});

export type envSchemaType = z.infer<typeof envSchema>;
