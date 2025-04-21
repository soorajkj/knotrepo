import * as React from "react";
import { LayoutProps } from "~types/layout";
import Header from "~components/dashboard/header";
import Sidebar from "~components/dashboard/sidebar";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="relative flex h-screen flex-row overflow-hidden bg-white dark:bg-neutral-900">
      <Sidebar />
      <div className="flex h-full flex-1 flex-col overflow-hidden">
        <div className="m-2 ml-0 flex h-full flex-col overflow-hidden rounded-lg border bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-800/30">
          <Header />
          <main className="size-full overflow-y-auto p-6">
            <div className="mx-auto size-full max-w-screen-2xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
