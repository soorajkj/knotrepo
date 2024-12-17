import React from "react";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function Header() {
  return (
    <header className="sticky top-0 shadow-sm">
      <div className="flex max-h-14 min-h-14 items-center gap-4 px-6">
        <div className="flex items-center gap-4 lg:hidden">
          <Button size="sm" className="px-1">
            <Icon icon="PanelRight" className="size-5" />
          </Button>
          <h4 className="text-base font-medium">Dashboard</h4>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2">
          <div className="flex items-center gap-1">
            <Button variant="transparent" size="sm">
              <Icon icon="Share2" className="size-4 opacity-50" />
            </Button>
            <Button variant="transparent" size="sm">
              <Icon icon="CircleHelp" className="size-4 opacity-50" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
