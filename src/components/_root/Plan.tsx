import * as React from "react";
import Button from "@/components/core/button";
import Icon from "@/components/core/icon";

export default function Plan() {
  return (
    <div className="h-full w-full p-6 px-6 py-6">
      <div className="">
        <h5 className="text-brand-600 mb-2 text-sm font-semibold">
          Basic Plan
        </h5>
        <p className="mb-6 text-4xl font-semibold text-gray-900">
          $29 <span className="text-sm font-normal">per month</span>
        </p>
      </div>
      <ul className="relative my-6 text-sm">
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>Unlimited API requests</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>HIPAA available as paid add-on</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>Read-only and Billing member roles</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>SSO for Supabase Dashboard</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>Priority email support & SLAs</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>Daily backups stored for 14 days</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>28-day log retention</p>
        </li>
        <li className="flex items-start gap-2 py-2">
          <div className="text-brand-600 relative">
            <Icon icon="Check" className="size-4" />
          </div>
          <p>Custom Security Questionnaires</p>
        </li>
      </ul>
      <Button block variant="primary" size="md">
        Start Free Trial
      </Button>
    </div>
  );
}
