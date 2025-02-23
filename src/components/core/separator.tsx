"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof SeparatorStyles>
>((props, ref) => {
  const {
    children,
    className,
    orientation = "horizontal",
    decorative = true,
    ...rest
  } = props;

  return (
    <div className={cn("relative flex items-center", className)}>
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(SeparatorStyles({ orientation, className }))}
        {...rest}
      />
      {children && (
        <React.Fragment>
          <span className="mx-2 text-xs font-medium text-surface-400">
            {children}
          </span>
          <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(SeparatorStyles({ orientation, className }))}
            {...rest}
          />
        </React.Fragment>
      )}
    </div>
  );
});

const SeparatorStyles = cva(
  [
    "bg-surface-100",
    "pointer-events-none",
    "relative",
    "flex",
    "flex-1",
    "shrink-0",
    "items-center",
    "leading-none",
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
