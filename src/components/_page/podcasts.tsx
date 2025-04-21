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
  { label: "YouTube", url: "https://youtube.com", icon: "MDYouTube" },
  { label: "Dribbble", url: "https://dribbble.com", icon: "MDDribble" },
  { label: "Facebook", url: "https://facebook.com", icon: "MDFacebook" },
  { label: "Discord", url: "https://discord.com", icon: "MDDiscord" },
  { label: "LinkedIn", url: "https://discord.com", icon: "MDLinkedIn" },
];

export default function Podcasts() {
  return (
    <React.Fragment>
      <ul className="grid w-full grid-cols-2 gap-3 opacity-100">
        {mediaLinks.slice(0, 4).map((_, i) => (
          <li key={i} className="relative w-full">
            <div className="flex rounded-xl bg-neutral-800/40 p-3">
              <div className="flex size-10 items-center justify-center text-clip">
                <Icon icon={_.icon} className="size-5" />
              </div>
              <div className="flex items-center gap-1">
                <p className="text-base text-neutral-50">{_.label}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ul className="grid w-full grid-cols-1 gap-3 opacity-100">
        {mediaLinks.map((_, i) => (
          <li key={i} className="relative w-full">
            <div className="flex rounded-xl bg-neutral-800/40 p-3">
              <div className="flex size-10 items-center justify-center text-clip">
                <Icon icon={_.icon} className="size-5" />
              </div>
              <div className="flex flex-1 items-center justify-center gap-1 text-center">
                <p className="text-base text-neutral-50">{_.label}</p>
              </div>
              <div className="flex size-10 items-center justify-center text-clip">
                <Icon icon="ChevronDown" className="size-4" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
