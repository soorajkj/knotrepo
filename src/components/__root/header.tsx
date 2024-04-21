import Image from "next/image";
import Link from "next/link";
import Container from "@/src/components/core/container";

const routes = [
  { url: "/", label: "Download", status: false },
  { url: "/", label: "Pricing", status: false },
  { url: "/", label: "Blog", status: false },
  { url: "/", label: "Changelog", status: false },
  { url: "/", label: "Docs", status: false },
];

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 bg-white/60 backdrop-blur-md dark:bg-zinc-950/60">
      <Container className="relative after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-px after:bg-gradient-to-r after:from-transparent after:via-zinc-500/20">
        <div className="flex flex-grow py-4">
          <div className="flex flex-1 flex-shrink-0 flex-nowrap items-center justify-start">
            <Link
              href="/"
              aria-label="Hoppscotch"
              className="inline-flex cursor-pointer select-none items-center justify-center text-white outline-none"
            >
              <Image
                src="/images/linkgram.svg"
                loading="lazy"
                alt="Hoppscotch"
                height={32}
                width={32}
              ></Image>
              <span className="ml-2 text-lg font-semibold sm:hidden lg:flex">
                Hoppscotch
              </span>
            </Link>
          </div>
          <nav className="hidden flex-shrink-0 flex-nowrap items-center justify-start rounded-full md:flex">
            <ul className="group/nav relative flex items-center">
              {routes.map((route, index) => {
                return (
                  <li key={index} className="inline-flex">
                    <a
                      href={route.url}
                      className="relative z-10 flex flex-shrink-0 rounded-full border border-transparent px-4 py-2 text-sm text-zinc-400 transition hover:text-zinc-100/80"
                    >
                      {route.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex flex-1 items-center justify-end md:hidden">
            <div className="flex rounded-full border border-zinc-500/20 bg-white/10 backdrop-blur-md">
              <button className="flex items-center justify-center rounded-full px-3 py-1 text-sm text-zinc-200 transition hover:text-zinc-50">
                Menu
                <svg
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  className="ml-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 12h16M4 6h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
