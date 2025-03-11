import * as React from "react";
import { LayoutProps } from "~types/layout";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4">{children}</div>
    </div>
  );
}
