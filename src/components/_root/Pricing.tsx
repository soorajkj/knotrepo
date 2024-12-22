import * as React from "react";
import Container from "@/components/core/container";
import Plan from "@/components/root/Plan";

export default function Pricing() {
  return (
    <section className="relative overflow-y-clip">
      <Container>
        <div className="py-12 sm:py-24 ">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 text-4xl font-semibold text-gray-900">
              Predictable pricing, designed to scale
            </h2>
            <p className="text-lg">
              Choose the plan that&apos;s right for you. Whether you&apos;re
              tinkering or looking to scale up, we have a pricing model to fit
              your needs.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-0 divide-x divide-gray-100 rounded-xl bg-gray-50">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3">
                <Plan />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
