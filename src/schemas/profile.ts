import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().optional(),
  photo: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  about: z.string().optional(),
  country: z.string().optional(),
});
