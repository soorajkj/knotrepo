import * as React from "react";
import Header from "@/components/dashboard/header";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default async function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <Header />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
}
