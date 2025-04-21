import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonStyles> {
  asChild?: boolean;
  iconOnly?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      asChild,
      type = "button",
      variant = "secondary",
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
    "group inline-flex select-none items-center justify-center whitespace-nowrap rounded-lg border border-transparent text-sm font-normal leading-6 transition duration-300 disabled:pointer-events-none disabled:opacity-0 [&>svg]:size-4",
  ],
  variants: {
    variant: {
      primary: "bg-emerald-600 text-white shadow-inner shadow-emerald-700",
      secondary: "bg-white text-neutral-900",
      destructive: "",
      outline: "border-neutral-700/60 bg-neutral-900/60 text-white",
      ghost: "text-white",
    },
    size: {
      sm: "h-8 gap-1 p-2 px-3",
      md: "h-9 gap-1 p-2.5 px-3.5",
      lg: "h-10 gap-1.5 px-4 py-2.5",
    },
    iconOnly: {
      true: "aspect-square p-0",
    },
  },
});
