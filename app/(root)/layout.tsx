import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

interface LayoutProps extends Readonly<{ children: ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
