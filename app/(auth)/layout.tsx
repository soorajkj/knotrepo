import React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-96 items-center justify-center px-4">
      <div className="flex-1 py-12">{children}</div>
    </div>
  );
}
