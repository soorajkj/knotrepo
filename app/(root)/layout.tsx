import * as React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return <main className="flex-1">{children}</main>;
}
