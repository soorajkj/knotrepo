import * as React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "~utils/classnames";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof TextareaStyles> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <textarea
        ref={ref}
        className={cn(TextareaStyles({ className }))}
        {...rest}
      />
    );
  }
);

const TextareaStyles = tv({
  base: [
    "peer flex min-h-28 w-full grow resize-y overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-2 text-base/6 leading-6 text-neutral-200 outline-none transition duration-100 placeholder:text-neutral-600 focus:outline-none disabled:opacity-50 aria-invalid:border-red-500 sm:text-sm/6",
  ],
});

Textarea.displayName = "Textarea";

export default Textarea;
