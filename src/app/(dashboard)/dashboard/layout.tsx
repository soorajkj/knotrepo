import * as React from "react";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full text-sm">
      <div className="h-screen overflow-hidden border-t-2 border-wg-orange-600">
        <div className="flex h-full flex-row">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <Header />
            <div className="h-full w-full overflow-y-auto scrollbar">
              <main className="mr-auto flex w-full flex-1 flex-grow flex-col px-6 py-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
