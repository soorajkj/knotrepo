"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Avatar from "@/components/core/avatar";
import Icon from "@/components/core/icon";

export default function UserAction() {
  const router = useRouter();
  const { data } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/"),
      },
    });
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={handleSignOut}
    >
      <Avatar.AvatarRoot>
        <Avatar.AvatarImage src={data?.user.image ?? ""} alt={"User image"} />
        <Avatar.AvatarFallback>
          {data?.user.email.charAt(0).toUpperCase()}
        </Avatar.AvatarFallback>
      </Avatar.AvatarRoot>
      <div className="flex w-full flex-1 flex-col items-start truncate text-left">
        <h6 className="text-sm">{data?.user.name}</h6>
        <p className="text-xs">{data?.user.email}</p>
      </div>
      <div className="relative">
        <Icon
          icon="LogOut"
          strokeWidth={2}
          className="size-4 transition"
          label="Logout"
        />
      </div>
    </div>
  );
}
