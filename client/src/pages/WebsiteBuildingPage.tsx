import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { getPageContent } from "@/lib/content";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface PageContent {
    header: { title: string; subtitle: string; };
    hero: { title: string; subtitle: string; cta_primary: string; cta_secondary: string; };
    features: string[];
    process: { step: string; title: string; description: string; }[];
}

export default function WebsiteBuildingPage() {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<PageContent | null>(null);

    useEffect(() => {
        getPageContent<PageContent>("website_building").then(setContent);
    }, [i18n.language]);

    if (!content) return <LoadingSpinner />;

    return (
        <div className="min-h-screen flex flex-col font-sans bg-background">
            <Helmet>
                <title>{content.hero.title} | {t("nav.agency_name")}</title>
                <meta name="description" content={content.hero.subtitle} />
                <meta name="keywords" content="website building, web development, custom websites, high converting websites, landing page design, react development" />
                <link rel="canonical" href="https://blockmarketingconsulting.com/services/website-building" />
                <meta property="og:title" content={`${content.hero.title} | ${t("nav.agency_name")}`} />
                <meta property="og:description" content={content.hero.subtitle} />
                <meta property="og:url" content="https://blockmarketingconsulting.com/services/website-building" />
            </Helmet>
            <Navigation />

            <main className="flex-grow pt-24">
                <PageHeader title={content.header.title} subtitle={content.header.subtitle} />

                <section className="py-24 container">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">{content.hero.title}</h2>
                            <p className="text-lg text-slate-600 mb-8">{content.hero.subtitle}</p>
                            <div className="flex gap-4">
                                <Link href="/contact">
                                    <button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                                        {content.hero.cta_primary}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
                            <img
                                src="/website-infra.png"
                                alt="High-performance website infrastructure illustration - BlockMarketing Consulting"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="mb-24">
                        <h3 className="text-2xl font-bold mb-8 text-center">Features</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            {content.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm flex items-start gap-3"
                                >
                                    <CheckCircle2 className="text-primary shrink-0" />
                                    <span className="font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-12 text-center">Our Process</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            {content.process.map((step, idx) => (
                                <div key={idx} className="relative">
                                    <div className="text-6xl font-black text-slate-100 mb-4">{step.step}</div>
                                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Brand Dark CTA */}
                <section className="py-24 bg-brand-dark relative overflow-hidden">
                    {/* Retired Glow Effects */}
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-white">Ready for a better website?</h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">We build websites that don't just look good—they convert visitors into customers.</p>

                        <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-slate-900 font-bold text-xl rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                                Book a Discovery Call
                            </button>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
