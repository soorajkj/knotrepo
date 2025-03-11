"use client";

import * as React from "react";
import Compare from "./Compare";
import { pricing } from "~data/pricing";
import { cn } from "~utils/classnames";
import Button from "~components/core/button";
import Container from "~components/core/container";

export default function Pricing() {
  const [monthly, _setMonthly] = React.useState(true);

  return (
    <section className="relative grow bg-white">
      <Container>
        <div className="py-12 md:py-24">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl xl:text-5xl">
              Predictable pricing, designed to scale Speed, simplicity, and
              scalability without the headaches
            </h2>
            <p className="max-w-2xl text-base sm:text-lg">
              Sure, other platforms allow you to accept payments online but do
              you know the real hidden costs? As your merchant of record, get
              all the solutions you need to sell your digital products with a
              simple and easy-to-understand pricing model.
            </p>
          </div>
          <div className="mt-20 flex w-auto flex-col gap-6 md:w-full">
            <div className="hidden grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 xl:grid-cols-3">
              {pricing.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={cn(
                      "relative flex flex-col gap-4 p-4 md:p-6",
                      _.recommended ? "" : null
                    )}
                  >
                    <div className="flex w-full flex-col items-start gap-2">
                      <div className="flex items-center gap-2 rounded-full [&>svg]:text-purple-400">
                        <div className="text-2xl font-semibold">{_.label}</div>
                      </div>
                      <div className="max-w-80 text-base">{_.description}</div>
                      <div className="my-4 flex flex-col items-start">
                        <div className="hidden items-center gap-2.5 xl:flex">
                          <div className="text-6xl font-semibold">
                            <div
                              className={cn(
                                "relative flex",
                                _.recommended ? "" : null
                              )}
                            >
                              $<div>{_.prices[monthly ? 0 : 1]}</div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-0.5 leading-none">
                            <p className="font-semibold">one-time payment</p>
                            <p>plus local taxes</p>
                          </div>
                        </div>
                      </div>
                      <Button size="lg" className="w-full">
                        {_.action_label}
                      </Button>
                    </div>
                    <div
                      className={cn("flex flex-col", _.recommended ? "" : null)}
                    >
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="1.25"
                            d="M13.126 5.416a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0ZM10 11.041c-2.825 0-4.97 1.679-5.847 4.052-.34.922.447 1.781 1.429 1.781h8.838c.982 0 1.77-.86 1.429-1.78C14.97 12.72 12.827 11.04 10 11.04Z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Designer Seats
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeWidth="1.25"
                            d="m10 10 2.746 2.798a3.83 3.83 0 0 0 5.492 0 4.013 4.013 0 0 0 0-5.598 3.83 3.83 0 0 0-5.492 0zm0 0L7.254 7.2a3.83 3.83 0 0 0-5.492 0 4.013 4.013 0 0 0 0 5.598 3.83 3.83 0 0 0 5.492 0z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Updates Time
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m8.957 5.043 2.336-2.336a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414l-2.336 2.336a1 1 0 0 1-1.414 0L8.957 6.457a1 1 0 0 1 0-1.414Zm0 12.5 2.336-2.336a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414l-2.336 2.336a1 1 0 0 1-1.414 0l-2.336-2.336a1 1 0 0 1 0-1.414Zm-6.25-6.25 2.336-2.336a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414l-2.336 2.336a1 1 0 0 1-1.414 0l-2.336-2.336a1 1 0 0 1 0-1.414Zm12.5 0 2.336-2.336a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414l-2.336 2.336a1 1 0 0 1-1.414 0l-2.336-2.336a1 1 0 0 1 0-1.414Z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            7800+ Components
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            fill="currentColor"
                            d="M2.917 14.375v-8.75h-1.25v8.75zm14.166-8.75v8.75h1.25v-8.75zm-1.041 9.792H3.958v1.25h12.084zM3.958 4.583h12.084v-1.25H3.958zm13.125 9.792c0 .575-.466 1.042-1.041 1.042v1.25a2.29 2.29 0 0 0 2.291-2.292zm1.25-8.75a2.29 2.29 0 0 0-2.291-2.292v1.25c.575 0 1.041.467 1.041 1.042zm-15.416 0c0-.575.466-1.042 1.041-1.042v-1.25a2.29 2.29 0 0 0-2.291 2.292zm-1.25 8.75a2.29 2.29 0 0 0 2.291 2.292v-1.25a1.04 1.04 0 0 1-1.041-1.042z"
                          />
                          <path
                            fill="currentColor"
                            d="M9.375 16.042v.625h1.25v-.625zm1.25-12.084v-.625h-1.25v.625zm0 12.084V3.958h-1.25v12.084z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            1200+ Assets
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.25"
                            d="M9.167 2.291v1.458m4.922.495-1.092 1.092m-7.66 7.66-1.093 1.092M3.75 9.166H2.292m3.045-3.83L4.244 4.244m7.533 13.255L8.654 8.998a.417.417 0 0 1 .545-.531l8.334 3.299a.417.417 0 0 1 .055.748l-3.117 1.805a.4.4 0 0 0-.152.151l-1.79 3.094a.417.417 0 0 1-.752-.066Z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Real-use Examples
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.25"
                            d="M16.042 3.959H3.958c-.92 0-1.666.746-1.666 1.667v8.75c0 .92.746 1.666 1.666 1.666h12.084c.92 0 1.666-.746 1.666-1.666v-8.75c0-.92-.746-1.667-1.666-1.667M10 7.291v2.708m0 0v2.709m0-2.709H7.292M10 10h2.708"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            80+ Unique Widgets
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.417"
                            d="M4.792 7.084a.625.625 0 1 0 1.25 0 .625.625 0 0 0-1.25 0m2.916 0a.625.625 0 1 0 1.25 0 .625.625 0 0 0-1.25 0m2.917 0a.625.625 0 1 0 1.25 0 .625.625 0 0 0-1.25 0"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.25"
                            d="M17.708 10.209V5.626c0-.92-.746-1.667-1.666-1.667H3.958c-.92 0-1.666.746-1.666 1.667v9.583c0 .92.746 1.667 1.666 1.667h6.25m8.125-2.58L12.5 12.5l1.795 5.833 1.346-2.692 2.692-1.346Z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Ready-to-use Templates
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            fill="currentColor"
                            d="M21.588 8.67a.75.75 0 1 0-.675-1.34zm-18.5-1.34a.75.75 0 1 0-.675 1.34zM20.5 6.75v10.5H22V6.75zM19.25 18.5H4.75V20h14.5zM3.5 17.25V6.75H2v10.5zM4.75 5.5h14.5V4H4.75zm16.163 1.83-8.35 4.207.675 1.34 8.35-4.207zm-9.475 4.207L3.088 7.33l-.675 1.34 8.35 4.207zM3.5 6.75c0-.69.56-1.25 1.25-1.25V4A2.75 2.75 0 0 0 2 6.75zM4.75 18.5c-.69 0-1.25-.56-1.25-1.25H2A2.75 2.75 0 0 0 4.75 20zm15.75-1.25c0 .69-.56 1.25-1.25 1.25V20A2.75 2.75 0 0 0 22 17.25zm-7.937-5.713a1.25 1.25 0 0 1-1.125 0l-.675 1.34a2.75 2.75 0 0 0 2.475 0zM22 6.75A2.75 2.75 0 0 0 19.25 4v1.5c.69 0 1.25.56 1.25 1.25z"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Communication Methods
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.25"
                            d="M10 6.458V10l2.917 2.917M2.293 3.958v3.334h3.333"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.25"
                            d="M2.707 12.57a7.72 7.72 0 0 0 7.28 5.138c4.264 0 7.72-3.45 7.72-7.708 0-4.257-3.456-7.708-7.72-7.708a7.72 7.72 0 0 0-7.114 4.71"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Support Response
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 py-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                          className="hidden size-5 shrink-0 text-violet-600 sm:block"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                            strokeMiterlimit="1.5"
                            strokeWidth="1.25"
                            d="M5.625 12.9V4.79a1.66 1.66 0 0 1 1.667-1.664h8.124"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="square"
                            strokeLinejoin="round"
                            strokeMiterlimit="1.5"
                            strokeWidth="1.25"
                            d="M12.083 16.874H4.82a1.695 1.695 0 0 1-1.694-1.693v-.807c0-.69.56-1.25 1.25-1.25h5.416c.69 0 1.25.56 1.25 1.25v.835c0 .92.746 1.665 1.666 1.665h.003c.92 0 1.665-.745 1.665-1.665V7.916"
                          />
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="1.5"
                            strokeWidth="1.25"
                            d="M16.042 3.125c.907 0 1.666.759 1.666 1.667v1.666c0 .69-.56 1.25-1.25 1.25h-2.083V4.792a1.667 1.667 0 0 1 1.667-1.667"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex items-center gap-0.5">
                          <span className="max-w-48 truncate">
                            Commercial Usage
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Compare />
          </div>
        </div>
      </Container>
    </section>
  );
}
