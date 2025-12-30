export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "high-converting-web2-funnels",
    title: "High-Converting Web2 Funnels in a Web3 World",
    excerpt: "Why the best crypto projects are adopting traditional SaaS growth mechanics to scale beyond the degen niche.",
    author: "Alex Rivera",
    date: "Dec 10, 2025",
    category: "Growth Strategy",
    image: "/images/blog-funnels.png",
    content: `
      <p>The era of "build it and they will airdrop" is dead. As the Web3 market matures, the winning protocols are those that master the art of the <strong>Capitalist Funnel</strong>.</p>
      
      <h2>The Hybrid Model</h2>
      <p>We are seeing a convergence where decentralized infrastructure meets Web2 user acquisition tactics. Use Facebook Ads to drive traffic, but use on-chain data to qualify leads. This is the hybrid model that lowers CAC while increasing LTV.</p>
      
      <h2>Frictionless Onboarding</h2>
      <p>Your funnel shouldn't start with "Connect Wallet." It should start with value. Educational content, interactive demos, and email capture forms are the new "Hello World" of crypto marketing. Seed phrases come later.</p>
      
      <blockquote>"Complexity is the enemy of conversion. If your grandmother can't sign up in 30 seconds, your funnel is broken."</blockquote>
      
      <h2>Retargeting the Chain</h2>
      <p>Imagine retargeting users not just based on page views, but on wallet age and token holdings. This is the power of Web3 native marketing funnels.</p>
    `
  },
  {
    id: "2",
    slug: "web3-community-moats",
    title: "The 7 Moats of Sustainable Web3 Communities",
    excerpt: "Moving beyond mercenary liquidity: How to build tribes that survive the bear market and thrive in the bull.",
    author: "Elena Kova",
    date: "Nov 28, 2025",
    category: "Community",
    image: "/images/blog-community.png",
    content: `
      <p>Liquidity is mercenary; community is missionary. In the long run, only the missionaries survive. But how do you build a moat around your tribe?</p>
      
      <h2>1. The Identity Moat</h2>
      <p>When holding your token becomes part of someone's digital identity (think PFPs or ENS names), selling becomes an identity crisis. This is the strongest form of retention.</p>
      
      <h2>2. The Governance Moat</h2>
      <ul>
        <li><strong>Real Power:</strong> Give the community actual decisions to make, not just theatre.</li>
        <li><strong>Skin in the Game:</strong> Require staking for voting to align incentives.</li>
      </ul>
      
      <h2>3. The Education Moat</h2>
      <p>A community that learns together, earns together. By becoming the primary source of truth for your niche, you create a dependency that transcends price action.</p>
    `
  },
  {
    id: "3",
    slug: "seo-tokenomics-fusion",
    title: "SEO & Tokenomics: The Hidden Synergy",
    excerpt: "How organic search traffic drives token velocity and creates self-sustaining economic flywheels.",
    author: "Elena Kova",
    date: "Nov 15, 2025",
    category: "Token Economics",
    image: "/images/blog-tokenomics.png",
    content: `
      <p>Most token economists ignore Google. Most SEOs ignore smart contracts. The alpha lies in the intersection.</p>
      
      <h2>The Traffic-to-Token Pipeline</h2>
      <p>Organic traffic is free. Token emissions are expensive. By replacing paid ads with high-intent SEO traffic, you reduce the sell pressure on your treasury. It's simple math that most projects miss.</p>
      
      <h2>Keyword dominance as Authority</h2>
      <p>Ranking #1 for "decentralized lending" isn't just about traffic; it's about perceived market leadership. This perception drives token demand, which funds further development, which improves the product (and rankings).</p>
      
      <h2>The Flywheel Effect</h2>
      <p>When your documentation and whitepaper profit from SEO, you attract developers. Developers build utility. Utility drives value. Value drives searches. The cycle repeats.</p>
    `
  },
  {
    id: "4",
    slug: "agentic-marketing-2026",
    title: "Agentic Marketing: The 2026 Playbook",
    excerpt: "Prepare for a world where AI agents are your primary marketing team, executing autonomous campaigns at scale.",
    author: "Marcus Thorne",
    date: "Oct 30, 2025",
    category: "AI Marketing",
    image: "/images/blog-agents.png",
    content: `
      <p>We are moving from "human-in-the-loop" to "human-on-the-loop." The marketing teams of 2026 will be composed of 3 humans and 300 agents.</p>
      
      <h2>Autonomous Content Engines</h2>
      <p>Agents that don't just write tweets, but monitor trends, generate memes, engage in comments, and optimize posting times based on real-time sentiment analysis.</p>
      
      <h2>The Curator Economy</h2>
      <p>With agents producing infinite content, the human role shifts to curation and strategy. Taste becomes the rarest commodity.</p>
      
      <blockquote>"The future isn't AI replacing marketers. It's marketers with AI armies replacing marketers without them."</blockquote>
    `
  }
];
