import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";
import { logger } from "@/utils/logger";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, token }) {
      if (!token.sub) throw new Error("Token subject is undefined");
      session.user.id = token.sub;
      session.user.username = token.username;
      return session;
    },
    async jwt({ token }) {
      const user = await prisma.user.findUnique({ where: { id: token.sub } });
      if (!user) return token;
      if (!user.username) throw new Error("Username is null");
      token.username = user.username;
      return token;
    },
  },
  events: {
    async createUser({ user }) {
      const { id, email } = user;
      let username;
      if (email) username = email.slice(0, email.indexOf("@"));
      await prisma.user.update({ where: { id }, data: { username } });
      logger.info(`User created with email: ${email}`);
    },
    async linkAccount({ user }) {
      const { id, email } = user;
      const emailVerified = new Date();
      await prisma.user.update({ where: { id }, data: { emailVerified } });
      logger.info(`User account verified with email: ${email}`);
    },
  },
  pages: { newUser: "/auth/onboard" },
  session: { strategy: "jwt" },
  ...authConfig,
});
