export interface TokenMetrics {
  price: string;
  marketCap: string;
  holders: string;
  volume24h: string;
  liquidity: string;
  fdv: string;
}

export const mockTokenData: TokenMetrics = {
  price: "$0.000000",
  marketCap: "Loading...",
  holders: "Loading...",
  volume24h: "Loading...",
  liquidity: "Loading...",
  fdv: "Loading..."
};

export async function fetchTokenMetrics(): Promise<TokenMetrics> {
  try {
    return mockTokenData;
  } catch (error) {
    console.error('Error fetching token metrics:', error);
    return mockTokenData;
  }
}

export const socialMetrics = {
  tiktok: {
    followers: "500K+",
    videoViews: "10M+",
    engagementRate: "12%"
  },
  twitter: {
    followers: "25K+",
    impressions: "1M+",
    engagement: "8%"
  },
  telegram: {
    members: "15K+",
    activeDaily: "5K+"
  }
};

export const brandTraction = {
  reviews: [
    {
      platform: "TikTok Shop",
      rating: 4.8,
      count: "2,500+"
    },
    {
      platform: "Amazon",
      rating: 4.7,
      count: "1,200+"
    }
  ],
  monthlyCustomers: "10K+",
  repeatRate: "35%"
};

export const technicalTrustIndicators = [
  {
    item: "Mint Authority Revoked",
    status: "verified",
    proof: "UPDATE_WITH_PROOF_LINK",
    tooltip: "Prevents creation of additional tokens, ensuring fixed supply"
  },
  {
    item: "Freeze Authority Revoked",
    status: "verified",
    proof: "UPDATE_WITH_PROOF_LINK",
    tooltip: "Ensures no wallet can be frozen, guaranteeing token freedom"
  },
  {
    item: "Plain SPL Token",
    status: "verified",
    proof: "UPDATE_WITH_EXPLORER_LINK",
    tooltip: "No hidden logic or special permissions - standard SPL token implementation"
  },
  {
    item: "100% LP Burned",
    status: "verified",
    proof: "UPDATE_WITH_PROOF_LINK",
    tooltip: "Liquidity permanently locked through burn mechanism"
  },
  {
    item: "Public Treasury Wallets",
    status: "verified",
    proof: "/transparency",
    tooltip: "All team and ecosystem wallets publicly disclosed"
  },
  {
    item: "Multi-Signature Controls",
    status: "verified",
    proof: "/transparency",
    tooltip: "Treasury operations require multiple approvals for security"
  },
  {
    item: "Allocation Disclosure",
    status: "verified",
    proof: "/transparency",
    tooltip: "Complete transparency on token distribution"
  },
  {
    item: "Certik Audit",
    status: "planned",
    proof: "/transparency",
    tooltip: "Third-party security audit targeted for additional verification"
  }
];

export const securityChecklist = technicalTrustIndicators;
