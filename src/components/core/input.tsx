import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, type, ...rest } = props;

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
  "inline-flex",
  "h-10",
  "w-full",
  "select-none",
  "appearance-none",
  "items-center",
  "gap-2",
  "rounded-lg",
  "border",
  "border-zinc-300",
  "bg-transparent",
  "px-3",
  "py-2",
  "text-base",
  "text-zinc-900",
  "placeholder-zinc-400",
  "shadow-sm",
  "outline-none",
  "focus-visible:border-blue-300",
  "focus-visible:ring-4",
  "focus-visible:ring-blue-100",
  "disabled:cursor-not-allowed",
  "peer-[.error]:border-red-300",
  "peer-[.error]:ring-red-600/20",
  "dark:border-zinc-700",
  "dark:bg-zinc-800/20",
  "dark:text-zinc-100",
  "dark:placeholder-zinc-600",
  "dark:focus-visible:border-blue-500",
  "dark:focus-visible:ring-blue-500/20",
  "dark:peer-[.error]:border-red-900",
  "dark:peer-[.error]:ring-red-600/20",
]);

Input.displayName = "Input";

export default Input;
