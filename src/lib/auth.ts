import { betterAuth, BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { openAPI, username } from "better-auth/plugins";
import { prisma } from "~lib/prisma";
import { validateUsername } from "~utils/validate-username";

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  plugins: [
    username({
      usernameValidator: (username) => validateUsername({ username }),
    }),
    openAPI(),
    nextCookies(),
  ],
  trustedOrigins: [process.env.BETTER_AUTH_URL],
  advanced: {
    defaultCookieAttributes: {
      sameSite: "lax",
      httpOnly: true,
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  session: {
    additionalFields: {},
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github"],
    },
  },
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session | null;
