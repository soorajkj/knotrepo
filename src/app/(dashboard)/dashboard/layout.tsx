import * as React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout({ children }: LayoutProps) {
  return <React.Fragment>{children}</React.Fragment>;
}
