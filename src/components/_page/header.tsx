import React from "react";
import Button from "~components/core/button";
import Icon from "~components/core/icon";

export default function Header() {
  return (
    <div className="flex w-full items-center gap-2">
      <Button variant="secondary" size="lg" iconOnly>
        <Icon icon="Upload" className="size-4" />
      </Button>
      <Button variant="secondary" size="lg" className="w-full">
        hey@lbayo.com
      </Button>
      <Button variant="secondary" size="lg" iconOnly>
        <Icon icon="Bell" className="size-4" />
      </Button>
    </div>
  );
}
