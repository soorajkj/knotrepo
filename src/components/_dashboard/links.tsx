"use client";

import * as React from "react";
import { Reorder, useDragControls } from "framer-motion";
import Button from "~components/core/button";
import Icon from "~components/core/icon";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function Links() {
  const ref = React.useRef(null);
  const [items, setItems] = React.useState(initialItems);
  const controls = useDragControls();

  return (
    <Reorder.Group
      ref={ref}
      axis="y"
      values={items}
      onReorder={setItems}
      className="space-y-4"
    >
      {items.map((item) => (
        <Reorder.Item
          key={item}
          value={item}
          dragConstraints={ref}
          // dragListener={false}
          dragControls={controls}
        >
          <div className="flex gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800/40">
            <div
              className="flex h-auto w-8 items-center justify-center"
              data-testid="LinkEditorDragHandle"
              tabIndex={0}
              role="button"
              aria-describedby="rbd-hidden-text-0-hidden-text-0"
              data-rbd-drag-handle-draggable-id={468978705}
              data-rbd-drag-handle-context-id={0}
              draggable="false"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" "
                role="img"
                aria-hidden="false"
                aria-labelledby="ltclid66_title "
              >
                <title id="ltclid66_title">Move</title>
                <path
                  fill="currentColor"
                  d="M5 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                />
              </svg>
            </div>
            <div className="flex w-full flex-1 flex-col gap-2 p-2">
              <form className="flex">
                <div className="w-full">
                  <div className="relative">
                    <div className="grid w-full items-baseline">
                      <div className="pointer-events-none col-start-1 row-start-1 opacity-0">
                        <input
                          type="text"
                          className="m-0 h-5 w-full border-none p-0 text-sm font-semibold outline-none "
                          name="title"
                          aria-label="title"
                          defaultValue=""
                        />
                      </div>
                      <div className="col-start-1 row-start-1 inline-flex">
                        <button
                          className="flex max-w-full items-center rounded-[2px] outline-2 outline-offset-2 focus-visible:outline"
                          type="button"
                        >
                          <p
                            data-testid="title_Input_V1Label"
                            className="text-concrete max-w-full truncate text-sm font-semibold"
                          >
                            Title
                          </p>
                          <span
                            className="ml-2 flex"
                            data-testid="Input_EditButton"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className=" "
                              role="img"
                              aria-hidden="true"
                              aria-labelledby=" "
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 14v-2.3l7.5-7.5 2.3 2.3L4.3 14H2Zm10.5-8.2 1.3-1.3-2.3-2.3-1.3 1.3 2.3 2.3Zm-1.35-4.65-10 10-.15.35v3l.5.5h3l.35-.15 10-10v-.7l-3-3h-.7Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="grid w-full items-baseline">
                    <div className="pointer-events-none col-start-1 row-start-1 opacity-0">
                      <input
                        type="text"
                        className="font-regular m-0 h-5 w-full border-none p-0 text-sm outline-none "
                        name="url"
                        aria-label="url"
                        tabIndex={-1}
                        defaultValue="http://hhihui.com"
                      />
                    </div>
                    <div className="col-start-1 row-start-1 inline-flex">
                      <button
                        className="flex max-w-full items-center rounded-[2px] outline-2 outline-offset-2 focus-visible:outline"
                        type="button"
                      >
                        <p
                          data-testid="url_Input_V1Label"
                          className="max-w-full truncate text-sm"
                        >
                          http://hhihui.com
                        </p>
                        <span
                          className="ml-2 flex"
                          data-testid="Input_EditButton"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" "
                            role="img"
                            aria-hidden="true"
                            aria-labelledby=" "
                          >
                            <path
                              fillRule="evenodd"
                              d="M2 14v-2.3l7.5-7.5 2.3 2.3L4.3 14H2Zm10.5-8.2 1.3-1.3-2.3-2.3-1.3 1.3 2.3 2.3Zm-1.35-4.65-10 10-.15.35v3l.5.5h3l.35-.15 10-10v-.7l-3-3h-.7Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  <Button variant="ghost" size="sm" iconOnly>
                    <Icon icon="Star" strokeWidth={1}></Icon>
                    <span className="sr-only">Layout</span>
                  </Button>
                  <Button variant="ghost" size="sm" iconOnly>
                    <Icon icon="Star" strokeWidth={1}></Icon>
                    <span className="sr-only">Layout</span>
                  </Button>
                  <Button variant="ghost" size="sm" iconOnly>
                    <Icon icon="Star" strokeWidth={1}></Icon>
                    <span className="sr-only">Layout</span>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Button variant="ghost" size="sm" iconOnly>
                    <Icon icon="Trash" strokeWidth={1}></Icon>
                    <span className="sr-only">Layout</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
