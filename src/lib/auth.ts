import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async signIn() {
      // const existingUser = await prisma.user.findUnique({
      //   where: { id: user.id },
      // });
      // if (!existingUser || !existingUser.emailVerified) return false;
      return true;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
        session.user.username = token.username;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const user = await prisma.user.findUnique({ where: { id: token.sub } });
      if (!user) return token;
      token.username = user.username ?? "";
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
  pages: {
    signIn: "/login",
  },
  ...authConfig,
});
