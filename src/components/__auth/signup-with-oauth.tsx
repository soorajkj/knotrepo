"use client";

import Button from "@/src/components/core/button";
import Icon from "@/src/components/core/icon";

export default function SignupWithOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" block onClick={() => {}}>
        <Icon icon="google" width={20} height={20} />
        <span>Sign up with Google</span>
      </Button>
    </div>
  );
}