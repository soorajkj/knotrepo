import { SocialProvider } from "better-auth/social-providers";
import { auth } from "~lib/auth";

export type AppOAuthProvider = Extract<SocialProvider, "google" | "github">;

export type Session = typeof auth.$Infer.Session | null;
