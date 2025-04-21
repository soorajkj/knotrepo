import * as React from "react";
import { LayoutProps } from "~types/layout";
import Footer from "~components/www/footer";
import Header from "~components/www/header";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex size-full min-h-screen flex-col">
      <Header />
      <main className="relative flex-1">{children}</main>
      <Footer />
    </div>
  );
}
