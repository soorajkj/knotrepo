import * as React from "react";
import Link from "next/link";
import Snip from "~public/images/snip.svg";
import Navigations from "~components/dashboard/Navigations";
import UserAction from "~components/dashboard/UserAction";

export default function Sidebar() {
  return (
    <aside className="hidden h-full w-64 overflow-hidden rounded-lg bg-zinc-100 transition-all duration-300 dark:bg-zinc-950 lg:block">
      <div className="flex h-full w-full flex-col divide-y divide-zinc-950/5 overflow-auto dark:divide-white/5">
        <div className="flex h-16 items-center gap-2 p-4">
          <Link href={"/"} className="flex items-center gap-2">
            <span className="size-6 rounded-full dark:bg-zinc-800">
              <Snip width={"24"} height={"24"} />
            </span>
            <span className="truncate text-base font-medium text-zinc-950 dark:text-white">
              Hoppscotch
            </span>
          </Link>
        </div>
        <Navigations />
        <div className="px-4 py-4">
          <UserAction />
        </div>
      </div>
    </aside>
  );
}
