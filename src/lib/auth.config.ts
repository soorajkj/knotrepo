import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { LoginSchema } from "@/schemas/login";
import { prisma } from "@/lib/prisma";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        if (!validateFields.success) return null;
        const { username, password } = validateFields.data;
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user || !user.password) return null;
        const matchpass = await bcrypt.compare(password, user.password);
        if (matchpass) return user;
        return null;
      },
    }),
    GitHub,
  ],
} satisfies NextAuthConfig;
