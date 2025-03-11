"use client";

import * as React from "react";
import Avatar from "~components/core/avatar";
import Dropdown from "~components/core/dropdown";
import Icon from "~components/core/icon";

export default function UserAction() {
  return (
    <Dropdown.DropdownRoot>
      <Dropdown.DropdownTrigger asChild>
        <button className="flex w-full items-center gap-2 text-zinc-900 dark:text-zinc-400 [&>svg]:size-4">
          <Avatar.AvatarRoot>
            <Avatar.AvatarImage src="/images/avatar.jpg" alt="" />
            <Avatar.AvatarFallback></Avatar.AvatarFallback>
          </Avatar.AvatarRoot>
          <div className="flex flex-1 flex-col items-start gap-1 [&>*]:leading-none">
            <span className="text-sm font-medium dark:text-white">
              Sophia Williams
            </span>
            <span className="text-xs">sophia@alignui.com</span>
          </div>
          <Icon icon="ChevronsUpDown" />
        </button>
      </Dropdown.DropdownTrigger>
      <Dropdown.DropdownContent align="end" side="right" sideOffset={28}>
        <Dropdown.DropdownLabel>
          <button className="flex w-full items-center gap-2 rounded-xl [&>svg]:size-4">
            <Avatar.AvatarRoot>
              <Avatar.AvatarImage src="/images/avatar.jpg" alt="" />
              <Avatar.AvatarFallback></Avatar.AvatarFallback>
            </Avatar.AvatarRoot>
            <div className="flex flex-1 flex-col items-start gap-1 [&>*]:leading-none">
              <span className="text-sm font-medium dark:text-white">
                Sophia Williams
              </span>
              <span className="text-xs ">sophia@alignui.com</span>
            </div>
          </button>
        </Dropdown.DropdownLabel>
        <Dropdown.DropdownSeparator />
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownItem>
            <Icon icon="UserCircleIcon" />
            <span className="flex-1">My account</span>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            <Icon icon="Cog6ToothIcon" />
            <span className="flex-1">Settings</span>
          </Dropdown.DropdownItem>
          <Dropdown.DropdownItem>
            <Icon icon="QuestionMarkCircleIcon" />
            <span className="flex-1">Help & Support</span>
          </Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
        <Dropdown.DropdownGroup>
          <Dropdown.DropdownSeparator />
          <Dropdown.DropdownItem>
            <Icon icon="ArrowLeftStartOnRectangleIcon" />
            <span className="flex-1">Logout</span>
          </Dropdown.DropdownItem>
        </Dropdown.DropdownGroup>
      </Dropdown.DropdownContent>
    </Dropdown.DropdownRoot>
  );
}
