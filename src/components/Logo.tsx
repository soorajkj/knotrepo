import * as React from "react";
import Link, { LinkProps } from "next/link";
import SnipLogo from "~public/images/snip.svg";
import { cn } from "~utils/classnames";

interface LogoProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    LinkProps {}

export default function Logo(props: LogoProps) {
  const { href = "/", className, ...rest } = props;

  return (
    <Link href={href} className={cn("inline-flex size-9", className)} {...rest}>
      <SnipLogo />
    </Link>
  );
}
