import * as React from "react";
import { cn } from "~utils/classnames";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container(props: ContainerProps) {
  const { children, className, style, ...rest } = props;

  return (
    <div
      className={cn("container mx-auto w-full max-w-7xl px-8", className)}
      style={{ ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
