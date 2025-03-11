import { usernameClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const { signIn, signOut, signUp, updateUser, getSession } =
  createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [usernameClient()],
  });
