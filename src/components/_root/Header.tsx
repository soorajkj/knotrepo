"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "@/public/images/linkgram.svg";
import { authClient } from "@/lib/auth-client";
import Button from "@/components/core/button";
import Container from "@/components/core/container";
import Icon from "@/components/core/icon";

const routes = [
  { url: "/", label: "Features", status: false },
  { url: "/", label: "Pricing", status: false },
  { url: "/", label: "Blog", status: false },
  { url: "/", label: "Changelog", status: false },
  { url: "/", label: "Docs", status: false },
];

export default function Header() {
  const session = authClient.useSession();

  return (
    <header className="sticky inset-x-0 top-0 z-40 w-full flex-none lg:z-50">
      <Container>
        <div className="overflow-hidden rounded-xl px-3">
          <div className="flex h-16 flex-grow items-center gap-8">
            <div className="flex flex-1 flex-shrink-0 flex-nowrap items-center justify-start">
              <Link
                href="/"
                aria-label="Supabase"
                className="inline-flex cursor-pointer select-none items-center justify-center gap-2 text-slate-900 outline-none dark:text-white"
              >
                <Logo />
              </Link>
            </div>
            <nav className="hidden flex-1 flex-shrink-0 flex-nowrap items-center justify-center rounded-full md:flex">
              <ul className="group/nav relative flex items-center text-slate-700 dark:text-slate-200">
                {routes.map((route, index) => {
                  return (
                    <li key={index} className="inline-flex">
                      <Link
                        href={route.url}
                        className="relative z-10 flex flex-shrink-0 px-4 py-2 text-sm font-medium transition"
                      >
                        {route.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
              {session.data?.session ? (
                <Button
                  variant="primary"
                  size="md"
                  shape="pill"
                  className="px-5"
                  asChild
                >
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <React.Fragment>
                  <Button
                    variant="transparent"
                    shape="pill"
                    className="px-5"
                    asChild
                  >
                    <Link href="/auth/signin">Login</Link>
                  </Button>
                  <Button
                    variant="primary"
                    shape="pill"
                    className="px-5"
                    asChild
                  >
                    <Link href="/auth/signup">
                      <span>Get Started</span>
                      <Icon icon="ArrowRight" className="size-4" />
                    </Link>
                  </Button>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
