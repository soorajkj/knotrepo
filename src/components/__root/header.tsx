import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import Button from "@/components/core/button";
import Container from "@/components/core/container";
import HeaderAction from "@/components/root/header-action";

const routes = [
  { url: "/", label: "Features", status: false },
  { url: "/", label: "Pricing", status: false },
  { url: "/", label: "Blog", status: false },
  { url: "/", label: "Changelog", status: false },
  { url: "/", label: "Docs", status: false },
];

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky inset-x-0 top-0 z-30 bg-white backdrop-blur dark:bg-neutral-900/75">
      <Container className="relative after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-px after:bg-gradient-to-r after:from-transparent after:via-neutral-50/10">
        <div className="flex h-16 flex-grow items-center">
          <div className="mr-10 flex flex-shrink-0 flex-nowrap items-center justify-start">
            <Link
              href="/"
              aria-label="Biogram.io"
              className="inline-flex cursor-pointer select-none items-center justify-center gap-2 text-neutral-900 outline-none dark:text-white"
            >
              <Image
                src="/images/linkgram.svg"
                loading="lazy"
                alt="Biogram.io"
                height={32}
                width={32}
              ></Image>
              <span className="text-lg font-black sm:hidden lg:flex">
                Biogram.io
              </span>
            </Link>
          </div>
          <nav className="hidden flex-shrink-0 flex-nowrap items-center justify-start rounded-full md:flex">
            <ul className="group/nav relative flex items-center">
              {routes.map((route, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <Link
                      href={route.url}
                      className="relative z-10 flex flex-shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-emerald-400"
                    >
                      {route.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
            {session?.user ? (
              <Button variant="primary" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <React.Fragment>
                <Button variant="secondary" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button variant="primary" asChild>
                  <Link href="/auth/register">Get Started</Link>
                </Button>
              </React.Fragment>
            )}
          </div>
          <HeaderAction session={session} />
        </div>
      </Container>
    </header>
  );
}
