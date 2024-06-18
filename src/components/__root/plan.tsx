import * as React from "react";
import Button from "@/components/core/button";

export default function Plan() {
  return (
    <div className="rounded-lg bg-zinc-100 px-8 py-8">
      <h5 className="mb-2 text-lg font-semibold text-zinc-800">
        Hobbyist Plan
      </h5>
      <p className="mb-4">Affordable and Essential</p>
      <p className="mb-6 text-4xl font-semibold">
        $29/ <span className="text-2xl">month</span>
      </p>
      <Button block>Start Free Trial</Button>
      <ul className="mt-6 list-disc space-y-4 pl-6 text-sm">
        <li>
          Includes: 20 Smart Requests ($1/request over) 5k Cached Requests
          ($0.002/request over)
        </li>
        <li>
          Scalable bulk pricing options designed to provide value at every level
          of usage.
        </li>
        <li>
          Standard email support to help guide you through setup and
          troubleshoot any issues.
        </li>
        <li>
          Advanced features and custom integrations to meet specific business
          needs.
        </li>
        <li>
          Priority email support to assist you with any queries or issues.
        </li>
      </ul>
    </div>
  );
}
