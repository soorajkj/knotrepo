import * as React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
