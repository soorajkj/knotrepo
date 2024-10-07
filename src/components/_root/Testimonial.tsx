import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/core/icon";

interface TestimonialProps {
  url: string;
  handle: string;
  quote: string | React.ReactNode;
  img_url: string;
  className?: string;
}

export default function Testimonial(props: TestimonialProps) {
  return (
    <Link
      target="_blank"
      className="group/tweet-card z-0 col-span-3 block break-inside-avoid-column"
      href={props.url}
    >
      <div className="rounded-2xl border bg-surface-75 p-6 drop-shadow-sm transition-colors group-hover/tweet-card:border-foreground-muted">
        <div className="relative">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-control">
              <Image src={props.img_url} alt="" width={40} height={40} />
            </div>
            <p className="text-sm font-medium text-foreground">
              {props.handle}
            </p>
            <div className="absolute -left-1 -top-2 flex size-6 items-center justify-center rounded-full">
              <Icon icon="CITwitter" className="size-6" />
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm font-medium text-foreground-lighter">
          {props.quote}
        </p>
      </div>
    </Link>
  );
}
