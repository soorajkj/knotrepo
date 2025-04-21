"use client";

import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { type SocialProvider } from "better-auth/social-providers";
import { authClient } from "~lib/auth-client";
import Button from "~components/core/button";
import Icon, { type MediaIconTypes } from "~components/core/icon";

type Provider = {
  label: string;
  provider: SocialProvider;
  icon: MediaIconTypes;
};

const providers: Provider[] = [
  { provider: "google", label: "Google", icon: "MDGoogle" },
];

export default function OAuths() {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (provider: SocialProvider) =>
      authClient.signIn.social({
        provider,
        newUserCallbackURL: "/auth/signup/onboard",
      }),
  });

  const handleLogin = async (provider: SocialProvider) => {
    await mutateAsync(provider);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {providers.map((provider, index) => (
        <Button
          key={index}
          variant="outline"
          size="lg"
          onClick={() => handleLogin(provider.provider)}
          disabled={isPending}
        >
          <Icon icon={provider.icon} />
          Countinue with {provider.label}
        </Button>
      ))}
    </div>
  );
}
