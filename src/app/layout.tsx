import * as React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "~types/layout";
import { inter } from "~lib/fonts";
import { getServerSession } from "~utils/get-session";
import Toaster from "~components/core/toaster";
import QueryProvider from "~components/query-provider";
import SessionProvider from "~components/session-provider";
import ThemeProvider from "~components/theme-provider";
import "~styles/app.css";
import ThemeSwitch from "~components/theme-switch";

export const metadata: Metadata = {
  title: "Knotrepo",
};

export default async function Layout(props: LayoutProps) {
  const { children } = props;
  const session = await getServerSession();

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning={true}>
      <body className="size-full min-h-screen bg-neutral-900 font-inter text-base font-normal leading-normal text-neutral-400 antialiased">
        <QueryProvider>
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            defaultTheme="system"
            attribute="class"
          >
            <SessionProvider session={session}>{children}</SessionProvider>
            <Toaster />
            <ThemeSwitch />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
