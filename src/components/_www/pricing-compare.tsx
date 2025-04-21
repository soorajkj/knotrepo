import React from "react";
import { plans, pricing } from "~data/pricing";
import { PlanValue } from "~types/pricing";
import { typedEntries } from "~utils/typed-entries";
import Button from "~components/core/button";

export default function PricingCompare() {
  return (
    <div className="relative -m-px">
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

function TableHead() {
  return (
    <thead>
      <tr>
        <th scope="col"></th>
        {plans.map((plan) => (
          <th key={plan.id} scope="col">
            <div className="flex items-center justify-between gap-1">
              {plan.title}
              <Button variant="outline" size="sm">
                Upgrade now
              </Button>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableBody() {
  return (
    <tbody>
      {typedEntries(pricing).map(([key, category]) => (
        <React.Fragment key={key}>
          <tr>
            <th scope="colgroup" colSpan={plans.length + 1}>
              <div className="flex items-center gap-2">
                <span>{category.icon}</span>
                <span className="text-lg font-semibold">
                  {category.category}
                </span>
              </div>
            </th>
          </tr>
          {category.features.map((feature) => (
            <tr key={feature.key}>
              <th scope="row">
                <div className="flex flex-col gap-1">
                  <span className="text-sm">{feature.title}</span>
                  <p className="text-sm text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </th>
              {plans.map((plan) => (
                <td key={plan.id}>{renderPlanValue(feature.plans[plan.id])}</td>
              ))}
            </tr>
          ))}
        </React.Fragment>
      ))}
    </tbody>
  );
}

const renderPlanValue = (value: PlanValue) => {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  return String(value);
};
