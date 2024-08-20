import * as React from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { Session } from "next-auth";
import { cn } from "@/utils/cn";
import Button from "@/components/core/button";
import Container from "@/components/core/container";

const routes = [
  { url: "/", label: "Features", status: false },
  { url: "/", label: "Pricing", status: false },
  { url: "/", label: "Blog", status: false },
  { url: "/", label: "Changelog", status: false },
  { url: "/", label: "Docs", status: false },
];

interface MobileMenuProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof MobileMenuStyles> {
  routes?: string;
  open: boolean;
  session: Session | null;
}

export default function MobileMenu(props: MobileMenuProps) {
  const { session, open, className } = props;

  return (
    <nav className={cn(MobileMenuStyles({ open, className }))}>
      <Container>
        <div className="py-4">
          <ul className="flex flex-col pb-4">
            {routes.map((route, i) => (
              <li key={i}>
                <Link href={route.url} className="flex py-2">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4">
            {session?.user ? (
              <Button variant="primary" asChild block>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <React.Fragment>
                <Button variant="outline" asChild block>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="primary" asChild block>
                  <Link href="/register">Get Started</Link>
                </Button>
              </React.Fragment>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

const MobileMenuStyles = cva(
  [
    "absolute",
    "left-0",
    "top-20",
    "w-full",
    "bg-white",
    "transition-all",
    "overflow-hidden",
    "ease-in-out",
    "duration-500",
    "origin-top",
    "dark:bg-neutral-900",
  ],
  {
    variants: {
      open: {
        false: ["max-h-0"],
        true: ["max-h-screen"],
      },
    },
  }
);
