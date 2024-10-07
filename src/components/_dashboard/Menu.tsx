import * as React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <nav aria-label="sidebar">
      <ul className="flex h-full flex-col">
        <li className="border-b border-default px-6 py-5">
          <div className="mb-2 flex items-center">
            <h2 className="w-full text-sm text-foreground-lighter">Projects</h2>
          </div>
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Analytics
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Links
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Platforms
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </li>
        <li className="border-b border-default px-6 py-5">
          <div className="mb-2 flex items-center">
            <h2 className="w-full text-sm text-foreground-lighter">Settings</h2>
          </div>
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Account
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Preferences
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Plan & Billings
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="w-full">
                <div className="group flex max-w-full items-center border-default py-1 font-normal outline-none ring-foreground group-hover:border-foreground-muted focus-visible:z-10 focus-visible:ring-1 [&>svg]:text-foreground-lighter">
                  <div className="flex flex-shrink-0 items-center gap-1.5">
                    <span className="w-full truncate text-sm font-medium text-foreground-light transition group-hover:text-foreground">
                      Integrations
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
