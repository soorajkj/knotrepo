import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof ButtonStyles>, "disabled"> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      type = "button",
      variant = "primary",
      size = "md",
      shape = "rounded",
      block = false,
      destructive,
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
          ButtonStyles({ variant, shape, size, block, destructive, className })
        )}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

const ButtonStyles = cva(
  [
    "group",
    "inline-flex",
    "select-none",
    "items-center",
    "justify-center",
    "text-sm",
    "font-medium",
    "leading-none",
    "transition-colors",
    "duration-100",
    "wg-antialiased",
    "border",
    "border-transparent",
    "focus:outline-0",
    "focus-visible:outline",
    "focus-visible:outline-2",
    "focus-visible:outline-offset-2",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary",
          "text-white",
          "outline-primary",
          "hover:bg-primary-600",
          // "disabled:opacity-50",
        ],
        secondary: [
          "bg-secondary",
          "text-white",
          "outline-secondary",
          "hover:bg-secondary-700",
          "disabled:bg-secondary-200",
          "dark:text-secondary-900",
          "dark:hover:bg-secondary-800",
          "dark:disabled:text-wg-white-500",
        ],
        tertiary: ["bg-surface", "hover:bg-surface-100"],
        outline: [
          "dark:shadow:none",
          "border-surface-200",
          "shadow-wg-xs",
          "hover:bg-surface",
          "disabled:border-surface-50",
          "dark:border-surface-100",
        ],
        transparent: ["bg-transparent", "hover:bg-surface"],
        link: [
          "p-0",
          "underline",
          "underline-offset-3",
          "focus-visible:text-primary",
        ],
      },
      destructive: {
        true: [],
        false: [],
      },
      block: {
        true: "w-full",
        false: "w-auto",
      },
      size: {
        sm: "gap-1 px-2 py-1 h-8",
        md: "gap-2 px-3 py-2 h-11",
      },
      shape: {
        rounded: "rounded-lg",
        pill: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        size: "md",
        className: "py-8px",
      },
      {
        variant: "outline",
        size: "sm",
        className: "py-4px",
      },
      {
        variant: ["primary", "secondary"],
        destructive: true,
        className: [
          "bg-destructive",
          "text-white",
          "outline-destructive",
          "hover:bg-destructive-600",
          "disabled:bg-destructive",
          "disabled:opacity-50",
          "dark:text-white",
          "dark:hover:bg-destructive-600",
          "dark:disabled:text-white",
        ],
      },
      {
        variant: "tertiary",
        destructive: true,
        className: [
          "bg-destructive-50",
          "hover:bg-destructive-100",
          "disabled:bg-destructive-50",
          "dark:bg-surface",
          "dark:hover:bg-surface-200",
        ],
      },
      {
        variant: "transparent",
        destructive: true,
        className: ["hover:bg-destructive-50", "dark:hover:bg-surface"],
      },
      {
        variant: "outline",
        destructive: true,
        className: [
          "border-destructive",
          "hover:bg-destructive-50",
          "disabled:border-destructive-100",
          "dark:border-destructive",
          "dark:hover:bg-surface",
          "dark:disabled:border-destructive-900",
        ],
      },
      {
        variant: "link",
        destructive: true,
        className: [
          "hover:text-destructive-800",
          "focus-visible:text-destructive-800",
          "dark:hover:text-destructive-400",
          "dark:focus-visible:text-destructive-400",
        ],
      },
      {
        variant: ["outline", "tertiary", "transparent", "link"],
        className: [
          "text-surface-900",
          "outline-primary",
          "disabled:text-surface-300",
        ],
      },
      {
        variant: ["outline", "tertiary", "transparent", "link"],
        destructive: true,
        className: [
          "text-destructive-700",
          "outline-destructive",
          "disabled:text-destructive-300",
          "dark:text-destructive-500",
          "dark:disabled:text-destructive/50",
        ],
      },
    ],
  }
);
