export const plans = [
  {
    price: "400",
    frequency: "3 months",
    name: "Basic",
    description:
      "Perfect for small businesses looking to streamline their online reputation management.",
    // "description": "Get started with our Basic plan and enjoy AI-powered review replies on a monthly basis. Perfect for small businesses looking to streamline their online reputation management.",
    services: [
      "AI-powered review replies (3 months)",
      "Basic sentiment analysis",
      "Customizable response templates",
      "Customer support",
    ],
    popular: false,
  },
  {
    price: "800",
    frequency: "6 months",
    name: "Premium",
    description:
      "Ideal for growing businesses seeking consistent engagement and reputation management.",
    // "description": "Upgrade to our Standard plan for six months of AI-powered review replies. Ideal for growing businesses seeking consistent engagement and reputation management.",
    services: [
      "AI-powered review replies (6 months)",
      "Advanced sentiment analysis",
      "Priority support",
      "Integration with social media platforms",
    ],
    popular: true,
  },
  {
    price: "1200",
    frequency: "year",
    name: "Professional",
    description:
      "Tailored for established businesses committed to maintaining a strong online presence.",
    // "description": "Unlock maximum value with our Premium plan, offering AI review replies for a full year. Tailored for established businesses committed to maintaining a strong online presence.",
    services: [
      "AI-powered review replies (annual)",
      "Comprehensive sentiment analysis",
      "Dedicated account manager",
      "Integration with CRM systems",
    ],
    popular: false,
  },
];

export const plansV2 = [
  {
    price: "50",
    frequency: "month",
    name: "Basic",
    description:
      "Perfect for small businesses looking to streamline their online reputation management.",
    // "description": "Get started with our Basic plan and enjoy AI-powered review replies on a monthly basis. Perfect for small businesses looking to streamline their online reputation management.",
    services: [true, true, false, false, true, false, false],
    popular: false,
  },
  {
    price: "270",
    frequency: "6 months",
    name: "Standard",
    description:
      "Upgrade to our Standard plan for six months of AI-powered review replies. Ideal for growing businesses seeking consistent engagement and reputation management.",
    services: [true, true, true, false, true, true, true],
    popular: true,
  },
  {
    price: "500",
    frequency: "year",
    name: "Premium",
    description:
      "Unlock maximum value with our Premium plan, offering AI review replies for a full year. Tailored for established businesses committed to maintaining a strong online presence.",
    services: [true, true, true, true, true, true],
    popular: false,
  },
];
