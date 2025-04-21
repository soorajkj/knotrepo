import { z } from "zod";

const RESERVED_USERNAMES = [
  "admin",
  "dashboard",
  "auth",
  "settings",
  "login",
  "signup",
];

export const usernameSchema = z
  .string()
  .min(2, "Username must be at least 2 characters.")
  .max(20, "Username must be at most 20 characters.")
  .regex(/^[a-z0-9](?:[a-z0-9-_]{1,18}[a-z0-9])?$/, {
    message:
      "Username must only contain lowercase letters, numbers, hyphens or underscores, and cannot start or end with one.",
  })
  .refine((name) => !RESERVED_USERNAMES.includes(name), {
    message: "Please choose a different username",
  });
