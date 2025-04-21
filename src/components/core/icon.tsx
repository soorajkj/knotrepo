"use client";

import * as React from "react";
import * as AccessibleIconPrimitive from "@radix-ui/react-accessible-icon";
import { icons as lucideIcons, type LucideProps } from "lucide-react";
import discord from "~public/icons/media/discord.svg";
import dribble from "~public/icons/media/dribble.svg";
import facebook from "~public/icons/media/facebook.svg";
import github from "~public/icons/media/github.svg";
import google from "~public/icons/media/google.svg";
import instagram from "~public/icons/media/instagram.svg";
import linkedin from "~public/icons/media/linkedin.svg";
import spotify from "~public/icons/media/spotify.svg";
import telegram from "~public/icons/media/telegram.svg";
import tinder from "~public/icons/media/tinder.svg";
import twitch from "~public/icons/media/twitch.svg";
import twitter from "~public/icons/media/twitter.svg";
import youtube from "~public/icons/media/youtube.svg";

export const mediaIcons = {
  MDDribble: dribble,
  MDTelegram: telegram,
  MDTinder: tinder,
  MDTwitch: twitch,
  MDTWitter: twitter,
  MDLinkedIn: linkedin,
  MDGitHub: github,
  MDYouTube: youtube,
  MDInstagram: instagram,
  MDFacebook: facebook,
  MDDiscord: discord,
  MDGoogle: google,
  MDSpotify: spotify,
};

export const icons = {
  ...lucideIcons,
  ...mediaIcons,
};

export type IconTypes = keyof typeof icons;

interface IconProps
  extends Omit<LucideProps, "ref">,
    Partial<AccessibleIconPrimitive.AccessibleIconProps> {
  icon: IconTypes;
  label?: string;
}

export default function Icon(props: IconProps) {
  const { icon, label, ...rest } = props;
  const LucideIcon = icons[icon];

  return label ? (
    <AccessibleIconPrimitive.Root label={icon}>
      <LucideIcon aria-hidden={true} focusable={false} {...rest} />
    </AccessibleIconPrimitive.Root>
  ) : (
    <LucideIcon aria-hidden={true} focusable={false} {...rest} />
  );
}

export type LucideIconTypes = keyof typeof lucideIcons;
export type MediaIconTypes = keyof typeof mediaIcons;
