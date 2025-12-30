export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  category: string;
  title: string;
  description: string;
  result: string;
  tags: string[];
  image: string;
  color: string;
  content: string; // Markdown-like or HTML content for the detail view
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "scaleup-saas-seo",
    client: "ScaleFlow",
    category: "Web2 • SaaS",
    title: "Hyper-Scaling SaaS: 0 to 1M ARR via Semantic SEO",
    description: "How we implemented a topic cluster strategy that outranked competitors with 10x the budget, driving sustainable organic growth.",
    result: "+300% Organic Traffic",
    tags: ["SEO Strategy", "Content Marketing", "SaaS Growth"],
    image: "/images/work-saas.png",
    color: "from-blue-500 to-indigo-500",
    content: `
      <h2>The Challenge</h2>
      <p>ScaleFlow had a superior product but zero visibility. They were burning cash on LinkedIn ads with a CAC that was unsustainable. They needed a channel that compounded over time.</p>
      
      <h2>The Solution</h2>
      <p>We ignored the high-volume keywords and went for the "long-tail intent." We built:</p>
      <ul>
        <li>**Semantic Topic Clusters:** 50+ interlinked articles covering every pain point of their ICP.</li>
        <li>**Programmatic SEO Pages:** Generated 500+ landing pages for specific use cases.</li>
        <li>**High-Authority Backlinks:** secured placements in top industry publications.</li>
      </ul>
      
      <h2>The Results</h2>
      <p>The organic engine kicked in after month 3, and the growth curve went parabolic:</p>
      <ul>
        <li><strong>From 0 to $1M ARR</strong> in 14 months entirely inbound</li>
        <li><strong>+300% increase</strong> in organic traffic YoY</li>
        <li><strong>CAC reduced by 70%</strong> compared to paid channels</li>
      </ul>
    `
  },
  {
    id: "2",
    slug: "defi-protocol-launch",
    client: "Nova Fi",
    category: "Web3 • DeFi",
    title: "Vampire Attack to $50M TVL: The Nova Launch",
    description: "Executing a perfect go-to-market strategy for a decentralized exchange, utilizing incentives and community power.",
    result: "$50M TVL Locked",
    tags: ["Tokenomics", "Launch Strategy", "Community"],
    image: "/images/blog-community.png",
    color: "from-purple-500 to-pink-500",
    content: `
      <h2>The Challenge</h2>
      <p>Launching a DEX in 2025 is hard. Liquidity is sticky. Nova Fi needed to attract millions in capital from day one to ensure trade execution and low slippage.</p>
      
      <h2>The Solution</h2>
      <p>We designed a "Vampire Attack" campaign targeting incumbent protocols, but with a twist—we rewarded long-term alignment.</p>
      <ul>
        <li>**Points Program:** Gamified liquidity provision with multiplier for duration.</li>
        <li>**KOL Campaign:** Onboarded 50 key voices in DeFi to educate, not just shill.</li>
        <li>**Cross-Chain Bridge:** Seamless onboarding from L2s.</li>
      </ul>
      
      <h2>The Results</h2>
      <p>Liquidity flooded in, but more importantly, it stayed:</p>
      <ul>
        <li><strong>$50M TVL</strong> achieved in the first week</li>
        <li><strong>15,000+</strong> active daily users</li>
        <li><strong>Sustainability:</strong> 80% retention rate after rewards halving</li>
      </ul>
    `
  },
  {
    id: "3",
    slug: "nft-brand-loyalty",
    client: "LuxeRetail",
    category: "Web2.5 • Retail",
    title: "Reinventing Loyalty: The Golden Ticket NFT",
    description: "Transforming a boring points card into a tradable, status-signaling asset that drove massive brand engagement.",
    result: "40k Wallets Created",
    tags: ["NFT Utility", "Brand Strategy", "Loyalty Program"],
    image: "/images/blog-tokenomics.png",
    color: "from-amber-400 to-orange-500",
    content: `
      <h2>The Challenge</h2>
      <p>LuxeRetail's loyalty program was dormant. Points were expiring unused. They needed to re-engage Gen Z consumers who value digital ownership over plastic cards.</p>
      
      <h2>The Solution</h2>
      <p>We tokenized their top-tier membership into a "Golden Ticket" NFT. It wasn't just a receipt; it was a pass.</p>
      <ul>
        <li>**Exclusive Access:** Holders got early access to limited drops.</li>
        <li>**Tradability:** Users could sell their membership if they no longer wanted it, creating a secondary market.</li>
        <li>**Phygital Merch:** NFC-chipped hoodies connected to the NFT.</li>
      </ul>
      
      <h2>The Results</h2>
      <p>The campaign went viral on TikTok and revitalized the brand:</p>
      <ul>
        <li><strong>40,000+</strong> new wallets created by non-crypto natives</li>
        <li><strong>$2M+</strong> in secondary usage volume</li>
        <li><strong>Youngest demographic</strong> influx in company history</li>
      </ul>
    `
  },
  {
    id: "4",
    slug: "global-ecommerce-localization",
    client: "MarketOne",
    category: "Web2 • Global",
    title: "Border-Free Commerce: AI Localization at Scale",
    description: "Using AI agents to instantly translate, culturalize, and deploy e-commerce fronts in 25 new markets simultaneously.",
    result: "25 New Markets",
    tags: ["AI Localization", "E-commerce", "Global Growth"],
    image: "/images/blog-agents.png",
    color: "from-cyan-400 to-blue-500",
    content: `
      <h2>The Challenge</h2>
      <p>MarketOne wanted to expand globally, but traditional translation agencies were too slow and expensive. They missed trend cycles in local markets.</p>
      
      <h2>The Solution</h2>
      <p>We deployed an agentic workflow for real-time localization.</p>
      <ul>
        <li>**Cultural Adaptation:** AI didn't just translate text; it swapped images and idioms to match local culture.</li>
        <li>**Dynamic Pricing:** Agents adjusted pricing based on local purchasing power parity.</li>
        <li>**Instant SEO:** Generated thousands of localized landing pages overnight.</li>
      </ul>
      
      <h2>The Results</h2>
      <p>Expansion velocity increased by 10x:</p>
      <ul>
        <li><strong>Launched in 25 countries</strong> in Q3 alone</li>
        <li><strong>40% revenue</strong> now coming from international markets</li>
        <li><strong>Zero</strong> increase in headcount for the localization team</li>
      </ul>
    `
  }
];
