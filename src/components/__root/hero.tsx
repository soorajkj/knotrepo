import Link from "next/link";
import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section className="relative overflow-y-clip bg-zinc-100 py-12 sm:py-32">
      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="z-1 relative mb-8 flex">
            <Link
              href=""
              className="relative inline-flex items-center justify-center space-x-2 overflow-clip rounded-full border-2 border-zinc-200/60 bg-white pr-2 text-sm font-medium"
            >
              <span className="rounded-full border border-zinc-200 px-2 py-0.5">
                V 0.0.1
              </span>
              <p>We&apos;ve just released the latest version</p>
            </Link>
          </div>
          <h1 className="mb-8 block max-w-max font-family-suezone text-4xl font-normal text-zinc-800 sm:text-5xl lg:text-6xl">
            Link All Your Profiles and Content in One Single Place
          </h1>
          <p className="mb-8 max-w-md text-lg font-medium md:max-w-2xl">
            Effortlessly combine your social media profiles, website, and
            content into a single, easy-to-share link. Simplify your online
            presence and connect with your audience seamlessly, all from one
            unified platform.
          </p>
        </div>
      </Container>
    </section>
  );
}
