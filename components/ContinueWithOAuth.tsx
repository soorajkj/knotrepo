"use client";

import React from "react";
import Button from "@/components/core/Button";
import Icon from "@/components/core/Icon";

export default function ContinueWithOAuth() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" block>
        <Icon icon="google" width={20} height={20} />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
}
