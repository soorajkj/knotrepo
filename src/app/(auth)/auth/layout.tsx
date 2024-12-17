import * as React from "react";
import Link from "next/link";
import Logo from "@/public/images/linkgram.svg";

interface LayoutProps extends Readonly<{ children: React.ReactNode }> {}

export default function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <main className="flex h-full min-h-screen w-full flex-row gap-6">
        <div className="hidden bg-gray-50 xl:block xl:w-6/12">
          <div className="mx-auto flex h-full max-w-screen-sm flex-col gap-6 p-6">
            <div className="relative">
              <Link href={"/"} className="inline-flex">
                <Logo />
              </Link>
            </div>
            <div className="mt-auto text-sm">
              <p>© Lemon squeezy {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-6 xl:w-6/12">
          <div className="max-w-sm flex-1">{children}</div>
        </div>
      </main>
    </React.Fragment>
  );
}
