"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { tv } from "tailwind-variants";
import { cn } from "~utils/classnames";
import Icon from "~components/core/icon";

interface ToastRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ToastRootStyles> {}

const ToastRoot = React.forwardRef<HTMLDivElement, ToastRootProps>(
  ({ className, variant = "info", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(ToastRootStyles({ variant, className }))}
        {...props}
      />
    );
  }
);

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action> &
    VariantProps<typeof ToastActionStyles>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(ToastActionStyles({ className }))}
    {...props}
  />
));

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> &
    VariantProps<typeof ToastCloseStyles>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(ToastCloseStyles({ className }))}
    toast-close=""
    {...props}
  >
    <Icon icon="X" className="size-4" />
  </ToastPrimitives.Close>
));

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(
      "text-sm font-semibold text-neutral-200 [&+div]:text-sm",
      className
    )}
    {...props}
  />
));

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
));

export type ToastActionElement = React.ReactElement<typeof ToastAction>;
ToastRoot.displayName = ToastPrimitives.Root.displayName;
ToastAction.displayName = ToastPrimitives.Action.displayName;
ToastClose.displayName = ToastPrimitives.Close.displayName;
ToastTitle.displayName = ToastPrimitives.Title.displayName;
ToastDescription.displayName = ToastPrimitives.Description.displayName;

const Toast = {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

export default Toast;

const ToastRootStyles = tv({
  base: [
    "flex w-fit flex-col gap-2 rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm",
  ],
  variants: {
    variant: {
      info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-100",
      success:
        "border-green-200 bg-green-50 text-green-900 dark:border-green-700 dark:bg-green-950 dark:text-green-100",
      error: "border-purple-200 bg-purple-50 text-purple-900",
      warning:
        "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-700 dark:bg-yellow-950 dark:text-yellow-100",
    },
  },
});

export type ToastVariants = keyof typeof ToastRootStyles.variants.variant;

const ToastActionStyles = tv({
  base: [
    "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium disabled:pointer-events-none disabled:opacity-50",
  ],
});

const ToastCloseStyles = cva([
  "absolute",
  "right-1",
  "top-1",
  "rounded-md",
  "p-1",
  "opacity-0",
  "transition-opacity",
  "focus:opacity-100",
  "focus:outline-none",
  "focus:ring-1",
  "group-hover:opacity-100",
]);
