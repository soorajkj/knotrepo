"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types";

interface ThemeProviderProps extends NextThemeProviderProps {}

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;
  const pathname = usePathname();

  return (
    <NextThemeProvider
      {...([""].includes(pathname) && { forcedTheme: "dark" })}
      {...rest}
    >
      {children}
    </NextThemeProvider>
  );
}
