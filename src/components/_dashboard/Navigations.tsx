import React from "react";
import Icon, { IconTypes } from "~components/core/icon";

type Menu = {
  href: string;
  label: string;
  icon: IconTypes;
};

const menu: Menu[] = [
  { href: "/analytics", icon: "LayoutGrid", label: "Dashboard" },
  { href: "/profile", icon: "UserRound", label: "Profile" },
  { href: "/links", icon: "Link", label: "Links" },
  { href: "/themes", icon: "Palette", label: "Templates" },
  { href: "/settings", icon: "Settings", label: "Settings" },
];

const guides: Menu[] = [
  { href: "/analytics", icon: "LifeBuoy", label: "Help & Support" },
  { href: "/integrations", icon: "Sparkles", label: "Changelog" },
];

const events = [
  "Bear Hug: Live in Concert",
  "Six Fingers — DJ Set",
  "We All Look The Same",
  "Viking People",
];

export default function Navigations() {
  return (
    <nav className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
      <SearchInbox />
      <PrimaryNavigation />
      <Events />
      <UserGuide />
    </nav>
  );
}

function PrimaryNavigation() {
  return (
    <ul className="flex flex-col gap-0.5">
      {menu.map((_, i) => (
        <li key={i} className="relative">
          <span className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 hover:bg-zinc-950/5 dark:text-white dark:hover:bg-white/5 sm:py-2 sm:text-sm/5 [&>svg]:size-4 [&>svg]:text-zinc-500 dark:[&>svg]:text-zinc-400">
            <Icon icon={_.icon} />
            <span className="truncate">{_.label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function SearchInbox() {
  return (
    <ul className="flex flex-col gap-0.5">
      <li className="relative">
        <span className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 hover:bg-zinc-950/5 dark:text-white dark:hover:bg-white/5 sm:py-2 sm:text-sm/5 [&>svg]:size-4 [&>svg]:text-zinc-500 dark:[&>svg]:text-zinc-400">
          <Icon icon="Search" />
          <span className="truncate">Search</span>
        </span>
      </li>
      <li className="relative">
        <span className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 hover:bg-zinc-950/5 dark:text-white dark:hover:bg-white/5 sm:py-2 sm:text-sm/5 [&>svg]:size-4 [&>svg]:text-zinc-500 dark:[&>svg]:text-zinc-400">
          <Icon icon="Inbox" />
          <span className="truncate">Inbox</span>
        </span>
      </li>
    </ul>
  );
}

function Events() {
  return (
    <div className="flex flex-col gap-0.5">
      <h3 className="px-2 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400">
        Upcoming Events
      </h3>
      <ul className="relative">
        {events.map((event) => (
          <li key={event} className="relative">
            <span className="flex w-full items-center rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 hover:bg-zinc-950/5 dark:text-white dark:hover:bg-white/5 sm:py-2 sm:text-sm/5">
              {event}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function UserGuide() {
  return (
    <ul className="mt-auto flex flex-col gap-0.5">
      {guides.map((_, i) => (
        <li key={i} className="relative">
          <span className="flex w-full items-center gap-2 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 hover:bg-zinc-950/5 dark:text-white dark:hover:bg-white/5 sm:py-2 sm:text-sm/5 [&>svg]:size-4 [&>svg]:text-zinc-500 dark:[&>svg]:text-zinc-400">
            <Icon icon={_.icon} />
            <span className="truncate">{_.label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
