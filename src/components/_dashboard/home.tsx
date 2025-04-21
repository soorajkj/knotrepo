import * as React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="flex flex-1 flex-col gap-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-3 gap-4 pb-6">
            <div className="w-full">
              <div className="text-sm">Current Sales</div>
              <div className="mt-1 flex items-center gap-1.5">
                <div className="text-2xl font-medium">3,484</div>
                <div className="text-xs font-medium">
                  <span className="text-green-500">+7.1%</span> vs prev
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="text-sm">Daily Average</div>
              <div className="mt-1 flex items-center gap-1.5">
                <div className="text-2xl font-medium">486</div>
                <div className="text-xs font-medium">
                  <span className="text-green-500">+2%</span> vs last week
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="text-sm">Conversion Rate</div>
              <div className="mt-1 flex items-center gap-1.5">
                <div className="text-2xl font-medium">3.8%</div>
                <div className="text-xs font-medium">
                  <span className="text-red-500">-0.5%</span> vs last week
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center min-[1100px]:flex-col min-[1100px]:items-start xl:flex-row xl:items-center">
            <div>
              <div className="text-label-sm text-text-sub-600">Total Sales</div>
              <div className="mt-1 flex items-center gap-2">
                <div className="text-title-h5 text-text-strong-950">8,944</div>
                <div className="text-label-xs bg-success-lighter text-success-base inline-flex h-5 items-center justify-center gap-1.5 rounded-full px-2 transition duration-200 ease-out">
                  +2.1%
                </div>
                <div className="text-label-xs text-text-sub-600">
                  vs last week
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div
              className="recharts-responsive-container"
              style={{ width: "100%", height: 192, minWidth: 0 }}
            >
              <div
                className="recharts-wrapper [&_.recharts-cartesian-grid-horizontal>line]:stroke-bg-weak-50 [&_.recharts-cartesian-grid-horizontal>line]:[stroke-dasharray:0] [&_.recharts-cartesian-grid-vertical>line:last-child]:opacity-0 [&_.recharts-cartesian-grid-vertical>line:nth-last-child(2)]:opacity-0"
                style={{
                  position: "relative",
                  cursor: "default",
                  width: "100%",
                  height: "100%",
                  maxHeight: 192,
                  maxWidth: 919,
                }}
              >
                <svg
                  className="recharts-surface"
                  width={919}
                  height={192}
                  viewBox="0 0 919 192"
                  style={{ width: "100%", height: "100%" }}
                >
                  <title />
                  <desc />
                  <defs>
                    <clipPath id="recharts60-clip">
                      <rect x={0} y={6} height={150} width={859} />
                    </clipPath>
                  </defs>
                  <g className="recharts-cartesian-grid">
                    <g className="recharts-cartesian-grid-horizontal">
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={0}
                        y1={156}
                        x2={859}
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={0}
                        y1="118.5"
                        x2={859}
                        y2="118.5"
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={0}
                        y1={81}
                        x2={859}
                        y2={81}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={0}
                        y1="43.5"
                        x2={859}
                        y2="43.5"
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={0}
                        y1={6}
                        x2={859}
                        y2={6}
                      />
                    </g>
                    <g className="recharts-cartesian-grid-vertical">
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="50.487179487179546"
                        y1={6}
                        x2="50.487179487179546"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="152.92307692307696"
                        y1={6}
                        x2="152.92307692307696"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="255.3589743589744"
                        y1={6}
                        x2="255.3589743589744"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="357.7948717948718"
                        y1={6}
                        x2="357.7948717948718"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="460.2307692307692"
                        y1={6}
                        x2="460.2307692307692"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="562.6666666666667"
                        y1={6}
                        x2="562.6666666666667"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="644.6153846153845"
                        y1={6}
                        x2="644.6153846153845"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1="726.5641025641025"
                        y1={6}
                        x2="726.5641025641025"
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={829}
                        y1={6}
                        x2={829}
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={0}
                        y1={6}
                        x2={0}
                        y2={156}
                      />
                      <line
                        strokeDasharray="4 4"
                        className="stroke-neutral-600"
                        fill="none"
                        x={0}
                        y={6}
                        width={859}
                        height={150}
                        x1={859}
                        y1={6}
                        x2={859}
                        y2={156}
                      />
                    </g>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis [&_.recharts-cartesian-axis-tick_text]:fill-text-soft-400 [&_.recharts-cartesian-axis-tick_text]:text-label-xs">
                    <g className="recharts-cartesian-axis-ticks">
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="111.948717948718"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="111.948717948718" dy="0.71em">
                            Week 33
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="214.38461538461542"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="214.38461538461542" dy="0.71em">
                            Week 38
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="316.8205128205129"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="316.8205128205129" dy="0.71em">
                            Week 43
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="419.2564102564103"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="419.2564102564103" dy="0.71em">
                            Week 48
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="521.6923076923076"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="521.6923076923076" dy="0.71em">
                            Week 1
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="624.1282051282051"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="624.1282051282051" dy="0.71em">
                            Week 6
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x="726.5641025641025"
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x="726.5641025641025" dy="0.71em">
                            Week 11
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="bottom"
                          width={859}
                          height={30}
                          stroke="none"
                          x={829}
                          y={170}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="middle"
                          fill="#666"
                        >
                          <tspan x={829} dy="0.71em">
                            Week 16
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis [&_.recharts-cartesian-axis-tick_text]:fill-text-soft-400 [&_.recharts-cartesian-axis-tick_text]:text-label-xs">
                    <g className="recharts-cartesian-axis-ticks">
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="right"
                          width={60}
                          height={150}
                          stroke="none"
                          x={881}
                          y={156}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="start"
                          fill="#666"
                        >
                          <tspan x={881} dy="0.355em">
                            8K
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="right"
                          width={60}
                          height={150}
                          stroke="none"
                          x={881}
                          y="118.5"
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="start"
                          fill="#666"
                        >
                          <tspan x={881} dy="0.355em">
                            9K
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="right"
                          width={60}
                          height={150}
                          stroke="none"
                          x={881}
                          y={81}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="start"
                          fill="#666"
                        >
                          <tspan x={881} dy="0.355em">
                            10K
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="right"
                          width={60}
                          height={150}
                          stroke="none"
                          x={881}
                          y="43.5"
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="start"
                          fill="#666"
                        >
                          <tspan x={881} dy="0.355em">
                            11K
                          </tspan>
                        </text>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis-tick">
                        <text
                          orientation="right"
                          width={60}
                          height={150}
                          stroke="none"
                          x={881}
                          y={9}
                          className="recharts-cartesian-axis-tick-value text-xs font-medium"
                          textAnchor="start"
                          fill="#666"
                        >
                          <tspan x={881} dy="0.355em">
                            12K
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </g>
                  <g className="recharts-layer recharts-line">
                    <path
                      strokeWidth={2}
                      strokeLinejoin="round"
                      fill="none"
                      width={859}
                      height={150}
                      className="recharts-curve recharts-line-curve stroke-emerald-600"
                      d="M30,38.813L50.487,133.463L70.974,13.725L91.462,44.175L111.949,110.738L132.436,50.063L152.923,53.7L173.41,22.275L193.897,138.938L214.385,20.625L234.872,99.15L255.359,64.763L275.846,69.562L296.333,97.425L316.821,7.913L337.308,118.125L357.795,134.213L378.282,99.075L398.769,144.525L419.256,56.588L439.744,112.687L460.231,33.15L480.718,62.7L501.205,75L521.692,152.925L542.179,44.325L562.667,56.963L583.154,66.6L603.641,80.513L624.128,86.7L644.615,17.775L665.103,122.175L685.59,141.938L706.077,133.838L726.564,64.725L747.051,33.6L767.538,146.85L788.026,55.838L808.513,133.913L829,124.988"
                    />
                    <g className="recharts-layer" />
                  </g>
                </svg>
                <div
                  tabIndex={-1}
                  className="recharts-tooltip-wrapper recharts-tooltip-wrapper-left recharts-tooltip-wrapper-bottom"
                  style={{
                    visibility: "hidden",
                    pointerEvents: "none",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translate(398.769px, 144.525px)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 lg:w-96"></div>
      </div>
    </React.Fragment>
  );
}
