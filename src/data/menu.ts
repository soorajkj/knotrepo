import { Node } from "@/types/menu";

export const menu: Node[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "MoveUpRight",
    nodes: [
      { key: "analytics", label: "Analytics", href: "/analytics" },
      { key: "links", label: "Links" },
      { key: "platforms", label: "Platforms", href: "/platforms" },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    nodes: [
      { key: "profile", label: "My Profile" },
      { key: "preferences", label: "Account Preferences" },
      { key: "billing", label: "Billing" },
      { key: "integrations", label: "Integrations" },
    ],
  },
  {
    key: "documentation",
    label: "Documentation",
    nodes: [
      { key: "guides", label: "Guides", icon: "MoveUpRight" },
      { key: "apireference", label: "API Reference", icon: "MoveUpRight" },
    ],
  },
];
