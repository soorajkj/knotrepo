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
    "peer flex min-h-20 w-full grow resize-none rounded-lg border border-zinc-950/10 bg-transparent px-3 py-2 text-sm leading-6 text-zinc-950 shadow-sm transition-colors duration-100 hover:border-zinc-950/20 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-white/20",
  ],
});

Textarea.displayName = "Textarea";

export default Textarea;
