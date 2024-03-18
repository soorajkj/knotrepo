"use client";

import Link from "next/link";
import Avatar from "./core/Avatar";
import Button from "./core/Button";
import Logo from "./Logo";
import Container from "@/components/core/Container";

export default function Header() {
  return (
    <header className="bt-header sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-slate-950/90">
      <Container>
        <div className="flex items-center py-6">
          <Logo />
          <div className="hidden flex-1 items-center justify-end gap-3">
            <div className="flex flex-col truncate text-right">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-100">
                Sooraj Janardhanan
              </span>
              <span className="truncate text-sm text-slate-500 dark:text-slate-400">
                soorajkj46@gmail.com
              </span>
            </div>
            <Avatar.AvatarRoot>
              <Avatar.AvatarImage></Avatar.AvatarImage>
              <Avatar.AvatarFallback></Avatar.AvatarFallback>
            </Avatar.AvatarRoot>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="secondary" asChild>
              <Link href="/signin">Log in</Link>
            </Button>
            <Button variant="primary" asChild>
              <Link href="/signup">Sign up for free</Link>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
