import bycrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { SigninSchema } from "@/schemas/signin";
import { getUserByEmail } from "@/utils/quries/user.quries";

export default {
  providers: [
    Github({}),
    Google({}),
    Credentials({
      async authorize(credentials) {
        const validatedData = SigninSchema.safeParse(credentials);
        if (!validatedData.success) return null;
        const { email, password } = validatedData.data;
        const user = await getUserByEmail(email);
        if (!user || !user.password || !user.email) return null;
        const matched = await bycrypt.compare(password, user.password);
        if (matched) return user;
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
