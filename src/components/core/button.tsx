import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof ButtonStyles>, "disabled"> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      type = "button",
      variant = "primary",
      size = "md",
      iconOnly = false,
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
        className={cn(ButtonStyles({ variant, size, iconOnly, className }))}
        {...rest}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;

const ButtonStyles = tv({
  base: [
    "group inline-flex select-none items-center justify-center rounded-lg border text-sm font-medium leading-6 transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    variant: {
      primary: [
        "border-zinc-950/90 bg-zinc-900 text-center text-white dark:border-white/5 dark:bg-zinc-600 dark:text-white",
      ],
      secondary: [
        "border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",
      ],
      outline: [
        "border-zinc-900/10 bg-transparent text-zinc-600 hover:bg-zinc-900/10 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
      ],
      ghost: [
        "border-transparent bg-transparent text-zinc-600 hover:bg-zinc-900/10 hover:text-zinc-900 dark:border-transparent dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white",
      ],
    },
    size: {
      sm: "h-9 gap-2 px-3 py-2 [&>svg]:size-4",
      md: "h-10 gap-2 px-3.5 py-2.5 [&>svg]:size-4",
      lg: "h-11 gap-1.5 px-4 py-2.5 [&>svg]:size-4",
    },
    iconOnly: {
      true: null,
      false: null,
    },
  },
  compoundVariants: [
    {
      iconOnly: true,
      size: "sm",
      className: "size-9 p-0",
    },
    {
      iconOnly: true,
      size: "md",
      className: "size-10 p-0",
    },
    {
      iconOnly: true,
      size: "lg",
      className: "size-11 p-0",
    },
  ],
});
