import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ProfileInformation from "@/components/dashboard/ProfileInformation";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  const _user = await prisma.user.findUnique({
    where: { id: session?.user.id },
  });

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-wg-gray-900">
          Profile Information
        </h3>
        <ProfileInformation />
      </div>
    </div>
  );
}
