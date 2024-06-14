import Container from "@/components/core/container";

export default function Footer() {
  return (
    <footer>
      <Container className="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-zinc-500/20">
        <div className="flex h-24 items-center justify-end py-4"></div>
      </Container>
    </footer>
  );
}
