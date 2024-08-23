import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/core/container";
import HeaderAction from "@/components/dashboard/header-actions";

export default async function Header() {
  return (
    <header className="sticky top-0 border-b border-neutral-200 dark:border-neutral-200/5">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Supabase"
            className="inline-flex cursor-pointer select-none items-center justify-center gap-2 text-neutral-900 outline-none dark:text-white"
          >
            <Image
              src="/images/linkgram.svg"
              loading="lazy"
              alt="Supabase"
              height={32}
              width={32}
            ></Image>
            <span className="text-lg font-black sm:hidden lg:flex">
              Supabase
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <HeaderAction />
          </div>
        </div>
      </Container>
    </header>
  );
}
