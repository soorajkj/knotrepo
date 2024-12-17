import * as React from "react";
import { menu } from "@/data/menu";
import ActiveLink from "@/components/ActiveLink";

export default function Menu() {
  return (
    <nav aria-label="sidebar">
      <ul className="flex h-full flex-col gap-4 px-6 py-6">
        {menu.map((_, i) => (
          <li key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <h4 className="w-full flex-1 truncate text-sm font-medium">
                {_.label}
              </h4>
            </div>
            <ul className="flex flex-col text-sm">
              {_.nodes?.map((node, node_i) => (
                <li key={node_i}>
                  <ActiveLink
                    href={node.href}
                    className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 dark:text-white/60"
                    active="text-wg-purple bg-surface"
                  >
                    <span>{node.label}</span>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
