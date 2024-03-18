import * as React from "react";
import type { Metadata } from "next";
import { sora } from "@/lib/fonts";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en" className={sora.className} suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-white font-family-sora text-sm font-normal leading-normal text-slate-700 antialiased dark:bg-slate-950 dark:text-slate-400">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
