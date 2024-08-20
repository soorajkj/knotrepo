import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {
  invalid?: boolean;
  _prefix?: React.ReactNode;
  _suffix?: React.ReactNode;
  _prefixStyle?: boolean;
  _suffixStyle?: boolean;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      type,
      invalid = false,
      _prefix,
      _suffix,
      _prefixStyle = true,
      _suffixStyle = true,
      className,
      ...rest
    } = props;

    return (
      <div
        aria-invalid={invalid || undefined}
        className={cn(InputRootStyles({ invalid, className }))}
      >
        {_prefix && (
          <InputAddon type="_prefix" styled={!!_prefixStyle}>
            {_prefix}
          </InputAddon>
        )}
        {_suffix && (
          <InputAddon type="_suffix" styled={!!_suffixStyle}>
            {_suffix}
          </InputAddon>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(InputStyles())}
          {...rest}
        ></input>
      </div>
    );
  }
);

interface InputAddonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof InputAddonStyles> {
  asChild?: boolean;
}

const InputAddon = React.forwardRef<HTMLDivElement, InputAddonProps>(
  (props, ref) => {
    const { asChild, type, styled, className, ...rest } = props;
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(InputAddonStyles({ type, styled, className }))}
        {...rest}
      ></Comp>
    );
  }
);

const InputRootStyles = cva(
  [
    "flex",
    "relative",
    "border",
    "focus-within:ring-4",
    "outline-none",
    "rounded-lg",
    "overflow-hidden",
    "dark:border-neutral-200/5",
  ],
  {
    variants: {
      invalid: {
        true: [
          "border-red-300",
          "focus-within:border-red-300",
          "focus-within:ring-red-600/20",
        ],
        false: [
          "border-neutral-300",
          "focus-within:border-blue-300",
          "focus-within:ring-blue-100",
        ],
      },
    },
  }
);

const InputStyles = cva([
  "inline-flex",
  "order-2",
  "h-9",
  "flex-1",
  "w-full",
  "select-none",
  "appearance-none",
  "items-center",
  "bg-transparent",
  "px-3",
  "py-2",
  "text-base",
  "text-neutral-900",
  "placeholder-neutral-400",
  "outline-none",
  "disabled:cursor-not-allowed",
  "dark:text-white",
]);

const InputAddonStyles = cva(
  [
    "inline-flex",
    "px-2",
    "shrink-0",
    "items-center",
    "justify-center",
    "text-sm",
    "text-neutral-500",
  ],
  {
    variants: {
      type: {
        _prefix: ["order-1"],
        _suffix: ["order-3"],
      },
      styled: {
        false: ["border-transparent"],
        true: ["border-neutral-200 dark:border-neutral-200/5"],
      },
    },
    compoundVariants: [
      {
        type: "_prefix",
        styled: true,
        className: "border-r bg-neutral-100/40 dark:bg-neutral-900",
      },
      {
        type: "_suffix",
        styled: true,
        className: "border-l bg-neutral-100/40 dark:bg-neutral-900",
      },
    ],
  }
);

InputAddon.displayName = "InputAddon";
InputField.displayName = "InputField";

const Input = { InputField, InputAddon };

export default Input;
