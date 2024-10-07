import * as React from "react";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function Plan() {
  return (
    <div className="w-full rounded-xl border bg-surface-75 px-6 py-6">
      <h5 className="mb-2 text-sm font-semibold uppercase text-foreground">
        Hobbyist Plan
      </h5>
      <p className="mb-4 text-sm font-medium text-foreground-light">
        Affordable and Essential
      </p>
      <p className="mb-6 text-4xl font-semibold text-foreground">
        $29{" "}
        <span className="text-sm font-normal text-foreground-light">
          / month
        </span>
      </p>
      <Button block>Start Free Trial</Button>
      <ul className="mt-6 space-y-4 text-xs text-foreground-light">
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>Unlimited API requests</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>HIPAA available as paid add-on</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>Read-only and Billing member roles</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>SSO for Supabase Dashboard</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>Priority email support & SLAs</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>Daily backups stored for 14 days</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>28-day log retention</p>
        </li>
        <li className="flex items-start gap-2">
          <div className="relative">
            <Icon icon="Check" className="size-4 text-brand" />
          </div>
          <p>Custom Security Questionnaires</p>
        </li>
      </ul>
    </div>
  );
}
