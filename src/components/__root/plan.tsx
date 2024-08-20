import * as React from "react";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function Plan() {
  return (
    <div className="w-full rounded-xl border bg-neutral-50 px-6 py-8 shadow-md dark:border-neutral-700 dark:bg-neutral-800/80">
      <h5 className="mb-2 text-base font-semibold text-neutral-900 dark:text-neutral-200">
        Hobbyist Plan
      </h5>
      <p className="mb-4 text-sm">Affordable and Essential</p>
      <p className="mb-6 text-4xl font-bold text-white">
        $29/ <span className="text-2xl">month</span>
      </p>
      <Button variant={"secondary"} block>
        Start Free Trial
      </Button>
      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-emerald-400" />
          </div>
          <p>
            Includes: 20 Smart Requests ($1/request over) 5k Cached Requests
            ($0.002/request over)
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-emerald-400" />
          </div>
          <p>
            Scalable bulk pricing options designed to provide value at every
            level of usage.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-emerald-400" />
          </div>
          <p>
            Standard email support to help guide you through setup and
            troubleshoot any issues.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-emerald-400" />
          </div>
          <p>
            Advanced features and custom integrations to meet specific business
            needs.
          </p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-emerald-400" />
          </div>
          <p>
            Priority email support to assist you with any queries or issues.
          </p>
        </li>
      </ul>
    </div>
  );
}
