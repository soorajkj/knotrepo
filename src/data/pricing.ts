import { IconTypes } from "~components/core/icon";

type Pricing = {
  id: string;
  label: string;
  icon: IconTypes;
  description: string;
  prices: number[];
  recommended: boolean;
  action_label: string;
  color: string;
};

export const pricing: Pricing[] = [
  {
    id: "free",
    label: "Free",
    icon: "IndianRupee",
    description: "Perfect for freelancers and all level designers.",
    prices: [0, 0],
    recommended: false,
    action_label: "Get started",
    color: "bg-green-50",
  },
  {
    id: "personal",
    label: "Personal",
    icon: "UserRound",
    description: "Ideal for small teams and growing companies.",
    prices: [4, 12],
    recommended: false,
    action_label: "Upgrade now",
    color: "bg-yellow-50",
  },
  {
    id: "team",
    label: "Team",
    icon: "Users",
    description: "Ideal for small teams and growing companies.",
    prices: [12, 24],
    recommended: true,
    action_label: "Upgrade now",
    color: "bg-sky-50",
  },
];
