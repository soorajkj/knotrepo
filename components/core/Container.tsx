import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container(props: ContainerProps) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("container mx-auto w-full max-w-screen-xl px-4", className)}
      {...rest}
    />
  );
}
