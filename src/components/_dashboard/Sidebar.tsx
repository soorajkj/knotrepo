import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/dashboard/Menu";
import UserAction from "@/components/dashboard/UserAction";

export default function Sidebar() {
  return (
    <aside className="hidden h-full min-h-screen w-72 flex-col overflow-auto border-r border-default bg-dash-sidebar lg:flex">
      <div className="border-b">
        <div className="flex h-12 items-center px-6">
          <Link
            href="/"
            aria-label="Supabase"
            className="inline-flex cursor-pointer select-none items-center justify-center gap-2 text-neutral-900 outline-none dark:text-white"
          >
            <Image
              src="/images/linkgram.svg"
              loading="lazy"
              alt="Supabase"
              width={24}
              height={24}
            ></Image>
            <span className="text-base font-medium leading-none sm:hidden lg:flex">
              Supabase Dashboard
            </span>
          </Link>
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col overflow-y-auto scrollbar">
        <Menu />
        <div className="mt-auto border-t px-6 py-5">
          <UserAction />
        </div>
      </div>
    </aside>
  );
}
