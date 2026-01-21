// Content Types for CMS-managed pages

// ============ HOME PAGE ============
export interface HeroContent {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon: string;
    image?: string;
}

export interface ServicesSectionContent {
    title: string;
    subtitle: string;
    web2_tab: string;
    web3_tab: string;
    web2_items: ServiceItem[];
    web3_items: ServiceItem[];
}

export interface BridgeSectionContent {
    title: string;
    subtitle: string;
    web2_label: string;
    web2_sublabel: string;
    web3_label: string;
    web3_sublabel: string;
}

export interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
    image: string;
}

export interface TestimonialsSectionContent {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSectionContent {
    title: string;
    subtitle: string;
    items: FAQItem[];
}

export interface CTASectionContent {
    title: string;
    subtitle: string;
    button_text: string;
    button_link: string;
}

export interface WorkTogetherItem {
    title: string;
    icon: string;
}

export interface WorkTogetherSectionContent {
    section_title: string;
    title: string;
    subtitle: string;
    items: WorkTogetherItem[];
    cta_text: string;
}

export interface WhoWeHelpItem {
    title: string;
    icon: string;
}

export interface WhoWeHelpSectionContent {
    section_title: string;
    title: string;
    subtitle: string;
    items: WhoWeHelpItem[];
    cta_text: string;
}

export interface HomeContent {
    hero: HeroContent;
    services_section: ServicesSectionContent;
    bridge_section: BridgeSectionContent;
    testimonials_section: TestimonialsSectionContent;
    faq_section: FAQSectionContent;
    cta_section: CTASectionContent;
    work_together_section: WorkTogetherSectionContent;
    who_we_help_section: WhoWeHelpSectionContent;
}

// ============ SERVICES PAGE ============
export interface ServicesListItem {
    title: string;
    description: string;
    icon: string;
}

export interface ServicesCategory {
    category: string;
    items: ServicesListItem[];
}

export interface ServicesCTAContent {
    title: string;
    subtitle: string;
    button_text: string;
}

export interface ServicesContent {
    header: {
        title: string;
        subtitle: string;
    };
    services_list: ServicesCategory[];
    cta: ServicesCTAContent;
}

// ============ ABOUT PAGE ============
export interface AboutContent {
    header: {
        title: string;
        subtitle: string;
    };
    mission: {
        title: string;
        content_1: string;
        content_2: string;
        image: string;
    };
    impact?: {
        badge: string;
        title: string;
    };
    expertise?: {
        title: string;
        items: { title: string; description: string }[];
    };
    cta?: {
        title: string;
        subtitle: string;
        button: string;
    };
}

// ============ CMO PAGE ============
export interface PricingPlan {
    title: string;
    price: string;
    desc: string;
    weekly_label: string;
    popular_badge?: string;
}

export interface CMOContent {
    hero: {
        badge: string;
        title_main: string;
        title_highlight: string;
        subtitle: string;
        cta_pricing: string;
        cta_call: string;
    };
    benefits: {
        fractional: { title: string; desc: string };
        ai: { title: string; desc: string };
    };
    speed: {
        title_main: string;
        title_highlight: string;
        subtitle: string;
        steps: { step: string; title: string; desc: string }[];
    };
    calculator: {
        badge: string;
        title: string;
        subtitle: string;
        budget_label: string;
        impressions_label: string;
        clicks_label: string;
        cpc_label: string;
        benchmarked: string;
        disclaimer: string;
    };
    pricing: {
        badge: string;
        title: string;
        subtitle: string;
        plans: {
            foundation: PricingPlan;
            attention: PricingPlan;
            accelerator: PricingPlan;
        };
    };
    cta: {
        title: string;
        subtitle: string;
        button: string;
    };
}

// ============ SERVICE DETAIL PAGE ============
export interface ServiceProcess {
    step: string;
    title: string;
    description: string;
}

export interface ServiceResult {
    label: string;
    value: string;
}

export interface ServiceDetail {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    icon: string;

    // Section 2: Results Bar
    heroMetrics: { label: string; value: string }[];

    // Section 3: The Challenge
    challenge: {
        title: string;
        description: string;
    };

    // Section 4: Our Approach
    methodology: {
        title: string;
        phases: { title: string; description: string }[];
    };

    // Section 5: What's Included
    deliverables: string[];

    // Section 6: Process Timeline
    timeline: {
        duration: string;
        milestones: { title: string; week: string }[];
    };

    // Section 7: Who This Is For
    targetAudience: {
        title: string;
        types: string[];
    };

    // Section 8: Results & Social Proof
    socialProof: {
        metrics: { label: string; value: string; icon: string }[];
        projectCount: string;
        retentionRate: string;
    };

    // Section 9: Why BlockMarketing
    differentiators: { title: string; description: string; icon: string }[];

    // Section 11: FAQs
    faqs: { question: string; answer: string }[];

    // Legacy fields (optional cleanup later)
    features: string[];
    process?: ServiceProcess[];
    results?: ServiceResult[];
}
