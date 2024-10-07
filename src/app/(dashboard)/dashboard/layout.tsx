import * as React from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full bg-background-200">
      <div className="h-screen overflow-hidden">
        <div className="flex h-full flex-row">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <Header />
            <div className="h-full w-full overflow-y-auto scrollbar">
              <main className="mx-auto flex w-full max-w-screen-xl flex-1 flex-grow flex-col px-6 py-8 lg:px-14 xl:px-24 2xl:px-32">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
