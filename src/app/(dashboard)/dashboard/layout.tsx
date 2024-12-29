import * as React from "react";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-zinc-950 text-zinc-400">
      <div className="flex h-full flex-row divide-x divide-zinc-900">
        <div className="h-full w-full max-w-80">
          <div className="flex h-full flex-col divide-y divide-zinc-900">
            <div className="sticky top-0 h-16">
              <div className="flex h-16 w-full items-center gap-2 overflow-hidden rounded-md px-6 text-left text-sm outline-none disabled:pointer-events-none disabled:opacity-50">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-700 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M7 2h10"></path>
                    <path d="M5 6h14"></path>
                    <rect width="18" height="12" x="3" y="10" rx="2"></rect>
                  </svg>
                </div>
                <div className="flex flex-col leading-none text-white">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <ul
                data-sidebar="menu"
                className="flex w-full min-w-0 flex-col gap-1 px-6"
              >
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Routing
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="true"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Data Fetching
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Rendering
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Caching
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Styling
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Optimizing
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Configuring
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Testing
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Authentication
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Deploying
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Upgrading
                  </a>
                </li>
                <li
                  data-sidebar="menu-item"
                  className="group/menu-item relative"
                >
                  <a
                    href="#"
                    data-sidebar="menu-button"
                    data-size="default"
                    data-active="false"
                    className="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md text-left text-sm outline-none transition-[width,height,padding] group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
                  >
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div className="sticky bottom-0 h-16">
              <button
                data-sidebar="menu-button"
                data-size="lg"
                data-active="false"
                className="flex h-16 w-full items-center gap-2 overflow-hidden rounded-md px-6 text-left text-sm outline-none"
                type="button"
              >
                <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="aspect-square h-full w-full"
                    alt="shadcn"
                    src="/images/avatar.jpg"
                  />
                </span>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">shadcn</span>
                  <span className="truncate text-xs">m@example.com</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevrons-up-down ml-auto size-4"
                >
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-full flex-1 flex-col divide-y divide-zinc-900">
          <div className="h-16 w-full"></div>
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
