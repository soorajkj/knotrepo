"use client";

import { signIn } from "next-auth/react";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function ContinueOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button block onClick={() => signIn("google")}>
        <Icon icon="CIGoogle" className="size-5" />
        <span>Continue with Google</span>
      </Button>
      <Button block onClick={() => signIn("github")}>
        <Icon icon="CIGithub" className="size-5" />
        <span>Continue with Github</span>
      </Button>
    </div>
  );
}
