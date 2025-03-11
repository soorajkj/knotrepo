import "~schemas/env";
import * as React from "react";
import type { Metadata } from "next";
import { LayoutProps } from "~types/layout";
import { Toaster } from "~components/core/toast";
import ThemeProvider from "~components/ThemeProvider";
import ThemeSwitch from "~components/ThemeSwitch";
import "~styles/app.scss";

export const metadata: Metadata = {
  title: "Knotrepo",
};

export default async function Layout(props: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-family-manrope h-full min-h-screen w-full bg-zinc-50 font-sans text-base font-normal leading-normal text-zinc-600 antialiased scrollbar dark:bg-zinc-900 dark:text-zinc-400">
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          defaultTheme="system"
          attribute="class"
        >
          {props.children}
          <Toaster />
          <ThemeSwitch />
        </ThemeProvider>
      </body>
    </html>
  );
}
