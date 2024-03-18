"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof SeparatorStyles>
>((props, ref) => {
  const {
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(SeparatorStyles({ orientation, className }))}
      {...rest}
    />
  );
});

const SeparatorStyles = cva(
  [
    "bg-slate-200",
    "pointer-events-none",
    "relative",
    "flex",
    "shrink-0",
    "items-center",
    "dark:bg-slate-700",
  ],
  {
    variants: {
      orientation: {
        horizontal: ["h-px w-full"],
        vertical: ["h-full w-px"],
      },
    },
  }
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
