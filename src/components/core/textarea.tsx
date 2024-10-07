import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof TextareaStyles> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(TextareaStyles({ className }))}
        {...props}
      />
    );
  }
);

const TextareaStyles = cva([
  "flex",
  "min-h-20",
  "w-full",
  "rounded-md",
  "border",
  "border-control",
  "bg-control",
  "px-3",
  "py-2",
  "text-sm",
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

Textarea.displayName = "Textarea";

export default Textarea;
