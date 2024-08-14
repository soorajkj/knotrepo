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
    <header className="sticky inset-x-0 top-0 z-30 bg-zinc-100 backdrop-blur-md">
      <Container className="relative after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-px after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20">
        <div className="flex h-20 flex-grow items-center">
          <div className="flex flex-1 flex-shrink-0 flex-nowrap items-center justify-start">
            <Link
              href="/"
              aria-label="Hoppscotch"
              className="inline-flex cursor-pointer select-none items-center justify-center outline-none"
            >
              <Image
                src="/images/linkgram.svg"
                loading="lazy"
                alt="Hoppscotch"
                height={32}
                width={32}
              ></Image>
              <span className="ml-2 text-lg font-black sm:hidden lg:flex">
                Hoppscotch
              </span>
            </Link>
          </div>
          <nav className="hidden flex-shrink-0 flex-nowrap items-center justify-start rounded-full md:flex">
            <ul className="group/nav relative flex items-center">
              {routes.map((route, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <a
                      href={route.url}
                      className="relative z-10 flex flex-shrink-0 rounded-full border border-transparent px-4 py-2 text-sm font-semibold transition"
                    >
                      {route.label}
                    </a>
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
                <Button variant="outline" asChild>
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
