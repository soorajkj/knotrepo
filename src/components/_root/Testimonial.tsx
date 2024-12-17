"use client";

import * as React from "react";

export default function Testimonial() {
  return (
    <div className="inline-block break-inside-avoid-column rounded-xl border border-gray-200 bg-white">
      <div className="flex flex-col gap-4 rounded-2xl p-6 transition-colors">
        <div className="text-base text-gray-600">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tincidunt urna ac tortor molestie, sit amet lobortis massa cursus. Ut
          rutrum nunc sit amet tellus cursus congue.”
        </div>
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <div className="size-full bg-slate-900"></div>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium leading-none text-gray-900">
                Customer Name
              </p>
              <p className="text-xs leading-none">@username</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
