"use server";

import { isRedirectError } from "next/dist/client/components/redirect";
import { signIn } from "@/auth";
import { AppOAuthProvider } from "@/types/auth";

export const oauthSigninAction = async (provider: AppOAuthProvider) => {
  try {
    await signIn(provider);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
  }
};
