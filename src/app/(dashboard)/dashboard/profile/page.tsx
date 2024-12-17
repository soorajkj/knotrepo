import React from "react";
import ProfileInfo from "./_components/profile-info";

export default function Page() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-wg-gray-900">
          Profile Information
        </h3>
      </div>
      <ProfileInfo />
    </div>
  );
}
