"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

interface ToasterProps extends React.ComponentProps<typeof Sonner> {}

export default function Toaster(prosp: ToasterProps) {
  const { ...rest } = prosp;
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      expand={true}
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        className: "group toast border-transparent",
        classNames: {
          default: "group-[.toaster]:bg-neutral-800",
          info: "group-[.toaster]:bg-blue-800",
          success: "group-[.toaster]:bg-green-800",
          error: "group-[.toaster]:bg-red-800",
          warning: "group-[.toaster]:bg-yellow-800",
        },
      }}
      {...rest}
    />
  );
}
