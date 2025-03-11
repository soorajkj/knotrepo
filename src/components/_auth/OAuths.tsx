import * as React from "react";
import { AppOAuthProvider } from "~types/auth";
import Button from "~components/core/button";
import Icon, { MediaIconTypes } from "~components/core/icon";

type Provider = {
  name: AppOAuthProvider;
  icon: MediaIconTypes;
};

const providers: Provider[] = [
  { name: "google", icon: "MDGoogle" },
  { name: "github", icon: "MDGitHub" },
];

export default function OAuths() {
  return (
    <div className="flex flex-col gap-4">
      {providers.map(({ icon, name }, i) => (
        <Button key={i} variant="secondary" size="md">
          <Icon icon={icon} />
          Countinue with {name.charAt(0).toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </div>
  );
}
