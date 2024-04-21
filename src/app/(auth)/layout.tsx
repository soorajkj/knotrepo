import * as React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <div className="mx-auto flex min-h-screen max-w-96 items-center justify-center overflow-hidden px-4">
        <div className="flex-1 py-12">{children}</div>
      </div>
    </React.Fragment>
  );
}
