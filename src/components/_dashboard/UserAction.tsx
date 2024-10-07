"use client";

import * as React from "react";
import { signOut, useSession } from "next-auth/react";
import Avatar from "@/components/core/avatar";
import Icon from "@/components/core/icon";

export default function UserAction() {
  const session = useSession();

  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={() => signOut()}
    >
      <Avatar.AvatarRoot>
        <Avatar.AvatarImage
          src={String(session.data?.user.image)}
          alt={session.data?.user.username}
        />
        <Avatar.AvatarFallback>
          {session.data?.user.name?.charAt(0)}
        </Avatar.AvatarFallback>
      </Avatar.AvatarRoot>
      <div className="flex w-full flex-1 flex-col items-start truncate text-left text-foreground-lighter">
        <h6 className="text-sm text-foreground">{session.data?.user.name}</h6>
        <p className="text-xs">{session.data?.user.email}</p>
      </div>
      <div className="relative">
        <Icon
          icon="LogOut"
          strokeWidth={1}
          className="size-3.5 text-foreground-light transition group-hover:text-foreground"
          label="Logout"
        />
      </div>
    </div>
  );
}
