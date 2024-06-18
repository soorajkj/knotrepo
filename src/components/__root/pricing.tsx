import * as React from "react";
import Container from "@/components/core/container";
import Plan from "@/components/root/plan";

export default function Pricing() {
  return (
    <section className="relative overflow-y-clip py-12 sm:py-32">
      <Container>
        <div>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 font-family-suezone text-4xl text-zinc-800">
              Pricing
            </h2>
            <p className="text-lg font-medium">
              Choose the plan that&apos;s right for you. Whether you&apos;re
              tinkering or looking to scale up, we have a pricing model to fit
              your needs.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
                <Plan />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
