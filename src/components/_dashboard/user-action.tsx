"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "~lib/auth-client";
import { useSession } from "~hooks/use-session";
import Avatar from "~components/core/avatar";
import Dropdown from "~components/core/dropdown";
import Icon from "~components/core/icon";

export default function UserAction() {
  const router = useRouter();
  const { session } = useSession();

  return (
    <Dropdown.DropdownRoot>
      <Dropdown.DropdownTrigger asChild>
        <button className="flex w-full items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-800/30 px-4 py-3">
          <Avatar.AvatarRoot size="sm">
            {session?.user.image ? (
              <Avatar.AvatarImage src={session?.user.image} alt="" />
            ) : null}
            <Avatar.AvatarFallback>
              {session?.user.name.charAt(0)}
            </Avatar.AvatarFallback>
          </Avatar.AvatarRoot>
          <div className="flex flex-1 flex-col items-start gap-1 [&>*]:leading-none">
            <span className="text-sm font-medium dark:text-white">
              {session?.user.name}
            </span>
            <span className="text-xs">{session?.user.email}</span>
          </div>
        </button>
      </Dropdown.DropdownTrigger>
      <Dropdown.DropdownContent align="start" side="bottom" sideOffset={16}>
        <Dropdown.DropdownLabel>
          <button className="flex w-full items-center gap-2 rounded-xl [&>svg]:size-4">
            <Avatar.AvatarRoot>
              {session?.user.image ? (
                <Avatar.AvatarImage src={session?.user.image} alt="" />
              ) : null}
              <Avatar.AvatarFallback>
                {session?.user.name.charAt(0)}
              </Avatar.AvatarFallback>
            </Avatar.AvatarRoot>
            <div className="flex flex-1 flex-col items-start gap-1 [&>*]:leading-none">
              <span className="text-sm font-medium dark:text-white">
                {session?.user.name}
              </span>
              <span className="text-xs">{session?.user.email}</span>
            </div>
          </button>
        </Dropdown.DropdownLabel>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownItem>Dashboard</Dropdown.DropdownItem>
          <Dropdown.DropdownItem>Account Settings</Dropdown.DropdownItem>
          <Dropdown.DropdownItem>Keyboard Shortcuts</Dropdown.DropdownItem>
          <Dropdown.DropdownItem>Help & Support</Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownSeparator />
          <Dropdown.DropdownItem
            onClick={() => {
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => router.refresh(),
                },
              });
            }}
          >
            <span className="flex-1">Logout</span>
            <Icon icon="LogOut" />
          </Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
      </Dropdown.DropdownContent>
    </Dropdown.DropdownRoot>
  );
}
