import React, { InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
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
  "border-slate-300",
  "bg-transparent",
  "px-3",
  "py-2",
  "text-base",
  "text-slate-900",
  "placeholder-slate-400",
  "shadow-sm",
  "outline-none",
  "focus-visible:border-violet-300",
  "focus-visible:ring-4",
  "focus-visible:ring-violet-100",
  "disabled:cursor-not-allowed",
  "peer-[.error]:border-red-300",
  "peer-[.error]:ring-red-600/20",
  "dark:border-slate-700",
  "dark:bg-slate-800/20",
  "dark:text-slate-100",
  "dark:placeholder-slate-600",
  "dark:focus-visible:border-violet-500",
  "dark:focus-visible:ring-violet-500/20",
  "dark:peer-[.error]:border-red-900",
  "dark:peer-[.error]:ring-red-600/20",
]);

Input.displayName = "Input";

export default Input;
