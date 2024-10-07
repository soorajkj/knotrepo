import * as React from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container(props: ContainerProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cn(
        "container relative mx-auto w-full max-w-screen-2xl px-6 lg:px-16 xl:px-20",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
