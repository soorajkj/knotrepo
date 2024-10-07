import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof ButtonStyles>, "disabled"> {
  asChild?: boolean;
  loading?: boolean;
  size?: "tiny" | "small" | "medium" | "large" | "xlarge";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      type = "button",
      block = false,
      variant = "default",
      size = "medium",
      className,
      disabled,
      ...rest
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        type={type}
        ref={ref}
        disabled={disabled}
        className={cn(
          ButtonStyles({ variant, block, size, disabled, className })
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

const ButtonStyles = cva(
  [
    "inline-flex",
    "h-9",
    "cursor-pointer",
    "select-none",
    "appearance-none",
    "items-center",
    "justify-center",
    "space-x-2",
    "overflow-hidden",
    "whitespace-nowrap",
    "rounded-md",
    "border",
    "border-transparent",
    "px-4",
    "py-2.5",
    "font-medium",
    "leading-none",
    "outline-none",
    "transition-all",
  ],
  {
    variants: {
      block: {
        true: "w-full",
        false: "w-auto",
      },
      variant: {
        primary: [
          "bg-brand-400",
          "dark:bg-brand-500",
          "hover:bg-brand/80",
          "dark:hover:bg-brand/50",
          "text-foreground",
          "border-brand-500/75",
          "dark:border-brand/30",
          "hover:border-brand-600",
          "dark:hover:border-brand",
          "focus-visible:outline-brand-600",
          "data-[state=open]:bg-brand-400/80",
          "dark:data-[state=open]:bg-brand-500/80",
          "data-[state=open]:outline-brand-600",
        ],
        default: [
          "text-foreground",
          "bg-alternative",
          "dark:bg-muted",
          "hover:bg-selection",
          "border-strong",
          "hover:border-stronger",
          "focus-visible:outline-brand-600",
          "data-[state=open]:bg-selection",
          "data-[state=open]:outline-brand-600",
          "data-[state=open]:border-button-hover",
        ],
        secondary: [
          "bg-foreground",
          "text-background",
          "hover:text-border-stronger",
          "focus-visible:text-border-control",
          "border-foreground-light",
          "hover:border-foreground-lighter",
          "focus-visible:outline-border-strong",
          "data-[state=open]:border-foreground-lighter",
          "data-[state=open]:outline-border-strong",
        ],
        alternative: [
          "text-foreground",
          "bg-brand-400",
          "hover:bg-brand-500",
          "border-brand-500",
          "focus-visible:border-brand-500",
          "focus-visible:outline-brand-600",
          "data-[state=open]:bg-brand-500",
          "data-[state=open]:border-brand-500",
          "data-[state=open]:outline-brand-600",
        ],
        outline: [
          "text-foreground",
          "bg-transparent",
          "border-strong",
          "hover:border-foreground-muted",
          "focus-visible:outline-border-strong",
          "data-[state=open]:border-stronger",
          "data-[state=open]:outline-border-strong",
        ],
        dashed: [
          "text-foreground",
          "border",
          "border-dashed",
          "border-strong",
          "hover:border-stronger",
          "bg-transparent",
          "focus-visible:outline-border-strong",
          "data-[state=open]:border-stronger",
          "data-[state=open]:outline-border-strong",
        ],
        link: [
          "text-brand-600",
          "border",
          "border-transparent",
          "hover:bg-brand-400",
          "border-opacity-0",
          "bg-opacity-0",
          "shadow-none",
          "focus-visible:outline-border-strong",
          "data-[state=open]:bg-brand-400",
          "data-[state=open]:outline-border-strong",
        ],
        text: [
          "text-foreground",
          "hover:bg-surface-300",
          "shadow-none",
          "focus-visible:outline-border-strong",
          "data-[state=open]:bg-surface-300",
          "data-[state=open]:outline-border-strong",
          "border-transparent",
        ],
        danger: [
          "text-foreground",
          "bg-destructive-300",
          "dark:bg-destructive-400",
          "hover:bg-destructive-400",
          "dark:hover:bg-destructive/50",
          "border-destructive-500",
          "hover:border-destructive",
          "hover:text-hi-contrast",
          "focus-visible:outline-amber-700",
          "data-[state=open]:border-destructive",
          "data-[state=open]:bg-destructive-400",
          "dark:data-[state=open]:bg-destructive-/50",
          "data-[state=open]:outline-destructive",
        ],
        warning: [
          "text-foreground",
          "bg-warning-300",
          "dark:bg-warning-400",
          "hover:bg-warning-400",
          "dark:hover:bg-warning/50",
          "border-warning-500",
          "hover:border-warning",
          "hover:text-hi-contrast",
          "focus-visible:outline-amber-700",
          "data-[state=open]:border-warning",
          "data-[state=open]:bg-warning-400",
          "dark:data-[state=open]:bg-warning-/50",
          "data-[state=open]:outline-warning",
        ],
      },
      size: {
        tiny: ["text-xs", "h-7", "px-2.5", "py-1"],
        small: ["text-sm", "h-8", "px-3", "py-2"],
        medium: ["text-sm", "h-9", "px-4", "py-2"],
        large: ["text-base", "h-10", "px-4", "py-2"],
        xlarge: ["text-base", "h-11", "px-6", "py-3"],
      },
      disabled: {
        true: ["opacity-50", "cursor-not-allowed", "pointer-events-none"],
      },
    },
  }
);

Button.displayName = "Button";

export default Button;
