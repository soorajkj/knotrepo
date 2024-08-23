import React from "react";

export default async function Page() {
  return (
    <div>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 px-4 py-8 pb-16">
        <div>
          <form id="project-general-settings" method="POST">
            <div className="bg-surface-100 overflow-hidden rounded-md border shadow dark:border-neutral-700 dark:bg-neutral-800/50">
              <div className="divide-border flex flex-col gap-0 divide-y dark:border-neutral-700">
                <div className="undefined grid grid-cols-12 gap-6 px-8  py-8 opacity-100">
                  <label className="text-foreground col-span-12 text-sm lg:col-span-5 ">
                    General settings
                  </label>
                  <div
                    className="
  undefined undefined relative col-span-12 flex flex-col
  gap-6
  lg:col-span-7
"
                  >
                    <div className="grid gap-2 text-sm leading-4 md:grid md:grid-cols-12">
                      <div className="col-span-12 flex flex-row justify-between space-x-2">
                        <label
                          className="text-foreground-light block text-sm leading-4"
                          htmlFor="name"
                        >
                          Project name
                        </label>
                      </div>
                      <div className="col-span-12">
                        <div className="">
                          <div className="relative">
                            <input
                              data-size="small"
                              id="name"
                              name=""
                              type="text"
                              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control group box-border block w-full rounded-md border px-3 py-2 text-sm leading-4 shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md dark:border-neutral-700"
                              defaultValue="tesseract-development"
                            />
                          </div>
                        </div>
                        <p
                          data-state="hide"
                          className="
  data-show:mt-2
  data-show:animate-slide-down-normal
  data-hide:animate-slide-up-normal
  text-sm
  leading-4
 text-red-900 transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid gap-2 text-sm leading-4 md:grid md:grid-cols-12">
                      <div className="col-span-12 flex flex-row justify-between space-x-2">
                        <label
                          className="text-foreground-light block text-sm leading-4"
                          htmlFor="ref"
                        >
                          Reference ID
                        </label>
                      </div>
                      <div className="col-span-12">
                        <div className="">
                          <div className="relative">
                            <input
                              data-size="small"
                              id="ref"
                              name=""
                              type="text"
                              className="peer/input text-foreground focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border-control group box-border block w-full rounded-md border px-3 py-2 text-sm leading-4 opacity-50 shadow-sm outline-none transition-all focus:ring-2 focus:ring-current focus-visible:shadow-md dark:border-neutral-700"
                              defaultValue="vzzaqjoqukcwdoyzzgvn"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center space-x-1 pl-3 pr-1">
                              <button
                                data-size="tiny"
                                type="button"
                                className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                              >
                                <div className="text-foreground-muted [&_svg]:h-[14px] [&_svg]:w-[14px]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="sbui-icon"
                                  >
                                    <rect
                                      x={9}
                                      y={9}
                                      width={13}
                                      height={13}
                                      rx={2}
                                      ry={2}
                                    />
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                  </svg>
                                </div>{" "}
                                <span className="truncate">Copy</span>{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        <p
                          data-state="hide"
                          className="
  data-show:mt-2
  data-show:animate-slide-down-normal
  data-hide:animate-slide-up-normal
  text-sm
  leading-4
 text-red-900 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t dark:border-neutral-700">
                <div className="flex px-8 py-4">
                  <div className="flex w-full items-center justify-end gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        data-size="tiny"
                        type="reset"
                        className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover pointer-events-none relative inline-flex h-[26px] cursor-not-allowed items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs opacity-50 outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                      >
                        {" "}
                        <span className="truncate">Cancel</span>{" "}
                      </button>
                      <button
                        data-size="tiny"
                        type="submit"
                        form="project-general-settings"
                        className="font-regular bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 pointer-events-none relative inline-flex h-[26px] cursor-not-allowed items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs opacity-50 outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                      >
                        {" "}
                        <span className="truncate">Save</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="mt-6" id="restart-project">
            <div className="bg-surface-100 overflow-hidden rounded-md border shadow dark:border-neutral-700 dark:bg-neutral-800/50">
              <div className="divide-border flex flex-col gap-0 divide-y dark:border-neutral-700">
                <div className="flex flex-col px-8 py-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm">Restart project</p>
                      <div className="max-w-[420px]">
                        <p className="text-foreground-light text-sm">
                          Your project will not be available for a few minutes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center" data-state="closed">
                      <button
                        data-size="tiny"
                        type="button"
                        className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md rounded-r-none border px-3 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                      >
                        {" "}
                        <span className="truncate">Restart project</span>{" "}
                      </button>
                      <button
                        data-size="tiny"
                        type="button"
                        className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md rounded-l-none border px-[4px] py-[5px] text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                        id="radix-:r12:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                      >
                        <div className="text-foreground-muted [&_svg]:h-[14px] [&_svg]:w-[14px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down "
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="flex w-full items-center justify-between px-8 py-4 dark:border-neutral-700"
                  id="pause-project"
                >
                  <div>
                    <p className="text-sm">Pause project</p>
                    <div className="max-w-[420px]">
                      <p className="text-foreground-light text-sm">
                        Your project will not be accessible while it is paused.
                      </p>
                    </div>
                  </div>
                  <button
                    data-size="tiny"
                    type="button"
                    className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover pointer-events-auto relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                    data-state="closed"
                  >
                    <div className="text-foreground-muted [&_svg]:h-[14px] [&_svg]:w-[14px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-pause "
                      >
                        <rect width={4} height={16} x={6} y={4} />
                        <rect width={4} height={16} x={14} y={4} />
                      </svg>
                    </div>{" "}
                    <span className="truncate">Pause project</span>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="relative">
              <div className="transition-opacity duration-300">
                <div className="bg-surface-100 -sm mb-8 overflow-hidden rounded-md border shadow dark:border-neutral-700 dark:bg-neutral-800/50">
                  <div className="px-6 py-4">
                    <div className="flex justify-between">
                      <div className="flex space-x-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="sbui-icon"
                        >
                          <line x1={18} y1={20} x2={18} y2={10} />
                          <line x1={12} y1={20} x2={12} y2={4} />
                          <line x1={6} y1={20} x2={6} y2={14} />
                        </svg>
                        <div>
                          <p className="text-sm">
                            Project usage statistics has been moved
                          </p>
                          <p className="text-foreground-light text-sm">
                            You may view your project&apos;s usage under your
                            organization&apos;s settings
                          </p>
                        </div>
                      </div>
                      <div>
                        <a
                          data-size="tiny"
                          type="button"
                          className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                          href="/dashboard/org/nkpdeunjcypuvjmwtmdn/usage?projectRef=vzzaqjoqukcwdoyzzgvn"
                        >
                          <span className="truncate">View project usage</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="custom-domains">
          <div className="undefined mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-foreground text-xl">Custom Domains</h3>
              <div className="prose max-w-full text-sm">
                <p>Present a branded experience to your users</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2" />
          </div>
          <div className="border-overlay bg-surface-200 block w-full rounded border px-6 py-4 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="flex gap-x-3">
              <div className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-alert-circle "
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} x2={12} y1={8} y2={12} />
                  <line x1={12} x2="12.01" y1={16} y2={16} />
                </svg>
              </div>
              <div className="flex w-full items-center justify-between gap-x-32">
                <div className="space-y-1">
                  <p className="text-sm">
                    Custom domains are a Pro Plan add-on
                  </p>
                  <div>
                    <p className="text-foreground-light text-sm">
                      To configure a custom domain for your project, please
                      upgrade to the Pro Plan with the custom domains add-on
                      selected
                    </p>
                  </div>
                </div>
                <a
                  data-size="tiny"
                  type="button"
                  className="font-regular bg-brand-400 dark:bg-brand-500 hover:bg-brand/80 dark:hover:bg-brand/50 text-foreground border-brand-500/75 dark:border-brand/30 hover:border-brand-600 dark:hover:border-brand focus-visible:outline-brand-600 data-[state=open]:bg-brand-400/80 dark:data-[state=open]:bg-brand-500/80 data-[state=open]:outline-brand-600 relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                  href="/dashboard/org/nkpdeunjcypuvjmwtmdn/billing?panel=subscriptionPlan"
                >
                  <span className="truncate">Upgrade to Pro</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="transfer-project">
          <div className="undefined mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-foreground text-xl">Transfer Project</h3>
              <div className="prose max-w-full text-sm">
                <p>Transfer your project to a different organization.</p>
              </div>
            </div>
            <div className="flex items-center gap-x-2" />
          </div>
          <div className="relative">
            <div className="transition-opacity duration-300">
              <div className="bg-surface-100 -sm mb-8 overflow-hidden rounded-md border shadow dark:border-neutral-700 dark:bg-neutral-800/50">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex space-x-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sbui-icon mt-1"
                      >
                        <rect x={1} y={3} width={15} height={13} />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                      <div className="space-y-1 xl:max-w-lg">
                        <p className="text-sm">
                          Transfer project to another organization
                        </p>
                        <p className="text-foreground-light text-sm">
                          To transfer projects, the owner must be a member of
                          both the source and target organizations.
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        data-size="tiny"
                        type="button"
                        className="font-regular text-foreground bg-alternative dark:bg-muted hover:bg-selection border-strong hover:border-stronger focus-visible:outline-brand-600 data-[state=open]:bg-selection data-[state=open]:outline-brand-600 data-[state=open]:border-button-hover pointer-events-auto relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 dark:border-neutral-700"
                        data-state="closed"
                      >
                        {" "}
                        <span className="truncate">Transfer project</span>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="delete-project">
          <div className="undefined mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-foreground text-xl">Delete Project</h3>
            </div>
            <div className="flex items-center gap-x-2" />
          </div>
          <div className="relative">
            <div className="transition-opacity duration-300">
              <div className="bg-surface-100 -sm mb-8 overflow-hidden rounded-md border shadow dark:border-neutral-700 dark:bg-neutral-800/50">
                <div className="px-6 py-4">
                  <div className=" text-red-1200 relative flex items-start space-x-4 rounded-md border border-red-700  bg-red-950 px-6 py-4">
                    <div className="text-red-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="sbui-icon"
                      >
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} y1={8} x2={12} y2={12} />
                        <line x1={12} y1={16} x2="12.01" y2={16} />
                      </svg>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                      <div>
                        <h3 className="text-red-1200 mb-1 block text-sm font-normal">
                          Deleting this project will also remove your database.
                        </h3>
                        <div className="text-red-1100 text-xs">
                          <div>
                            <p className="mb-4 block">
                              Make sure you have made a backup if you want to
                              keep your data.
                            </p>
                            <button
                              data-size="tiny"
                              type="button"
                              className="font-regular text-foreground bg-destructive-300 dark:bg-destructive-400 hover:bg-destructive-400 dark:hover:bg-destructive/50 border-destructive-500 hover:border-destructive hover:text-hi-contrast data-[state=open]:border-destructive data-[state=open]:bg-destructive-400 dark:data-[state=open]:bg-destructive-/50 data-[state=open]:outline-destructive pointer-events-auto relative inline-flex h-[26px] cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1 focus-visible:outline-amber-700 dark:border-neutral-700"
                              data-state="closed"
                            >
                              {" "}
                              <span className="truncate">
                                Delete project
                              </span>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
