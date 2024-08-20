import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      type = "button",
      block = false,
      variant = "primary",
      className,
      ...rest
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        type={type}
        ref={ref}
        className={cn(ButtonStyles({ variant, block, className }))}
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
    "rounded-lg",
    "border",
    "border-transparent",
    "px-4",
    "py-2.5",
    "text-sm",
    "font-semibold",
    "leading-none",
    "outline-none",
    "transition-all",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      block: {
        true: "w-full",
        false: "w-auto",
      },
      variant: {
        primary: [
          "bg-neutral-900",
          "text-white",
          "hover:bg-neutral-900",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:bg-emerald-700",
          "dark:border-emerald-500",
        ],
        secondary: [
          "bg-emerald-50",
          "border-emerald-50",
          "text-emerald-600",
          "hover:bg-emerald-100",
          "hover:text-emerald-700",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:bg-neutral-800",
          "dark:text-neutral-100",
          "dark:border-neutral-700",
          "dark:hover:bg-neutral-600",
          "dark:hover:text-white",
        ],
        outline: [
          "border-emerald-50",
          "text-neutral-800",
          "hover:bg-emerald-100",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:text-neutral-300",
          "dark:border-neutral-900",
          "dark:hover:bg-neutral-800",
          "dark:hover:text-white",
        ],
        ghost: [
          "text-emerald-600",
          "hover:bg-emerald-100",
          "hover:text-emerald-700",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:text-neutral-100",
          "dark:hover:bg-neutral-800",
          "dark:hover:text-white",
        ],
      },
    },
  }
);

Button.displayName = "Button";

export default Button;
