"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof ToggleStyles>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(ToggleStyles({ className }))}
      {...rest}
    >
      {children}
    </TogglePrimitive.Root>
  );
});

export const ToggleStyles = cva([]);

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
