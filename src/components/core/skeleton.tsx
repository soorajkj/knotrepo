import * as React from "react";
import { cn } from "~utils/classnames";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Skeleton(props: SkeletonProps) {
  const { className, ...rest } = props;
  return (
    <div
      className={cn("bg-silver-500 animate-pulse rounded-md", className)}
      {...rest}
    />
  );
}
