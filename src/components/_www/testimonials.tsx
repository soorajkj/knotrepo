import React from "react";
import Container from "~components/core/container";

export default function Testimonials() {
  return (
    <section className="relative">
      <Container>
        <div className="flex gap-4 py-12 md:py-32">
          {[...Array(1)].map((_, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800/40"
            >
              <div className="flex flex-col items-center justify-center gap-7 px-6 py-24">
                <blockquote className="flex w-full max-w-2xl flex-wrap text-center text-3xl font-medium tracking-tight text-white">
                  “Snip made it so easy to share all my social links in one
                  place. My followers love how clean and professional it looks”
                </blockquote>
                <p className="text-sm font-light text-neutral-200">
                  <span className="font-medium">Sahil Mansuri</span> · {/* */}
                  CEO &amp; Co-founder at Bravado
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
