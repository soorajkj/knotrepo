import { SocialProviderList } from "better-auth/social-providers";

// import { OAuthProviderType } from "next-auth/providers";

// export type AppOAuthProvider = Extract<SocialProviders, "google" | "github">;

export type AppOAuthProvider = Extract<SocialProviderList, "google" | "github">;
