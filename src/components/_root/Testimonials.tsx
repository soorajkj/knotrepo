import * as React from "react";
import Container from "@/components/core/container";
import Masonry from "@/components/core/masonry";
import Testimonial from "@/components/root/Testimonial";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="py-12 sm:py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 text-4xl font-semibold text-gray-900">
              Don&apos;t just take our word for it
            </h2>
            <p className="text-lg">
              Discover what our community has to say about their Supabase
              experience.
            </p>
          </div>
          <div className="relative overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-white">
            <Masonry count={4}>
              {Array.from({ length: 12 }).map((_, i) => (
                <Testimonial key={i} />
              ))}
            </Masonry>
          </div>
        </div>
      </Container>
    </section>
  );
}
