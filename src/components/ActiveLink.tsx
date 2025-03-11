"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import _ from "lodash";

interface ActiveLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {}

export default function ActiveLink(props: ActiveLinkProps) {
  const { href, ...rest } = props;
  const pathname = usePathname();

  return (
    <Link
      href={href}
      aria-current={_.isEqual(pathname, href) ? "page" : "false"}
      {...rest}
    />
  );
}
