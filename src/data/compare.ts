export type PricingPlanName = "Free" | "Personal" | "Team" | "Enterprise";

export interface PricingPlan {
  name: PricingPlanName;
  description: string;
  price: {
    monthly: number | "Free";
    yearly: number | "Free";
  };
  action: string;
  recomended: boolean;
}

export interface PricingFeature {
  category: string;
  features: {
    name: string;
    values: Record<PricingPlanName, string | boolean>;
  }[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Get started with essential features for free.",
    price: {
      monthly: 0,
      yearly: 0,
    },
    action: "Get for Free",
    recomended: false,
  },
  {
    name: "Personal",
    description: "Best for individuals managing their links.",
    price: {
      monthly: 5,
      yearly: 50,
    },
    action: "Get Started",
    recomended: false,
  },
  {
    name: "Team",
    description: "Collaboration features for small teams.",
    price: {
      monthly: 12,
      yearly: 120,
    },
    action: "Get Started",
    recomended: true,
  },
];

export const pricingFeatures: PricingFeature[] = [
  {
    category: "Basic Features",
    features: [
      {
        name: "Custom Links",
        values: {
          Free: "5",
          Personal: "10",
          Team: "Unlimited",
          Enterprise: "Unlimited",
        },
      },
      {
        name: "Link Analytics",
        values: { Free: false, Personal: true, Team: true, Enterprise: true },
      },
      {
        name: "Custom Themes",
        values: { Free: false, Personal: true, Team: true, Enterprise: true },
      },
      {
        name: "Scheduled Posts",
        values: { Free: false, Personal: true, Team: true, Enterprise: true },
      },
      {
        name: "QR Code Generator",
        values: { Free: true, Personal: true, Team: true, Enterprise: true },
      },
    ],
  },
  {
    category: "Advanced Features",
    features: [
      {
        name: "Team Collaboration",
        values: { Free: false, Personal: false, Team: true, Enterprise: true },
      },
      {
        name: "Custom Domain",
        values: { Free: false, Personal: false, Team: true, Enterprise: true },
      },
      {
        name: "White-label Branding",
        values: { Free: false, Personal: false, Team: false, Enterprise: true },
      },
    ],
  },
  {
    category: "Security & Compliance",
    features: [
      {
        name: "Two-Factor Authentication",
        values: { Free: true, Personal: true, Team: true, Enterprise: true },
      },
      {
        name: "SSO (Single Sign-On)",
        values: { Free: false, Personal: false, Team: false, Enterprise: true },
      },
      {
        name: "Data Encryption",
        values: { Free: true, Personal: true, Team: true, Enterprise: true },
      },
      {
        name: "GDPR Compliance",
        values: { Free: false, Personal: true, Team: true, Enterprise: true },
      },
    ],
  },
  {
    category: "Support & Assistance",
    features: [
      {
        name: "Email Support",
        values: {
          Free: "Limited",
          Personal: "Standard",
          Team: "Priority",
          Enterprise: "24/7",
        },
      },
      {
        name: "Live Chat Support",
        values: { Free: false, Personal: false, Team: true, Enterprise: true },
      },
      {
        name: "Dedicated Account Manager",
        values: { Free: false, Personal: false, Team: false, Enterprise: true },
      },
      {
        name: "Custom Onboarding",
        values: { Free: false, Personal: false, Team: false, Enterprise: true },
      },
    ],
  },
];
