import { z } from "zod";
import { signupSchema } from "~schemas/signup";

const usernameSchema = signupSchema.pick({ username: true });
type UsernameSchema = z.infer<typeof usernameSchema>;

export const validateUsername = (username: UsernameSchema) => {
  const parsedData = usernameSchema.safeParse(username);
  if (!parsedData.success) return false;
  return true;
};
