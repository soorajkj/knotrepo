"use client";

import React from "react";
import Link from "next/link";
import * as FramerMotion from "framer-motion";
import { useSession } from "~hooks/use-session";
import Button from "~components/core/button";
import Container from "~components/core/container";

export default function Header() {
  const { session } = useSession();
  const { scrollY } = FramerMotion.useScroll();
  const [isHidden, setIsHidden] = React.useState(false);
  const lastYRef = React.useRef(0);

  FramerMotion.useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 64) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  });

  return (
    <FramerMotion.AnimatePresence mode="wait">
      <FramerMotion.motion.header
        animate={isHidden ? "hidden" : "isHidden"}
        whileHover="isHidden"
        onFocusCapture={() => setIsHidden(false)}
        variants={{ hidden: { y: "-100%" }, isHidden: { y: "0%" } }}
        transition={{ duration: 0.5 }}
        className="sticky right-0 top-0 z-40 h-auto border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-md"
      >
        <Container>
          <div className="flex h-16 w-full items-center gap-4 overflow-hidden">
            <div className="flex flex-1 items-center">
              <Link href={"/"} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 16 24"
                  height={24}
                  width={16}
                  className="text-white"
                >
                  <path
                    d="M 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 8 16 L 8 24 L 0 16 Z"
                    fill="#00BC7D"
                  />
                </svg>
                <span className="text-base font-semibold text-white">
                  Firebase
                </span>
              </Link>
            </div>
            <nav className="relative flex flex-1 items-center justify-center">
              <ul className="hidden items-center gap-4 text-sm dark:text-neutral-400 lg:flex">
                <li>
                  <span className="px-2 py-1">Platform</span>
                </li>
                <li>
                  <span className="px-2 py-1">Resources</span>
                </li>
                <li>
                  <span className="px-2 py-1">Customers</span>
                </li>
                <li>
                  <span className="px-2 py-1">Pricing</span>
                </li>
                <li>
                  <span className="px-2 py-1">Docs</span>
                </li>
              </ul>
            </nav>
            <div className="hidden flex-1 items-center justify-end gap-2 lg:flex">
              {session?.session ? (
                <Button variant="primary" size="sm" asChild>
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
              ) : (
                <React.Fragment>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={"/auth/signin"}>Login</Link>
                  </Button>
                  <Button variant="primary" size="sm" asChild>
                    <Link href={"/auth/signup"}>Start for free</Link>
                  </Button>
                </React.Fragment>
              )}
            </div>
          </div>
        </Container>
      </FramerMotion.motion.header>
    </FramerMotion.AnimatePresence>
  );
}
