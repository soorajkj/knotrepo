"use client";

import * as React from "react";
import { Session } from "next-auth";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";
import MobileMenu from "@/components/root/mobile-menu";

export default function HeaderAction(props: { session: Session | null }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-1 items-center justify-end md:hidden">
      <Button variant="outline" onClick={() => setOpen((pre) => !pre)}>
        <Icon icon="Menu" label="menu" />
      </Button>
      <MobileMenu session={props.session} open={open} />
    </div>
  );
}
