"use client";

import * as React from "react";
import Button from "~components/core/button";
import Icon from "~components/core/icon";

export default function Header() {
  return (
    <header className="w-full">
      <div className="flex h-16 items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2">Logo</div>
        <div className="flex items-center gap-2">
          <Button variant="primary" size="sm">
            <Icon icon="Zap"></Icon>
            Upgarde
          </Button>
        </div>
      </div>
    </header>
  );
}
