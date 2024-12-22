import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/classnames";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof TextareaStyles> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ disabled, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(TextareaStyles({ className }))}
        disabled={disabled}
        {...props}
      />
    );
  }
);

const TextareaStyles = cva([
  "flex",
  "min-h-32",
  "resize-none",
  "rounded-lg",
  "border",
  "bg-background",
  "w-full",
  "px-4",
  "py-2",
  "text-sm",
  "leading-6",
  "shadow-wg-xs",
  "transition-colors",
  "duration-100",
  "placeholder:text-surface-500",
  "outline-primary",
  "focus:outline",
  "focus:outline-2",
  "focus:-outline-offset-1",
  "aria-[invalid=true]:bg-destructive-200",
  "aria-[invalid=true]:border-destructive-400",
  "aria-[invalid=true]:focus:border-destructive",
  "aria-[invalid=true]:focus-visible:border-destructive",
]);

Textarea.displayName = "Textarea";

export default Textarea;
