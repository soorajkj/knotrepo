import * as React from "react";
import type { Metadata } from "next";
import { sora } from "@/lib/fonts";
import ThemeProvider from "@/components/theme-provider";
import ThemeToggler from "@/components/theme-toggler";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en" className={sora.className} suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-white font-family-sora text-sm font-normal leading-normal text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-400">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {props.children}
          <ThemeToggler />
        </ThemeProvider>
      </body>
    </html>
  );
}
