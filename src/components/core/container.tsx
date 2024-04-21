import * as React from "react";
import { cn } from "@/src/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn("container mx-auto w-full max-w-screen-xl px-4", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
