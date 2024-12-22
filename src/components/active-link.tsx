"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  active?: string;
}

export default function ActiveLink(props: ActiveLinkProps) {
  const { className, active = "", href, ...rest } = props;
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname === href ? className + " " + active : className}
      {...rest}
    />
  );
}
