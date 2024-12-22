"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";

interface AvatarRootProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof AvatarRootStyles> {}

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarRootProps
>((props, ref) => {
  const { size = "md", className, ...rest } = props;

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(AvatarRootStyles({ size, className }))}
      {...rest}
    />
  );
});

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    VariantProps<typeof AvatarFallbackStyles>
>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(AvatarFallbackStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    VariantProps<typeof AvatarImageStyles>
>((props, ref) => {
  const { src, className, ...rest } = props;

  return (
    <AvatarPrimitive.Image
      ref={ref}
      src={src || ""}
      className={cn(AvatarImageStyles({ className }))}
      {...rest}
    />
  );
});

const AvatarRootStyles = cva(
  [
    "relative",
    "inline-flex",
    "aspect-square",
    "shrink-0",
    "items-center",
    "justify-center",
    "overflow-hidden",
    "rounded-full",
  ],
  {
    variants: {
      size: {
        xxs: ["h-4", "min-w-4", "text-xxs"],
        xs: ["h-6", "min-w-6", "text-xs"],
        sm: ["h-8", "min-w-8", "text-sm"],
        md: ["h-10", "min-w-10", "text-base"],
        lg: ["h-12", "min-w-12", "text-lg"],
        xl: ["h-14", "min-w-14", "text-xl"],
        xxl: ["h-16", "min-w-16", "text-2xl"],
      },
    },
  }
);

const AvatarFallbackStyles = cva([
  "flex",
  "h-full",
  "w-full",
  "items-center",
  "justify-center",
  "border",
  "border-primary",
  "bg-primary",
  "text-white",
  "rounded-full",
]);

const AvatarImageStyles = cva([
  "static",
  "block",
  "aspect-square",
  "h-full",
  "w-full",
]);

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const Avatar = { AvatarRoot, AvatarFallback, AvatarImage };

export default Avatar;
