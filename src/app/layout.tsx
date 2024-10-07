import * as React from "react";
import type { Metadata } from "next";
import { auth } from "@/auth";
import Toaster from "@/components/core/toaster";
import SessionProvider from "@/components/SessionProvider";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout(props: LayoutProps) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="h-full min-h-screen w-full bg-default font-family-manrope text-base font-normal leading-normal text-default antialiased scrollbar">
        <SessionProvider session={session}>
          <ThemeProvider enableSystem defaultTheme="system" attribute="class">
            {props.children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
