import React from "react";
import { auth } from "@/auth";
import Analytics from "@/components/dashboard/Analytics";

export default async function Page() {
  const session = await auth();

  return (
    <div className="grid gap-6">
      <p className="max-w-screen-md whitespace-break-spaces">
        {JSON.stringify(session, null, 4)}
      </p>
      <Analytics />
    </div>
  );
}
