import * as React from "react";
import Footer from "@/components/root/footer";
import Header from "@/components/root/header";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
}
