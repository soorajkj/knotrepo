import * as React from "react";
import { greet } from "~utils/greet";

interface WelcomeProps {
  name: string;
}

export default function Welcome(props: WelcomeProps) {
  const { name } = props;

  return (
    <div className="flex flex-col gap-1.5 [&>*]:leading-none">
      <h1 className="font-semibold text-zinc-950 dark:text-white">
        {`${greet()}, ${name}`}
      </h1>
      <p className="text-sm">Welcome back to Snip 👋🏻</p>
    </div>
  );
}
