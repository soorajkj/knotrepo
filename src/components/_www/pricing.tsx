import React from "react";
import Container from "~components/core/container";
import PricingCompare from "~components/www/pricing-compare";

export default function Pricing() {
  return (
    <section className="relative">
      <Container>
        <div className="relative border-x border-b border-neutral-800">
          <PricingCompare />
        </div>
      </Container>
    </section>
  );
}
