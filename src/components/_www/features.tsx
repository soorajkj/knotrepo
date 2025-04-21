import React from "react";
import Container from "~components/core/container";

export default function Features() {
  return (
    <section className="relative">
      <Container>
        <div className="py-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-y-6 md:col-span-2">
              <a className="flex flex-col justify-between gap-y-8 rounded-xl border border-neutral-800 bg-neutral-800/20 p-8 md:h-96">
                <div className="flex flex-col gap-y-6">
                  <svg
                    className="size-4 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="HiveOutlinedIcon"
                  >
                    <path d="m21.5 9-2.25-4h-3.31l-1.69-3h-4.5L8.06 5H4.75L2.5 9l1.69 3-1.69 3 2.25 4h3.31l1.69 3h4.5l1.69-3h3.31l2.25-4-1.69-3zm-2.29 0-1.12 2h-2.14l-1.12-2 1.12-2h2.14zm-8.27 5-1.12-2 1.12-2h2.12l1.12 2-1.12 2zm2.14-10 1.12 1.98L13.06 8h-2.12L9.8 5.98 10.92 4zM5.92 7h2.14l1.12 2-1.12 2H5.92L4.79 9zm-1.13 8 1.12-2h2.14l1.12 2-1.12 2H5.92zm6.13 5L9.8 18.02 10.94 16h2.12l1.13 2.02L13.08 20zm7.16-3h-2.14l-1.12-2 1.12-2h2.14l1.12 2z" />
                  </svg>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-neutral-200">
                      Digital Products &amp; SaaS Billing
                    </h3>
                    <p className="w-full grow md:max-w-96">
                      Create digital products and SaaS billing with flexible
                      pricing models and seamless payment processing.
                    </p>
                  </div>
                </div>
                <ul className="flex flex-col gap-y-1">
                  <li className="flex flex-row items-center gap-x-2">
                    <svg
                      className="size-4 text-emerald-500"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="CheckIcon"
                    >
                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <p className="text-pretty leading-relaxed">
                      Subscription Products
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-x-2">
                    <svg
                      className="size-4 text-emerald-500"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="CheckIcon"
                    >
                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <p className="text-pretty leading-relaxed">
                      One-time Purchases
                    </p>
                  </li>
                  <li className="flex flex-row items-center gap-x-2">
                    <svg
                      className="size-4 text-emerald-500"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="CheckIcon"
                    >
                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <p className="text-pretty leading-relaxed">
                      Usage-based billing for metered products
                    </p>
                  </li>
                </ul>
              </a>
            </div>
            <div className="flex flex-col gap-y-6">
              <a className="flex flex-col justify-between gap-y-8 rounded-xl border border-neutral-800 bg-neutral-800/20 p-8 md:h-96">
                <div className="flex flex-col gap-y-6">
                  <svg
                    className="size-4 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="AllInclusiveOutlinedIcon"
                  >
                    <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l7.03-6.24c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37" />
                  </svg>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-neutral-200">
                      Benefits Engine
                    </h3>
                    <p className="w-full grow md:max-w-96">
                      Powerful entitlements engine that automates access to
                      various features.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-x-2 rounded-lg bg-neutral-800 p-3">
                    <svg
                      className="size-4 fill-white"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="KeyOutlinedIcon"
                    >
                      <path d="M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3" />
                    </svg>
                    <span className="text-sm text-neutral-500">
                      License Keys
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-lg bg-neutral-800 p-3">
                    <svg
                      className="size-4 fill-white"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="DownloadingOutlinedIcon"
                    >
                      <path d="M18.32 4.26C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9m-1.62 5.9 1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89M13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m2.59-9.34L13 13.17V7h-2v6.17l-2.59-2.59L7 12l5 5 5-5zM11 19.93v2.02c-5.05-.5-9-4.76-9-9.95s3.95-9.45 9-9.95v2.02C7.05 4.56 4 7.92 4 12s3.05 7.44 7 7.93" />
                    </svg>
                    <span className="text-sm text-neutral-500">
                      Downloadables
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-lg bg-neutral-800 p-3">
                    <svg
                      className="size-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-neutral-500">
                      GitHub Repos
                    </span>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-lg bg-neutral-800 p-3">
                    <svg
                      className="size-5"
                      viewBox="0 -28.5 256 256"
                      version="1.1"
                      preserveAspectRatio="xMidYMid"
                      fill="currentColor"
                      width={16}
                      height={16}
                    >
                      <g>
                        <path
                          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    <span className="text-sm text-neutral-500">
                      Discord Roles
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-y-6">
              <a className="flex flex-col justify-between gap-y-8 rounded-xl border border-neutral-800 bg-neutral-800/20 p-8 md:h-96">
                <div className="flex flex-col gap-y-6">
                  <svg
                    className="size-4 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="FaceIcon"
                  >
                    <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8" />
                  </svg>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-neutral-200">
                      Customer Management
                    </h3>
                    <p className="w-full grow md:max-w-96">
                      Streamlined customer lifecycle management with detailed
                      profiles and analytics.
                    </p>
                  </div>
                </div>
                <div className="relative h-[120px] md:h-[200px]">
                  <div className="absolute inset-x-0 top-0 scale-90 hover:-translate-y-1">
                    <div className="flex items-center gap-x-4 rounded-lg bg-neutral-800 p-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-black dark:text-white">
                          John Doe
                        </span>
                        <span className="flex flex-row gap-x-2 text-sm text-neutral-500">
                          <span>Premium Plan</span>
                          <span>•</span>
                          <span>Monthly</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-4 scale-95 hover:-translate-y-1">
                    <div className="flex items-center gap-x-4 rounded-lg bg-neutral-800 p-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-black dark:text-white">
                          John Doe
                        </span>
                        <span className="flex flex-row gap-x-2 text-sm text-neutral-500">
                          <span>Premium Plan</span>
                          <span>•</span>
                          <span>Monthly</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 top-8 hover:-translate-y-1">
                    <div className="flex items-center gap-x-4 rounded-lg bg-neutral-800 p-4">
                      <div className="flex flex-col">
                        <span className="font-medium text-black dark:text-white">
                          John Doe
                        </span>
                        <span className="flex flex-row gap-x-2 text-sm text-neutral-500">
                          <span>Premium Plan</span>
                          <span>•</span>
                          <span>Monthly</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-y-6">
              <a className="flex flex-col justify-between gap-y-8 rounded-xl border border-neutral-800 bg-neutral-800/20 p-8 md:h-96">
                <div className="flex flex-col gap-y-6">
                  <svg
                    className="size-4 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="DonutLargeOutlinedIcon"
                  >
                    <path d="M13 5.08c3.06.44 5.48 2.86 5.92 5.92h3.03c-.47-4.72-4.23-8.48-8.95-8.95zM18.92 13c-.44 3.06-2.86 5.48-5.92 5.92v3.03c4.72-.47 8.48-4.23 8.95-8.95zM11 18.92c-3.39-.49-6-3.4-6-6.92s2.61-6.43 6-6.92V2.05c-5.05.5-9 4.76-9 9.95s3.95 9.45 9 9.95z" />
                  </svg>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-neutral-200">
                      Usage Based Billing (Alpha)
                    </h3>
                    <p className="w-full grow md:max-w-96">
                      Robust event ingestion API that enables precise
                      usage-based billing.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 overflow-auto rounded-lg bg-neutral-800 p-4">
                  <pre className="font-mono text-xs">
                    Ingestion(){"\n"}.strategy(new
                    LLM(openai(&apos;gpt-4o&apos;))){"\n"}
                    .ingest(&apos;openai-usage&apos;)
                  </pre>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-y-6">
              <a className="flex flex-col justify-between gap-y-8 rounded-xl border border-neutral-800 bg-neutral-800/20 p-8 md:h-96">
                <div className="flex flex-col gap-y-6">
                  <svg
                    className="size-4 fill-white"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="LanguageOutlinedIcon"
                  >
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z" />
                  </svg>
                  <div className="flex flex-col gap-y-2">
                    <h3 className="text-xl text-neutral-200">
                      Global Merchant of Record
                    </h3>
                    <p className="w-full grow md:max-w-96">
                      Focus on your passion while we handle all the tax
                      compliance.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 rounded-lg bg-neutral-800 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black dark:text-white">
                      Tax Report 2025
                    </span>
                    <span className="text-sm text-emerald-500">Submitted</span>
                  </div>
                  <div className="dark:border-polar-700 flex items-center justify-between border-t border-neutral-800 pt-2">
                    <span className="text-sm text-neutral-500">VAT (EU)</span>
                    <span className="text-sm text-neutral-500">€2,450.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500">
                      Sales Tax (US)
                    </span>
                    <span className="text-sm text-neutral-500">$3,120.00</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
