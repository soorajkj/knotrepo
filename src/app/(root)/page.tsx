import * as React from "react";
import Features from "@/components/root/Features";
import Hero from "@/components/root/Hero";
import Pricing from "@/components/root/Pricing";
import Testimonials from "@/components/root/Testimonials";

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </React.Fragment>
  );
}
