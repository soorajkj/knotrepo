import * as React from "react";
import type { Metadata } from "next";
import { auth } from "@/auth";
import Toaster from "@/components/core/toaster";
import SessionProvider from "@/components/session-provider";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout(props: LayoutProps) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-white font-family-manrope text-base font-normal leading-normal text-neutral-500 antialiased dark:bg-neutral-900 dark:text-neutral-400">
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
