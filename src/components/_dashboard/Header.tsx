import * as React from "react";
import Button from "../core/button";
import Icon from "../core/icon";

export default function Header() {
  return (
    <header className="h-auto w-full backdrop-blur">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="flex h-16 w-full gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4"></div>
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              Share
              <Icon icon="Upload" />
            </Button>
            <Button variant="secondary" size="sm">
              Upgrade
              <Icon icon="Zap" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
