"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

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
  "font-semibold",
  "leading-none",
  "text-misty-700",
  "peer-disabled:cursor-not-allowed",
  "peer-disabled:opacity-70",
]);
