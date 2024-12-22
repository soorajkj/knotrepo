import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, className, ...rest } = props;

  return (
    <input
      ref={ref}
      type={type}
      className={cn(InputStyles({ className }))}
      {...rest}
    ></input>
  );
});

const InputStyles = cva([
  "peer",
  "flex",
  "grow",
  "h-11",
  "w-full",
  "rounded-lg",
  "border",
  "px-3",
  "py-2",
  "text-sm",
  "leading-6",
  "transition-colors",
  "duration-100",
  "placeholder:text-surface-500",
  "outline-primary",
  "focus:outline",
  "focus:outline-2",
  "focus:-outline-offset-1",
  "bg-background",
  "text-surface-900",
  "border-surface-200",
  "dark:border-surface-100",
  "hover:border-surface-300",
  "dark:hover:border-surface-200",
  "disabled:cursor-not-allowed",
  "disabled:bg-surface-50",
  "disabled:text-surface-300",
  "disabled:placeholder:text-surface-300",
  "disabled:dark:bg-white/5",
  "disabled:dark:text-surface-200",
  "disabled:dark:placeholder:text-surface-200",
  "aria-invalid:border-destructive",
  "aria-invalid:outline-destructive",
  "aria-invalid:hover:border-destructive",
  "aria-invalid:dark:hover:border-destructive",
]);

Input.displayName = "Input";

export default Input;
