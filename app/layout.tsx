import * as React from "react";
import type { Metadata } from "next";
import { manrope } from "@/lib/fonts";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-white font-family-manrope text-sm font-normal leading-normal text-zinc-700 antialiased dark:bg-zinc-950 dark:text-zinc-400">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
