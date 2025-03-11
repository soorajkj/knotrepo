import Image from "next/image";
import Button from "~components/core/button";
import Icon, { mediaIcons } from "~components/core/icon";

interface Media {
  name: string;
  icon: keyof typeof mediaIcons;
}

const medias: Media[] = [
  { name: "Dribble", icon: "MDDribble" },
  { name: "Telegram", icon: "MDTelegram" },
  { name: "Tinder", icon: "MDTinder" },
  { name: "Twitch", icon: "MDTwitch" },
  { name: "Twitter", icon: "MDTWitter" },
  { name: "LinkedIn", icon: "MDLinkedIn" },
  { name: "GitHub", icon: "MDGitHub" },
  { name: "YouTube", icon: "MDYouTube" },
  { name: "Instagram", icon: "MDInstagram" },
  { name: "Facebook", icon: "MDFacebook" },
  { name: "Discord", icon: "MDDiscord" },
];

export default function Page() {
  return (
    <div className="mx-auto flex h-full w-full max-w-lg flex-col items-center gap-6 overflow-hidden px-0 py-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center">
          <div className="size-16 overflow-hidden rounded-full">
            <Image
              src="https://picsum.photos/200/200?random=2"
              alt=""
              width={96}
              height={96}
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
              <Button size="sm">
                <Icon icon="Globe" className="size-4" />
                <span>lbayo.com</span>
              </Button>
              <Button size="sm">
                <Icon icon="Globe" className="size-4" />
                <span>555-123-4567</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-2">
          <Button size="lg" className="p-2.5">
            <Icon icon="Share2" className="size-4" />
          </Button>
          <Button size="lg" className="w-full">
            hey@lbayo.com
          </Button>
          <Button size="lg" className="p-2.5">
            <Icon icon="Bell" className="size-4" />
          </Button>
        </div>
        <SocialMediaList />
        <ul className="grid w-full grid-cols-1 gap-2">
          {[...Array(10)].map((_, i) => (
            <li key={i} className="cursor-pointer rounded-lg bg-neutral-900">
              <div className="flex h-16 items-center gap-2 p-4">
                <div className="flex size-10 items-center justify-center">
                  <svg
                    viewBox="0 -4 48 48"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                    width={24}
                    height={24}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>Twitter-color</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Icons"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        {" "}
                        <g
                          id="Color-"
                          transform="translate(-300.000000, -164.000000)"
                          fill="#00AAEC"
                        >
                          {" "}
                          <path
                            d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                            id="Twitter"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <div className="flex-1 text-base text-neutral-100">
                  Latest Spotify Playlist
                </div>
                <div className="flex size-10 items-center justify-center">
                  <Icon
                    icon="SquareArrowOutUpRight"
                    className="size-4"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SocialMediaList() {
  return (
    <ul className="flex max-w-lg items-center gap-0.5 overflow-x-auto">
      {medias.map((_, i) => (
        <li
          key={i}
          className="flex cursor-pointer flex-col items-center justify-center gap-1"
        >
          <Button className="">
            <Icon icon={_.icon} className="size-6" />
            <span className="text-sm text-neutral-400">{_.name}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
}
