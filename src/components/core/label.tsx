"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

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

const LabelStyles = tv({
  base: [
    "inline-block select-none text-base/6 font-normal leading-none text-neutral-300 disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sm:text-sm/none",
  ],
});
