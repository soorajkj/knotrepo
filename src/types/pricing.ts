export const planTypes = ["free", "pro", "enterprise"] as const;

export type PlanType = (typeof planTypes)[number];

export type PlanValue = boolean | string | number | string[];

export type Plans = {
  [_key in PlanType]: PlanValue;
};

export type Plan = {
  id: PlanType;
  title: string;
  description: string;
  price: string;
  recommended: boolean;
};

export type PricingCategory = {
  category: string;
  icon: string;
  features: PricingFeature[];
};

export const featureKeys = {
  core: ["core.linkLimit", "core.pageViews", "core.customDomain"],
  customization: [
    "customization.themes",
    "customization.fonts",
    "customization.brandingRemoval",
  ],
  analytics: [
    "analytics.basicStats",
    "analytics.advancedStats",
    "analytics.audienceExport",
  ],
  integrations: [
    "integrations.socialMedia",
    "integrations.webhooks",
    "integrations.thirdParty",
  ],
} as const;

export type FeatureKey = (typeof featureKeys)[keyof typeof featureKeys][number];

export type PricingFeature = {
  title: string;
  key: FeatureKey;
  description: string;
  plans: Plans;
};

export type Pricing = {
  core: PricingCategory;
  customization: PricingCategory;
  analytics: PricingCategory;
  integrations: PricingCategory;
};
