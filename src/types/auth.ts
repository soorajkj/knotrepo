import { OAuthProviderType } from "next-auth/providers";

export type AppOAuthProvider = Extract<OAuthProviderType, "google" | "github">;
