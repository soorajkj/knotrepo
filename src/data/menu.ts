import { Node } from "@/types/menu";

export const menu: Node[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    nodes: [
      { key: "analytics", label: "Analytics", href: "/dashboard/analytics" },
      { key: "profile", label: "Profile", href: "/dashboard/profile" },
      { key: "links", label: "Links", href: "/dashboard/links" },
      { key: "platforms", label: "Platforms", href: "/dashboard/platforms" },
      { key: "themes", label: "Themes", href: "/dashboard/themes" },
    ],
  },
  {
    key: "settings",
    label: "Settings",
    nodes: [
      { key: "account", label: "Account", href: "/dashboard/settings/account" },
      { key: "billing", label: "Billing", href: "/dashboard/settings/billing" },
      {
        key: "preferences",
        label: "Preferences",
        href: "/dashboard/settings/preferences",
      },
    ],
  },
];
