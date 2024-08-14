"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { manrope, suezone } from "@/lib/fonts";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <React.Fragment>
      <style jsx global>{`
        :root {
          --font-family-manrope: ${manrope.style.fontFamily};
          --font-family-suezone: ${suezone.style.fontFamily};
        }
      `}</style>
      <NextThemeProvider disableTransitionOnChange {...rest}>
        {children}
      </NextThemeProvider>
    </React.Fragment>
  );
}
