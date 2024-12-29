"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;
  const pathname = usePathname();

  return (
    <NextThemeProvider
      disableTransitionOnChange
      {...([""].includes(pathname) && { forcedTheme: "dark" })}
      {...rest}
    >
      {children}
    </NextThemeProvider>
  );
}
