import * as React from "react";
import type { Metadata } from "next";
import Toaster from "@/components/core/toaster";
import ThemeProvider from "@/components/ThemeProvider";
import "@/styles/app.scss";

export const metadata: Metadata = {};

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout(props: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="h-full min-h-screen w-full bg-background font-family-manrope text-base font-normal leading-normal text-foreground antialiased scrollbar selection:bg-primary-100">
        <ThemeProvider enableSystem defaultTheme="system" attribute="class">
          {props.children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
