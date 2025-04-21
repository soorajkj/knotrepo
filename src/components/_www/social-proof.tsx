import React from "react";
import Container from "~components/core/container";

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="relative">
          <div className="grid grid-cols-1 gap-px bg-neutral-900 p-px sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg
                  className="h-9 w-[140px] md:h-[38px] md:w-max"
                  aria-label="MongoDB Logo"
                >
                  <title>MongoDB Logo</title>
                  <use href="/images/spritesheet.svg#mongodb-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-[29px] w-max" aria-label="Indeed Logo">
                  <title>Indeed Logo</title>
                  <use href="/images/spritesheet.svg#indeed-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-10 w-max" aria-label="Mercury Logo">
                  <title>Mercury Logo</title>
                  <use href="/images/spritesheet.svg#mercury-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg
                  className="h-[19px] w-max md:h-[21px]"
                  aria-label="Rippling Logo"
                >
                  <title>Rippling Logo</title>
                  <use href="/images/spritesheet.svg#rippling-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg
                  className="h-[18px] w-[136px] md:h-5 md:w-max"
                  aria-label="Hexaware Logo"
                >
                  <title>Hexaware Logo</title>
                  <use href="/images/spritesheet.svg#hexaware-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-10 w-max" aria-label="Ramp Logo">
                  <title>Ramp Logo</title>
                  <use href="/images/spritesheet.svg#ramp-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-6 w-max" aria-label="Rho Logo">
                  <title>Rho Logo</title>
                  <use href="/images/spritesheet.svg#rho-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-7 w-max" aria-label="Golin Logo">
                  <title>Golin Logo</title>
                  <use href="/images/spritesheet.svg#golin-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-7 w-max" aria-label="Workable Logo">
                  <title>Workable Logo</title>
                  <use href="/images/spritesheet.svg#workable-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-[34px] w-max" aria-label="Knock Logo">
                  <title>Knock Logo</title>
                  <use href="/images/spritesheet.svg#knock-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-10 w-max" aria-label="8Sleep Logo">
                  <title>8Sleep Logo</title>
                  <use href="/images/spritesheet.svg#eight-sleep-logo" />
                </svg>
              </div>
            </div>
            <div className="flex h-36 items-center justify-center bg-neutral-900">
              <div className="flex h-16 w-36 select-none items-center justify-center text-white">
                <svg className="h-14 w-max" aria-label="G2 Logo">
                  <title>G2 Logo</title>
                  <use href="/images/spritesheet.svg#g2-logo" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
