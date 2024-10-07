"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { manrope, suezone } from "@/lib/fonts";

const routes: string[] = [
  "/",
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
];

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;
  const pathname = usePathname();

  return (
    <React.Fragment>
      <style jsx global>{`
        :root {
          --font-family-manrope: ${manrope.style.fontFamily};
          --font-family-suezone: ${suezone.style.fontFamily};
        }
      `}</style>
      <NextThemeProvider
        disableTransitionOnChange
        {...(routes.includes(pathname) && { forcedTheme: "dark" })}
        {...rest}
      >
        {children}
      </NextThemeProvider>
    </React.Fragment>
  );
}
