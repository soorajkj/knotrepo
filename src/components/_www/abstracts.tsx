import React from "react";
import Container from "~components/core/container";

export default function Abstracts() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden">
      <Container className="grid size-full grid-cols-4 mix-blend-lighten">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-full w-px bg-neutral-800"
            style={{ gridColumn: index + 1 }}
          />
        ))}
      </Container>
    </div>
  );
}
