import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default async function Header() {
  const session = await auth();

  return (
    <header className="sticky top-0 border-b">
      <div className="flex max-h-12 min-h-12 items-center gap-4 px-6 py-2">
        <div className="flex items-center gap-4 lg:hidden">
          <Button variant="dashed" size="tiny" className="px-1">
            <Icon
              icon="PanelRight"
              className="size-5 text-foreground-lighter"
              strokeWidth={1}
            />
          </Button>
          <h4 className="text-base font-medium">Dashboard</h4>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="dashed" size="tiny" asChild>
            <Link href={`/${session?.user.username}`} target="_blank">
              <Icon icon="Globe" className="size-3.5" strokeWidth={1} />
              <span>Preview</span>
            </Link>
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="text" size="tiny" className="px-1">
              <Icon icon="Share2" className="size-3.5" strokeWidth={1} />
            </Button>
            <Button variant="text" size="tiny" className="px-1">
              <Icon icon="CircleHelp" className="size-3.5" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
