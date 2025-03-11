import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

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

const InputStyles = tv({
  base: [
    "peer flex h-10 w-full grow rounded-lg border border-zinc-950/10 bg-transparent px-3 py-2 text-sm leading-6 text-zinc-950 shadow-sm transition-colors duration-100 hover:border-zinc-950/20 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20",
  ],
});

Input.displayName = "Input";

export default Input;
