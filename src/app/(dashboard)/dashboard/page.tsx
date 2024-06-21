import React from "react";
import { auth, signOut } from "@/lib/auth";
import Button from "@/components/core/button";
import Preview from "@/components/root/preview";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <h2>Dashboard Page</h2>
      <p>{JSON.stringify(session?.user)}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Logout</Button>
      </form>
      <Preview />
    </div>
  );
}
