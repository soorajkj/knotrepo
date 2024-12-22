import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI, username } from "better-auth/plugins";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import VerificationEmail from "@/components/emails/verification";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  plugins: [username(), openAPI()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ url }, _request) => {
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: "soorajkj46@gmail.com",
        subject: "Email verification",
        react: VerificationEmail({ url }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
