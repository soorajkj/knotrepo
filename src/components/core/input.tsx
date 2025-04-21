"use client";

import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";
import ControlGroup from "~components/core/control-group";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {
  leftAddon?: React.ReactElement;
  rightAdddon?: React.ReactElement;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, className, leftAddon, rightAdddon, ...rest } = props;

  return (
    <ControlGroup.ControlGroupRoot
      className={cn(InputStyles().root({ className }))}
    >
      <ControlGroup.ControlGroupItem>{leftAddon}</ControlGroup.ControlGroupItem>
      <ControlGroup.ControlGroupItem>
        <input
          ref={ref}
          type={type}
          className={cn(InputStyles({ className }).input())}
          {...rest}
        />
      </ControlGroup.ControlGroupItem>
      <ControlGroup.ControlGroupItem>
        {rightAdddon}
      </ControlGroup.ControlGroupItem>
    </ControlGroup.ControlGroupRoot>
  );
});

Input.displayName = "InputComponent";

const InputStyles = tv({
  base: [""],
  slots: {
    root: [
      "w-full items-center overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800/80 has-disabled:opacity-50 has-aria-invalid:border-red-500",
    ],
    input: [
      "peer relative h-10 w-full bg-transparent px-3 py-2 text-sm font-normal leading-none text-neutral-200 outline-none transition placeholder:text-neutral-600",
    ],
  },
});

export default Input;
