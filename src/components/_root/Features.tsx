import * as React from "react";
import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomInIcon,
} from "lucide-react";
import Container from "@/components/core/container";

const reasons = [
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <ZoomInIcon className="size-6" />,
  },
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BarChartHorizontal className="size-6" />,
  },
  {
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <CircleHelp className="size-6" />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <WandSparkles className="size-6" />,
  },
  {
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <Layers className="size-6" />,
  },
  {
    title: "Efficiency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BatteryCharging className="size-6" />,
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 text-4xl font-semibold text-gray-900">
              Building features that your users don&apos;t want costs you time
            </h2>
            <p className="text-lg">
              Loremipsum helps you save time & money by creating a product
              roadmap based on customer feedback and prioritizing features that
              will have maximum impact and value for your customers.
            </p>
          </div>
          <div className="mx-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={i} className="flex flex-col">
                <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-center text-xl font-semibold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-center">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
