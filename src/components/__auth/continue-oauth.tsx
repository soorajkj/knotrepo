"use client";

import { signIn } from "next-auth/react";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function ContinueOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" block onClick={() => signIn("google")}>
        <Icon icon="CIGoogle" width={20} height={20} />
        <span>Continue with Google</span>
      </Button>
      <Button variant="secondary" block onClick={() => signIn("github")}>
        <Icon icon="CIGithub" width={20} height={20} />
        <span>Continue with Github</span>
      </Button>
    </div>
  );
}
