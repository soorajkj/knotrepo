import React from "react";
import AccountDeletion from "@/components/dashboard/AccountDeletion";
import AccountInformation from "@/components/dashboard/AccountInformation";
import ProfileInformation from "@/components/dashboard/ProfileInformation";
import ThemeSettings from "@/components/dashboard/ThemeSettings";

export default async function Page() {
  return (
    <div className="grid gap-6">
      <AccountInformation />
      <ProfileInformation />
      <ThemeSettings />
      <AccountDeletion />
    </div>
  );
}
