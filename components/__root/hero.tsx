import Link from "next/link";
import Button from "@/components/core/button";
import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-y-clip py-12 sm:py-32">
      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="z-1 relative mb-8 flex">
            <Link
              href=""
              className="relative inline-flex items-center justify-center space-x-2 overflow-clip rounded-full border border-zinc-800 bg-zinc-900 p-0.5 pr-2 text-sm font-medium"
            >
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2 py-0.5">
                V 0.0.1
              </span>
              <p>We&apos;ve just released the latest version</p>
            </Link>
          </div>
          <h1 className="mb-8 block max-w-max text-3xl text-white sm:text-5xl lg:text-6xl">
            Simplifies the process for creators to share multiple parts of
            themselves in one place
          </h1>
          <p className="mb-8 max-w-md text-base text-zinc-400/80 md:max-w-2xl">
            Trusted by millions of developers to build, test and share APIs.
          </p>
          <div className="mx-auto max-w-xs space-y-4 sm:inline-flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button
              variant="outline"
              className="rounded-full bg-gradient-to-r from-zinc-950 via-zinc-950 to-white/5 backdrop-blur-md"
              asChild
            >
              <Link href="/signin">Log in to your account &gt;</Link>
            </Button>
            <Button
              variant="secondary"
              className="rounded-full font-normal"
              asChild
            >
              <Link href="/signup">Don&apos;t have an account ?</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
