"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children, ...rest } = props;

  return (
    <NextThemeProvider disableTransitionOnChange {...rest}>
      {children}
    </NextThemeProvider>
  );
}
