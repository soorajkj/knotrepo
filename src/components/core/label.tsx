"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof LabelStyles>
>((props, ref) => {
  const { children, className, ...rest } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(LabelStyles({ className }))}
      {...rest}
    >
      {children}
    </LabelPrimitive.Root>
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;

const LabelStyles = cva([
  "inline-block",
  "text-sm",
  "leading-none",
  "dark:text-surface-900",
  "leading-none",
  "text-foreground-light",
  "peer-disabled:cursor-not-allowed",
  "peer-disabled:opacity-70",
]);
