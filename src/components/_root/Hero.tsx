import Button from "@/components/core/button";
import Container from "@/components/core/container";
import Icon from "@/components/core/icon";
import Typography from "@/components/core/typography";

export default function Hero() {
  return (
    <section className="relative overflow-y-clip py-24 sm:py-32">
      <Container>
        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <Typography.Title
            variant="1/semibold"
            className="mb-8 text-foreground"
          >
            <span className="block bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent">
              All your profiles
            </span>
            <span className="bg-gradient-to-b from-emerald-600 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              In one single place
            </span>
          </Typography.Title>
          <Typography.Text
            variant="md/normal"
            className="max-w-lg md:max-w-2xl"
          >
            Effortlessly combine your social media profiles, website, and
            content into a single, easy-to-share link. Simplify your online
            presence and connect with your audience seamlessly, all from one
            unified platform.
          </Typography.Text>
          <div className="mt-4 flex items-center gap-2 lg:mt-8">
            <Button variant="primary">Create your page</Button>
            <Button>
              <span>Explore all plans</span>
              <Icon icon="Gem" className="size-4 text-foreground-lighter" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
