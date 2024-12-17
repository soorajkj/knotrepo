"use client";

import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

interface OAuthFormProps {
  label: "Sign up" | "Sign in";
}

const click = async (provider: "google" | "github") => {
  await authClient.signIn.social({
    provider,
    newUserCallbackURL: "/auth/onboard",
  });
};

export default function OAuthForm(props: OAuthFormProps) {
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
