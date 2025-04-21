import * as React from "react";
import Faqs from "~components/www/faqs";
import Features from "~components/www/features";
import Hero from "~components/www/hero";
import Pricing from "~components/www/pricing";
import SocialProof from "~components/www/social-proof";
import Testimonials from "~components/www/testimonials";

export default function Page() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
      <SocialProof />
      <Testimonials />
      <Pricing />
      <Faqs />
    </React.Fragment>
  );
}
