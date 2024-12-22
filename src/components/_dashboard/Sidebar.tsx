import React from "react";
import Link from "next/link";
import Logo from "@/public/images/linkgram.svg";
import Menu from "@/components/dashboard/Menu";
import UserAction from "@/components/dashboard/UserAction";

export default function Sidebar() {
  return (
    <aside className="hidden h-full min-h-screen w-72 flex-col overflow-auto lg:flex">
      <div className="static">
        <div className="flex h-14 items-center px-6">
          <Link
            href="/"
            aria-label="Supabase"
            className="inline-flex cursor-pointer select-none items-center justify-center outline-none dark:text-white"
          >
            <Logo />
          </Link>
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col overflow-y-auto scrollbar">
        <Menu />
        <div className="mt-auto px-6 py-5">
          <UserAction />
        </div>
      </div>
    </aside>
  );
}
