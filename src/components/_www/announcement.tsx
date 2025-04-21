import React from "react";

export default function Announcement() {
  return (
    <div className="bg-neutral-800 lg:m-2 lg:mb-0 lg:rounded-lg lg:shadow-sm">
      <div className="flex h-auto w-full items-center justify-center gap-2 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-neutral-400">
            Built faster websites with{/* */}{" "}
            <span className="font-medium text-neutral-200">AlignUI PRO</span>{" "}
            components!
          </span>
        </div>
      </div>
    </div>
  );
}
