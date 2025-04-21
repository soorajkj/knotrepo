import Image from "next/image";
import Button from "~components/core/button";
import Icon from "~components/core/icon";
import Header from "~components/_page/header";
import Podcasts from "~components/_page/podcasts";
import Socials from "~components/_page/socials";

export default function Page() {
  return (
    <div className="relative flex flex-col">
      <div
        className="relative size-full min-h-64 bg-neutral-900 bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-neutral-900/80"
        style={{ backgroundImage: "url('/images/buildings.jpg')" }}
      ></div>
      <div className="mx-auto grid max-w-lg -translate-y-8 gap-6 px-4">
        <div className="relative mx-auto flex flex-col gap-6 overflow-hidden">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex items-center justify-center text-clip rounded-full bg-gradient-to-tr from-yellow-300 to-fuchsia-800 p-0.5">
              <div className="block size-16 overflow-hidden rounded-full bg-neutral-900 p-1 transition">
                <Image
                  src="https://picsum.photos/200/200?random=2"
                  alt=""
                  width={96}
                  height={96}
                  className="overflow-hidden rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-3">
                <h3 className="flex items-center gap-1 text-2xl font-semibold text-neutral-100">
                  <span>Lincoln Bayo</span>
                  <Icon
                    icon="BadgeCheck"
                    width={24}
                    height={24}
                    className="fill-blue-500 text-black"
                  />
                </h3>
                <div className="flex items-center gap-1">
                  <Icon icon="Map" className="size-4" />
                  <span>Bayo Est. 1999 Auckland, NZ</span>
                </div>
                <p className="text-base">
                  Lincoln Bayo is an avid skateboarder, software designer and
                  content creator based in New Zealand.
                </p>
                <div className="flex items-center gap-0.5">
                  <Button variant="ghost">
                    <Icon icon="Globe" className="size-4" />
                    <span>lbayo.com</span>
                  </Button>
                  <Button variant="ghost">
                    <Icon icon="Globe" className="size-4" />
                    <span>555-123-4567</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <Socials />
        <Podcasts />
      </div>
    </div>
  );
}
