import { Plan, Pricing } from "~types/pricing";

export const plans: Plan[] = [
  {
    id: "free",
    title: "Free",
    description: "Get started with core features.",
    price: "$0/mo",
    recommended: false,
  },
  {
    id: "pro",
    title: "Pro",
    description: "Advanced features for growing teams.",
    price: "$19/mo",
    recommended: true,
  },
  {
    id: "enterprise",
    title: "Enterprise",
    description: "Custom solutions for large-scale use.",
    price: "Custom",
    recommended: false,
  },
];

export const pricing: Pricing = {
  core: {
    category: "Core",
    icon: "📎",
    features: [
      {
        title: "Link Limit",
        key: "core.linkLimit",
        description: "Maximum number of active links allowed per profile",
        plans: {
          free: 5,
          pro: 50,
          enterprise: "Unlimited",
        },
      },
      {
        title: "Monthly Page Views",
        key: "core.pageViews",
        description: "Trackable views per month",
        plans: {
          free: 1000,
          pro: 10000,
          enterprise: "Unlimited",
        },
      },
      {
        title: "Custom Domain",
        key: "core.customDomain",
        description: "Connect your own domain for professional branding",
        plans: {
          free: false,
          pro: true,
          enterprise: true,
        },
      },
    ],
  },
  customization: {
    category: "Customization",
    icon: "🎨",
    features: [
      {
        title: "Themes & Styles",
        key: "customization.themes",
        description: "Pre-built themes to style your link-in-bio page",
        plans: {
          free: ["Light", "Dark"],
          pro: ["Light", "Dark", "Gradient", "Custom Colors"],
          enterprise: "Fully Customizable",
        },
      },
      {
        title: "Font Options",
        key: "customization.fonts",
        description: "Choose from a library of fonts",
        plans: {
          free: 1,
          pro: 10,
          enterprise: "Unlimited",
        },
      },
      {
        title: "Remove Branding",
        key: "customization.brandingRemoval",
        description: "Remove 'Powered by' branding",
        plans: {
          free: false,
          pro: true,
          enterprise: true,
        },
      },
    ],
  },
  analytics: {
    category: "Analytics",
    icon: "📊",
    features: [
      {
        title: "Basic Stats",
        key: "analytics.basicStats",
        description: "See link clicks and traffic sources",
        plans: {
          free: true,
          pro: true,
          enterprise: true,
        },
      },
      {
        title: "Advanced Insights",
        key: "analytics.advancedStats",
        description: "Heatmaps, top referrers, time-based trends",
        plans: {
          free: false,
          pro: true,
          enterprise: true,
        },
      },
      {
        title: "Audience Export",
        key: "analytics.audienceExport",
        description: "Export visitor data as CSV",
        plans: {
          free: false,
          pro: false,
          enterprise: true,
        },
      },
    ],
  },
  integrations: {
    category: "Integrations",
    icon: "🔌",
    features: [
      {
        title: "Social Media",
        key: "integrations.socialMedia",
        description: "Connect Instagram, Twitter, YouTube, etc.",
        plans: {
          free: true,
          pro: true,
          enterprise: true,
        },
      },
      {
        title: "Webhooks",
        key: "integrations.webhooks",
        description: "Send data to your backend",
        plans: {
          free: false,
          pro: false,
          enterprise: true,
        },
      },
      {
        title: "3rd Party Integrations",
        key: "integrations.thirdParty",
        description: "Zapier, Google Analytics, Meta Pixel, etc.",
        plans: {
          free: false,
          pro: true,
          enterprise: true,
        },
      },
    ],
  },
};
