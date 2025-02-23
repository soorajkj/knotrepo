"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/utils/classnames";
import Label from "@/components/core/label";

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "focus-visible:ring-ring aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});

const RadioGroupItemMod = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: string;
  }
>(({ children, label, className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "border-strong data-[state=checked]:bg-selection data-[state=checked]:ring-border hover:border-stronger group flex flex-col gap-2 rounded-md border bg-surface-200 p-2 shadow-sm transition-colors data-[state=checked]:border-foreground data-[state=checked]:border-primary data-[state=checked]:ring-1 hover:bg-surface-300",
        className
      )}
      {...props}
    >
      {children}
      <div className="flex items-center gap-2">
        <div className="relative h-3 w-3 min-w-3">
          <RadioGroupPrimitive.Indicator className="border-background-surface-300 data-[state=checked]:border-background-surface-300 absolute left-px top-px size-2.5 rounded-full border data-[state=checked]:bg-foreground data-[state=checked]:ring-foreground" />
          <div className="border-stronger group-hover:border-foreground-light absolute h-3 w-3 rounded-full border transition-colors group-data-[state=checked]:border-foreground" />
        </div>
        <Label htmlFor={props.value} className="text-xs">
          {label}
        </Label>
      </div>
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
RadioGroupItemMod.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroup = { RadioGroupRoot, RadioGroupItem, RadioGroupItemMod };

export default RadioGroup;
