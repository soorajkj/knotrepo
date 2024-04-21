"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";
import * as TogglePrimitive from "@radix-ui/react-toggle";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn("select-none", className)}
      {...rest}
    >
      {children}
    </TogglePrimitive.Root>
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
