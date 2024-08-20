"use client";

import * as React from "react";
import { signOut, useSession } from "next-auth/react";
import Avatar from "@/components/core/avatar";
import Dropdown from "@/components/core/dropdown";
import Icon from "@/components/core/icon";

export default function HeaderActions() {
  const session = useSession();

  return (
    <React.Fragment>
      <Dropdown.DropdownRoot>
        <Dropdown.DropdownTrigger className="flex items-center gap-4 focus:outline-none">
          <div className="flex flex-col items-end text-right">
            <h6 className="text-sm text-white">{session.data?.user.name}</h6>
            <p className="text-sm leading-none">{session.data?.user.email}</p>
          </div>
          <Avatar.AvatarRoot>
            <Avatar.AvatarImage
              src={session.data?.user.image || ""}
              alt={session.data?.user.username}
            />
            <Avatar.AvatarFallback>
              {session.data?.user.name?.charAt(0)}
            </Avatar.AvatarFallback>
          </Avatar.AvatarRoot>
        </Dropdown.DropdownTrigger>
        <Dropdown.DropdownContent
          className="min-w-56"
          align="end"
          sideOffset={24}
        >
          <Dropdown.DropdownItem>
            <Icon icon="UserRound" className="size-4" />
            <span>Profile</span>
            <Dropdown.DropdownShortcut>⇧⌘P</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            <Icon icon="CreditCard" className="size-4" />
            <span>Billing</span>
            <Dropdown.DropdownShortcut>⌘B</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            <Icon icon="Settings" className="size-4" />
            <span>Settings</span>
            <Dropdown.DropdownShortcut>⌘S</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            <Icon icon="Keyboard" className="size-4" />
            <span>Keyboard Shortcuts</span>
            <Dropdown.DropdownShortcut>⌘K</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownSeparator />
          <Dropdown.DropdownItem onClick={() => signOut()}>
            <Icon icon="LogOut" className="size-4" />
            <span>Logout</span>
            <Dropdown.DropdownShortcut>⇧⌘Q</Dropdown.DropdownShortcut>
          </Dropdown.DropdownItem>
        </Dropdown.DropdownContent>
      </Dropdown.DropdownRoot>
    </React.Fragment>
  );
}
