import * as React from "react";
import { LayoutProps } from "~types/layout";
import Footer from "~components/_page/footer";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="flex size-full min-h-screen flex-col bg-neutral-900">
      {children}
      <Footer />
    </div>
  );
}
