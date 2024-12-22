"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { cn } from "@/utils/classnames";
import Icon from "@/components/core/icon";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> &
    VariantProps<typeof ToastViewportStyles>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(ToastViewportStyles({ className }))}
    {...props}
  />
));

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof ToastRootStyles>
>(({ className, variant = "default", ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(ToastRootStyles({ variant, className }))}
      {...props}
    />
  );
});

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
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
  React.ElementRef<typeof ToastPrimitives.Close>,
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
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-sm", className)}
    {...props}
  />
));

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
));

type ToasterProps = React.ComponentProps<typeof Sonner>;

export const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      duration={20000}
      toastOptions={{
        className: "items-start shadow-none",
        classNames: { title: "text-sm leading-none" },
      }}
      {...props}
    />
  );
};

export type ToastRootProps = React.ComponentPropsWithoutRef<typeof ToastRoot>;
export type ToastActionElement = React.ReactElement<typeof ToastAction>;
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
ToastRoot.displayName = ToastPrimitives.Root.displayName;
ToastAction.displayName = ToastPrimitives.Action.displayName;
ToastClose.displayName = ToastPrimitives.Close.displayName;
ToastTitle.displayName = ToastPrimitives.Title.displayName;
ToastDescription.displayName = ToastPrimitives.Description.displayName;

const Toast = {
  ToastProvider,
  ToastViewport,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

export default Toast;

const ToastViewportStyles = cva([
  "fixed",
  "top-0",
  "z-[100]",
  "flex",
  "max-h-screen",
  "w-full",
  "flex-col-reverse",
  "p-4",
  "sm:bottom-0",
  "sm:right-0",
  "sm:top-auto",
  "sm:flex-col",
  "md:max-w-md",
]);

const ToastRootStyles = cva(
  [
    "group",
    "pointer-events-auto",
    "relative",
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "space-x-2",
    "overflow-hidden",
    "rounded-md",
    "border",
    "p-4",
    "pr-6",
    "shadow-sm",
    "transition-all",
    "data-[swipe=cancel]:translate-x-0",
    "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
    "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]",
    "data-[swipe=move]:transition-none",
    "data-[state=open]:animate-in",
    "data-[state=closed]:animate-out",
    "data-[swipe=end]:animate-out",
    "data-[state=closed]:fade-out-80",
    "data-[state=closed]:slide-out-to-right-full",
    "data-[state=open]:slide-in-from-top-full",
    "data-[state=open]:sm:slide-in-from-bottom-full",
  ],
  {
    variants: {
      variant: {
        default: ["bg-white", "text-zinc-800", "border-zinc-200"],
        success: ["bg-white", "text-teal-800", "border-teal-200"],
        destructive: ["bg-white", "text-red-800", "border-red-200"],
      },
    },
  }
);

const ToastActionStyles = cva([
  "hover:bg-secondary",
  "focus:ring-ring",
  "group-[.destructive]:border-muted/40",
  "group-[.destructive]:hover:border-destructive/30",
  "group-[.destructive]:hover:bg-destructive",
  "group-[.destructive]:hover:text-destructive-foreground",
  "group-[.destructive]:focus:ring-destructive",
  "inline-flex",
  "h-8",
  "shrink-0",
  "items-center",
  "justify-center",
  "rounded-md",
  "border",
  "bg-transparent",
  "px-3",
  "text-sm",
  "font-medium",
  "transition-colors",
  "focus:outline-none",
  "focus:ring-1",
  "disabled:pointer-events-none disabled:opacity-50",
]);

const ToastCloseStyles = cva([
  "text-foreground/50",
  "hover:text-foreground",
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
  "group-[.destructive]:text-red-300",
  "group-[.destructive]:hover:text-red-50",
  "group-[.destructive]:focus:ring-red-400",
  "group-[.destructive]:focus:ring-offset-red-600",
]);
