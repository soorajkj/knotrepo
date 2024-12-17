"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { SigninSchema } from "@/schemas/signin";
import { getUserByEmail } from "@/utils/quries/user.quries";
import { SigninFormFields } from "@/components/auth/signin-form";

export const signAction = async (data: SigninFormFields) => {
  try {
    const validatedData = SigninSchema.safeParse(data);
    if (!validatedData.success) return { error: "Invalid inputs" };
    const { email, password } = validatedData.data;
    const user = await getUserByEmail(email);
    if (!user || !user.email || !user.password) {
      return { error: "User not found" };
    }
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CallbackRouteError":
          return {
            error: "Invalid credentials",
          };
        case "AccessDenied":
          return {
            error:
              "Please verify your email, sign up again to resend verification email",
          };
        case "OAuthAccountAlreadyLinked" as AuthError["type"]:
          return {
            error: "Login with your Google or Github account",
          };
        default:
          return {
            error: "Oops. Something went wrong",
          };
      }
    }
    throw error;
  }
  return { success: "User logged in successfully" };
};
