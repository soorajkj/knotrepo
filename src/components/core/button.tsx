import * as React from "react";
import { cn } from "@/src/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

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
    "h-10",
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
          "bg-blue-600",
          "text-white",
          "hover:bg-blue-700",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:bg-white",
          "dark:text-zinc-900",
          "dark:hover:bg-opacity-90",
        ],
        secondary: [
          "bg-zinc-200",
          "border-zinc-300",
          "text-zinc-700",
          "hover:bg-zinc-300",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:bg-white",
          "dark:bg-opacity-10",
          "dark:border-zinc-500/20",
          "dark:text-zinc-200",
          "dark:hover:bg-opacity-20",
          "dark:hover:border-zinc-200/20",
          "dark:hover:text-zinc-50",
        ],
        outline: [
          "border-zinc-300",
          "text-zinc-700",
          "hover:bg-zinc-50",
          "focus-visible:ring-2",
          "focus-visible:ring-blue-500",
          "focus-visible:ring-offset-2",
          "active:opacity-80",
          "dark:border-zinc-800",
          "dark:text-zinc-200",
          "dark:hover:bg-transparent",
          "dark:hover:border-zinc-700",
          "dark:hover:text-white",
        ],
        ghost: [
          "dark:hover:bg-zinc-800",
          "active:opacity-80",
          "dark:hover:text-white",
        ],
      },
    },
  }
);

Button.displayName = "Button";

export default Button;
