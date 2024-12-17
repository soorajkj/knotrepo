"use client";

import { oauthSigninAction } from "@/actions/auth/oauth";
import { AppOAuthProvider } from "@/types/auth";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

interface OAuthFormProps {
  label: "Sign up" | "Sign in";
}

const clickHandler = async (provider: AppOAuthProvider) => {
  await oauthSigninAction(provider);
};

export default function OAuthForm(props: OAuthFormProps) {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="outline" block onClick={() => clickHandler("google")}>
        <Icon icon="CIGoogle" className="size-5" />
        <span>{props.label} with Google</span>
      </Button>
      <Button variant="outline" block onClick={() => clickHandler("github")}>
        <Icon icon="CIGithub" className="size-5" />
        <span>{props.label} with Github</span>
      </Button>
    </div>
  );
}
