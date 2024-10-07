import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Icon, { icons } from "@/components/core/icon";

type AlertVairants = NonNullable<
  Pick<VariantProps<typeof AlertStyles>, "variant">["variant"]
>;

type Icons = keyof typeof icons;

const iconRecord: Record<AlertVairants, Icons> = {
  default: "TriangleAlert",
  destructive: "OctagonAlert",
};

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    Omit<VariantProps<typeof AlertStyles>, "variant"> & {
      icon?: Icons;
      variant?: AlertVairants;
    }
>(({ children, icon, className, variant = "default", ...props }, ref) => {
  const ic = iconRecord[variant];

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(AlertStyles({ variant }), className)}
      {...props}
    >
      {icon ? <Icon icon={icon} /> : <Icon icon={ic} />}
      <div className="relative">{children}</div>
    </div>
  );
});

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      "mb-2 text-sm font-medium leading-none tracking-tight",
      className
    )}
    {...props}
  />
));

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-normal text-foreground-light", className)}
    {...props}
  />
));

const AlertStyles = cva(
  [
    "relative",
    "flex",
    "gap-4",
    "w-full",
    "rounded-lg",
    "border",
    "p-4",
    "[&>svg]:size-6",
    "[&_svg]:p-1",
    "[&_svg]:rounded",
    "[&_svg]:flex-shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-alternative",
          "text-foreground",
          "border-alternative",
          "[&_svg]:bg-foreground",
          "[&_svg]:text-background",
        ],
        destructive: [
          "bg-destructive-200",
          "text",
          "border-destructive-400",
          "[&_svg]:bg-destructive-600",
          "[&_svg]:text-destructive-200",
        ],
      },
    },
  }
);

AlertRoot.displayName = "AlertRoot";
AlertTitle.displayName = "AlertTitle";
AlertDescription.displayName = "AlertDescription";

const Alert = { AlertRoot, AlertTitle, AlertDescription };

export default Alert;
