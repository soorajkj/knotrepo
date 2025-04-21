"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { toast as toastFn, Toaster as TosterPrimitive } from "sonner";

interface ToasterProps extends React.ComponentProps<typeof TosterPrimitive> {}

export default function Toaster(props: ToasterProps) {
  const { className, ...rest } = props;
  const { resolvedTheme } = useTheme();

  return (
    <TosterPrimitive
      theme={resolvedTheme as ToasterProps["theme"]}
      className={className}
      {...rest}
    />
  );
}

export const toast = {
  error: toastFn.error,
  promise: toastFn.promise,
  dismiss: toastFn.dismiss,
  custom: toastFn.custom,
};
