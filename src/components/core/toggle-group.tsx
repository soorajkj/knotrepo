"use client";

import * as React from "react";
import { cn } from "@/src/lib/utils";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, VariantProps } from "class-variance-authority";

const ToggleGroupRoot = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    {children}
  </ToggleGroupPrimitive.Root>
));

ToggleGroupRoot.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof ToggleGroupStyles>
>(({ className, children, ...props }, ref) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(ToggleGroupStyles({ className }))}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

const ToggleGroupStyles = cva([
  "dark:data-[state=on]:bg-zinc-800",
  "dark:data-[state=on]:text-zinc-50",
  "inline-flex",
  "h-9",
  "w-9",
  "items-center",
  "justify-center",
  "rounded-md",
  "data-[state=on]:bg-zinc-300",
  "data-[state=on]:text-zinc-900",
  "dark:hover:text-zinc-50",
  "hover:text-zinc-900",
]);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

const ToggleGroup = { ToggleGroupRoot, ToggleGroupItem };

export default ToggleGroup;
