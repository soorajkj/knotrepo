"use client";

import * as React from "react";
import tweets from "@/data/tweets.json";
import _ from "lodash";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@/components/core/container";
import MasonryGrid from "@/components/pattern/MasonryGrid";
import Testimonial from "@/components/root/Testimonial";
import "swiper/css";

export default function Testimonials() {
  return (
    <section>
      <Container>
        <div className="py-12 sm:py-24">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
              Don&apos;t just take our word for it
            </h2>
            <p className="text-base font-medium text-foreground-light">
              Discover what our community has to say about their Supabase
              experience.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={16}
              loop={true}
              speed={30000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiper.wrapperEl.style.transitionTimingFunction = "linear";
              }}
            >
              {_.chunk(tweets, 8).map((group, i) => (
                <SwiperSlide key={i}>
                  <MasonryGrid breakpoints={{ 350: 2, 750: 3, 1200: 4 }}>
                    {group.map((tweet) => (
                      <Testimonial
                        key={tweet.url}
                        url={tweet.url}
                        handle={`@${tweet.handle}`}
                        quote={tweet.text}
                        img_url={tweet.img_url}
                      />
                    ))}
                  </MasonryGrid>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
