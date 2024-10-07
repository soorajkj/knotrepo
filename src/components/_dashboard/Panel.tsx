import * as React from "react";
import { cn } from "@/utils/cn";

const PanelRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "overflow-clip rounded-md border bg-surface-100 shadow-sm",
      className
    )}
    {...props}
  />
));

const PanelHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center border-b border-default bg-surface-100 px-6 py-4",
      className
    )}
    {...props}
  />
));

const PanelTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("text-base", className)} {...props} />
));

const PanelDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));

const PanelContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-6 py-4", className)} {...props} />
));

const PanelFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border-t border-default bg-surface-100 px-6 py-4",
      className
    )}
    {...props}
  />
));

PanelRoot.displayName = "Panel";
PanelHeader.displayName = "PanelHeader";
PanelTitle.displayName = "PanelTitle";
PanelDescription.displayName = "PanelDescription";
PanelContent.displayName = "PanelContent";
PanelFooter.displayName = "PanelFooter";

const Panel = {
  PanelRoot,
  PanelHeader,
  PanelFooter,
  PanelTitle,
  PanelDescription,
  PanelContent,
};

export default Panel;
