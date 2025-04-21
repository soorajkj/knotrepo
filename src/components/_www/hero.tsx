import * as React from "react";
import Button from "~components/core/button";
import Container from "~components/core/container";

export default function Hero() {
  return (
    <section className="relative">
      <Container>
        <div className="relative py-16 lg:py-48">
          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="max-w-4xl font-inter text-7xl font-medium tracking-tight">
                <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                  The platform for integrating{" "}
                </span>
                <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                  your digital presence
                </span>
              </h1>
              <p className="max-w-screen-sm text-lg">
                Easily manage and showcase your digital presence with a single,
                customizable link. Share your social profiles, websites, and
                content seamlessly.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 flex min-h-0 items-center justify-center gap-2">
            <Button variant="primary">Start your project</Button>
            <Button variant="outline">Request a demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
