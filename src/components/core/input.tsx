import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

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
  "flex-1",
  "h-9",
  "w-full",
  "select-none",
  "appearance-none",
  "rounded-md",
  "border",
  "border-control",
  "bg-foreground-lighter/5",
  "px-3",
  "py-2",
  "text-sm",
  "outline-none",
  "placeholder:text-foreground-muted",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-background-control",
  "focus-visible:ring-offset-2",
  "focus-visible:ring-offset-foreground-muted",
  "disabled:cursor-not-allowed",
  "disabled:opacity-50",
  "aria-[invalid=true]:bg-destructive-200",
  "aria-[invalid=true]:border-destructive-400",
  "aria-[invalid=true]:focus:border-destructive",
  "aria-[invalid=true]:focus-visible:border-destructive",
]);

Input.displayName = "Input";

export default Input;
