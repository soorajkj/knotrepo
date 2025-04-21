import React from "react";
import Icon, { MediaIconTypes } from "~components/core/icon";

export const mediaLinks: {
  label: string;
  url: string;
  icon: MediaIconTypes;
}[] = [
  { label: "Instagram", url: "https://instagram.com", icon: "MDInstagram" },
  { label: "Spotify", url: "https://spotify.com", icon: "MDSpotify" },
  { label: "Telegram", url: "https://t.me", icon: "MDTelegram" },
  { label: "Tinder", url: "https://tinder.com", icon: "MDTinder" },
  { label: "Twitch", url: "https://twitch.tv", icon: "MDTwitch" },
  { label: "Twitter", url: "https://twitter.com", icon: "MDTWitter" },
  { label: "GitHub", url: "https://github.com", icon: "MDGitHub" },
];

export default function Socials() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2.5">
      {mediaLinks.map((_, i) => (
        <li
          key={i}
          className="relative flex cursor-pointer items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/80 p-1 px-2"
        >
          <div className="flex items-center justify-center gap-1 text-clip rounded-md">
            <Icon icon={_.icon} className="size-5" />
            <p className="text-base text-neutral-50">{"@btlpod"}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
