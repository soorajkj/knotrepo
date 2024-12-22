"use client";

import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

interface OAuthFormProps {
  label: "Sign up" | "Sign in";
}

export default function OAuthForm(props: OAuthFormProps) {
  const click = async (provider: "google" | "github") => {
    await authClient.signIn.social(
      {
        provider,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {},
        onSuccess: () => {},
        onError: () => {},
      }
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <Button variant="outline" block={true} onClick={() => click("google")}>
        <Icon icon="CIGoogle" className="size-5" />
        <span>{props.label} with Google</span>
      </Button>
      <Button variant="outline" block={true} onClick={() => click("github")}>
        <Icon icon="CIGithub" className="size-5" />
        <span>{props.label} with Github</span>
      </Button>
    </div>
  );
}
