"use client";

import React from "react";
import { IconTypes } from "~components/core/icon";
import UserAction from "~components/dashboard/user-action";

type Menu = {
  href: string;
  label: string;
  icon: IconTypes;
};

const menu: Menu[] = [
  { href: "/dashboard", icon: "LayoutGrid", label: "Dashboard" },
  { href: "/dashboard/analytics", icon: "LayoutGrid", label: "Analytics" },
  { href: "/dashboard/profile", icon: "CircleUserRound", label: "Profile" },
  { href: "/dashboard/links", icon: "ListChecks", label: "Links" },
  { href: "/dashboard/settings", icon: "Settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="flex size-full max-w-72 flex-col px-4">
      <div className="h-16"></div>
      <div className="relative flex flex-1 flex-col overflow-y-auto lg:row-span-2">
        <div className="py-5">
          <div className=" mb-2 flex space-x-3 font-normal">
            <span className="w-full text-sm text-neutral-600">Account</span>
          </div>
          <ul className="space-y-1">
            {menu.map((_, i) => (
              <li key={i}>
                <a className="block" target="_self" href={_.href}>
                  <span className="border-default ring-foreground group-hover:border-foreground-muted group flex max-w-full cursor-pointer items-center space-x-2 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                    <div className="flex shrink-0 items-center gap-1.5">
                      <span
                        title="Preferences"
                        className="text-foreground-light group-hover:text-foreground w-full truncate text-sm transition"
                      >
                        {_.label}
                      </span>
                    </div>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-5">
          <div className=" mb-2 flex space-x-3 font-normal">
            <span className="w-full text-sm text-neutral-600">Account</span>
          </div>

          <ul className="space-y-1">
            <li>
              <a
                className="block"
                target="_blank"
                href="https://supabase.com/docs"
              >
                <span className="border-default ring-foreground group-hover:border-foreground-muted group flex max-w-full cursor-pointer items-center space-x-2 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                  <span className="group-hover:text-foreground-light truncate text-sm text-neutral-600 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span
                      title="Guides"
                      className="text-foreground-light group-hover:text-foreground w-full truncate text-sm transition"
                    >
                      Guides
                    </span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                className="block"
                target="_blank"
                href="https://supabase.com/docs/guides/api"
              >
                <span className="border-default ring-foreground group-hover:border-foreground-muted group flex max-w-full cursor-pointer items-center space-x-2 py-1 font-normal outline-none focus-visible:z-10 focus-visible:ring-1">
                  <span className="group-hover:text-foreground-light truncate text-sm text-neutral-600 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                  <div className="flex shrink-0 items-center gap-1.5">
                    <span
                      title="API Reference"
                      className="text-foreground-light group-hover:text-foreground w-full truncate text-sm transition"
                    >
                      API Reference
                    </span>
                  </div>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-auto py-5">
          <UserAction />
        </div>
      </div>
    </aside>
  );
}
