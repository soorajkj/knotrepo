"use client";

import React from "react";
import { faqs } from "~data/faqs";
import Accordion from "~components/core/accordion";
import Container from "~components/core/container";

export default function Faqs() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="relative py-24">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <h2 className="p-12 text-2xl font-medium text-neutral-200">
                Frequently asked questions.
              </h2>
            </div>
            <div className="col-span-8 col-start-5">
              <Accordion.AccordionRoot type="single" collapsible>
                {faqs.map((_, i) => (
                  <Accordion.AccordionItem key={i} value={i.toString()}>
                    <Accordion.AccordionTrigger>
                      {_.question}
                    </Accordion.AccordionTrigger>
                    <Accordion.AccordionContent>
                      {_.answer}
                    </Accordion.AccordionContent>
                  </Accordion.AccordionItem>
                ))}
              </Accordion.AccordionRoot>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
