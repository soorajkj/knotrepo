import * as React from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();

  if (!session?.user.username) redirect("/auth/onboard");

  return <React.Fragment>{children}</React.Fragment>;
}
