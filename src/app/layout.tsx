import * as React from "react";
import type { Metadata } from "next";
import Toaster from "@/components/core/toaster";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-full min-h-screen w-full bg-white font-family-manrope text-base font-normal leading-normal text-zinc-700 antialiased">
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          {props.children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
