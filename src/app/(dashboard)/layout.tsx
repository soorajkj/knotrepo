import * as React from "react";
import { LayoutProps } from "~types/layout";
import Header from "~components/dashboard/Header";
import Sidebar from "~components/dashboard/Sidebar";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="mx-auto h-screen min-h-screen overflow-hidden bg-zinc-100 p-2 text-sm dark:bg-zinc-950 lg:grid lg:grid-cols-[auto,minmax(0,1fr)]">
      <Sidebar />
      <div className="h-full w-full overflow-hidden pl-2">
        <div className="relative mx-auto flex h-full w-full flex-col overflow-hidden rounded-md border border-zinc-950/10 bg-white dark:border-white/5 dark:bg-zinc-900">
          <Header />
          <main className="flex flex-1 flex-col overflow-y-auto">
            <div className="mx-auto w-full max-w-screen-lg px-6 py-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
