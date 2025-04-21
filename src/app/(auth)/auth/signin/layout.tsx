import * as React from "react";
import { LayoutProps } from "~types/layout";
import Tnc from "~components/auth/tnc";

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="grid size-full min-h-screen grid-cols-12">
      <div className="col-span-12 mx-auto flex size-full flex-col items-center justify-center gap-4 border-neutral-800 p-8 xl:col-span-5 xl:border-r">
        <div className="flex w-full max-w-sm flex-1 items-center justify-center">
          {children}
        </div>
        <Tnc />
      </div>
      <div className="hidden bg-neutral-900 xl:col-span-7 xl:block"></div>
    </div>
  );
}
