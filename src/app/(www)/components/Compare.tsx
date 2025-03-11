"use client";

import * as React from "react";
import { pricingFeatures, pricingPlans } from "~data/compare";
import { cn } from "~utils/classnames";
import Button from "~components/core/button";
import Icon from "~components/core/icon";
import Tooltip from "~components/core/tooltip";

export default function Compare() {
  return (
    <div className="overflow-clip">
      <table className="table w-full table-fixed border-collapse divide-y bg-white">
        <thead className="sticky top-20 h-auto w-full bg-white">
          <tr className="">
            <th
              scope="col"
              className="w-1/3 p-3 text-left text-lg font-medium"
            ></th>
            {pricingPlans.map((plan, i) => (
              <th
                key={i}
                className={cn(
                  "p-3 text-center font-normal",
                  plan.recomended ? "" : ""
                )}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-medium">{plan.name}</p>
                  <Button size="lg">Get started</Button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {pricingFeatures.map((category, i) => {
            return (
              <React.Fragment key={i}>
                <tr>
                  <th
                    className="p-3 text-left text-base font-medium"
                    scope="colgroup"
                    colSpan={pricingPlans.length + 1}
                  >
                    <div className="flex items-center gap-2">
                      {category.category}
                    </div>
                  </th>
                </tr>
                {category.features.map((feature, i) => {
                  return (
                    <tr key={i} className="divide-x">
                      <th
                        scope="row"
                        className="p-3 text-left text-base font-normal"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-violet-400">
                            {(i + 1).toString().padStart(2, "0")}
                          </span>
                          <div className="flex-1">{feature.name}</div>
                          <Tooltip.TooltipProvider>
                            <Tooltip.TooltipRoot delayDuration={300}>
                              <Tooltip.TooltipTrigger>
                                <Icon icon="CircleHelp" className="size-4" />
                              </Tooltip.TooltipTrigger>
                              <Tooltip.TooltipContent>
                                <p>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit. Dolores velit eius illum
                                  magni ut commodi consectetur cumque! Autem
                                </p>
                              </Tooltip.TooltipContent>
                            </Tooltip.TooltipRoot>
                          </Tooltip.TooltipProvider>
                        </div>
                      </th>
                      {pricingPlans.map((plan, i) => {
                        const isRecommended = plan.recomended;
                        return (
                          <td
                            key={i}
                            className={cn(
                              "p-3 text-center text-base",
                              isRecommended && ""
                            )}
                          >
                            {typeof feature.values[plan.name] === "boolean" ? (
                              feature.values[plan.name] ? (
                                <Icon
                                  icon="CircleCheck"
                                  className="inline size-5 stroke-green-500"
                                />
                              ) : (
                                <Icon
                                  icon="CircleX"
                                  className="inline size-5 stroke-red-500"
                                />
                              )
                            ) : (
                              feature.values[plan.name]
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
