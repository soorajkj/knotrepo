import * as React from "react";
import Icon from "../core/icon";
import Button from "@/components/core/button";
import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-repeat after:pointer-events-none after:absolute after:inset-0 after:bg-[url('/images/magic-pattern.svg')] after:bg-cover after:bg-center after:bg-repeat after:opacity-5">
      <Container>
        <div className="relative z-10 py-24">
          <div className="magicpattern absolute inset-x-0 top-0 -z-10 flex size-full items-center justify-center opacity-100" />
          <div className="mx-auto flex w-fit items-center gap-2 rounded-lg border border-gray-300 bg-white p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:rounded-full sm:py-1 sm:pl-1 sm:pr-3">
            <div className="items-center rounded-full border border-gray-300 px-2.5 py-0.5 text-xs font-medium text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 sm:block xl:flex">
              New Release
            </div>
            <p className="flex items-center gap-1 text-sm">
              Get started with our new product release today
            </p>
          </div>
          <h1 className="mx-auto my-5 max-w-screen-lg text-balance text-center text-3xl font-semibold text-gray-900 md:text-7xl">
            All your profiles, <br /> In one single place
          </h1>
          <p className="mx-auto max-w-screen-sm text-center text-lg">
            Effortlessly combine your social media profiles, website, and
            content into a single, easy-to-share link. Simplify your online
            presence and connect with your audience seamlessly, all from one
            unified platform.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              shape="pill"
              className="px-6 py-3"
            >
              <span className="text-base">Get started for free</span>
              <Icon icon="ArrowRight" className="size-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
