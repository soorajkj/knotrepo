"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

const TabsRoot = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex gap-2", className)}
    {...props}
  />
));

TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> &
    VariantProps<typeof TabsTriggerStyles>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(TabsTriggerStyles({ className }))}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = { TabsRoot, TabsList, TabsTrigger, TabsContent };

export default Tabs;

const TabsTriggerStyles = tv({
  base: [
    "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition data-[state=active]:text-white disabled:pointer-events-none disabled:opacity-5 dark:data-[state=active]:bg-white/5 dark:hover:bg-white/5",
  ],
  variants: {},
});
