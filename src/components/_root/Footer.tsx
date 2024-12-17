import Link from "next/link";
import Button from "../core/button";
import Input from "../core/input";
import Logo from "@/public/images/linkgram.svg";
import Container from "@/components/core/container";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-4 justify-between gap-10 py-8 lg:grid-cols-6 lg:text-left">
          <div className="col-span-4 flex w-full flex-col justify-between gap-6 lg:col-span-2">
            <div>
              <span className="flex items-center gap-4">
                <Link
                  href="/"
                  aria-label="Supabase"
                  className="inline-flex cursor-pointer select-none items-center justify-center gap-2 text-slate-900 outline-none dark:text-white"
                >
                  <Logo />
                </Link>
              </span>
              <p className="mt-6 max-w-sm text-sm">
                A collection of 100+ responsive HTML templates for your startup
                business or side project.
              </p>
            </div>
            <ul className="flex items-center space-x-6">
              <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a>
              </li>
              <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </a>
              </li>
              <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a>
              </li>
              <li className="hover:text-muted-foreground font-medium duration-200 hover:scale-110">
                <a href="#">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    className="size-6"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-5 font-medium text-slate-900 dark:text-slate-100">
              Product
            </h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="hover:text-primary">
                <a href="#">Overview</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Pricing</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Marketplace</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Integrations</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-5 font-medium text-slate-900 dark:text-slate-100">
              Company
            </h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="hover:text-primary">
                <a href="#">About</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Team</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Blog</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Careers</a>
              </li>
              <li className="hover:text-primary">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-2">
            <h3 className="mb-5 font-medium text-slate-900 dark:text-slate-100">
              Newsletter
            </h3>
            <div className="grid gap-1.5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Subscribe to our newsletter
              </label>
              <div className="flex w-full items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit" size="md">
                  Subscribe
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mt-1 text-xs font-medium">
              By submitting, you agree to our
              <a href="#" className="ml-1 text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-slate-200 py-4 text-sm font-medium dark:border-slate-700 lg:flex-row lg:items-center lg:text-left">
          <p>Shadcnblocks © All rights reserved.</p>
          <p>Made with ❤️ by Shacnblocks</p>
        </div>
      </Container>
    </footer>
  );
}
