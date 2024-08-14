import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn() {
      return true;
    },
    async session({ session, token }) {
      session.user.id = token.sub as string;
      session.user.username = token.username;
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const user = await prisma.user.findUnique({ where: { id: token.sub } });
      if (!user) return token;
      token.username = user.username as string;
      return token;
    },
  },
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  session: { strategy: "jwt", maxAge: 432000 },
  pages: {
    error: "/auth/error",
    signIn: "/auth/login",
    newUser: "/auth/onboard",
  },
  ...authConfig,
});
