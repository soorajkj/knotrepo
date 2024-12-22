import React from "react";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Analytics from "@/components/dashboard/Analytics";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  return (
    <div className="grid gap-6">
      <p className="max-w-screen-md whitespace-break-spaces">
        {JSON.stringify(session?.user)}
      </p>
      <Analytics />
    </div>
  );
}
