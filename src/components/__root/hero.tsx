import Container from "@/components/core/container";

export default function Hero() {
  return (
    <section className="relative overflow-y-clip py-24 sm:py-32">
      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="z-1 relative mb-8 flex"></div>
          <h1 className="mb-8 text-4xl font-semibold sm:text-5xl lg:text-7xl">
            <span className="block text-white">All your profiles</span>
            <span className="text-emerald-500">In one single place</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg font-medium md:max-w-2xl">
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
