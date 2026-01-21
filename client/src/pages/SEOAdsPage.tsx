import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

interface SEOContent {
    header: { title: string; subtitle: string };
    hero_metrics: { value: string; label: string }[];
    challenges: { title: string; items: string[] };
    approach: { title: string; description: string; items: Array<{ title: string; description: string; icon: string }> };
    process: { title: string; steps: Array<{ step: string; title: string; description: string }> };
    cta: { title: string; subtitle: string; button_text: string };
}

export default function SEOAdsPage() {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<SEOContent | null>(null);

    useEffect(() => {
        getPageContent<SEOContent>("seo_ads").then(setContent);
    }, [i18n.language]);

    if (!content) return <LoadingSpinner />;

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{content.header.title} | {t("nav.agency_name")}</title>
                <meta name="description" content={content.header.subtitle} />
                <link rel="canonical" href="https://blockmarketingconsulting.com/seo/organic_growth" />
                <meta property="og:title" content={`${content.header.title} | ${t("nav.agency_name")}`} />
                <meta property="og:description" content={content.header.subtitle} />
                <meta property="og:url" content="https://blockmarketingconsulting.com/seo/organic_growth" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="pt-40 pb-20 relative overflow-hidden bg-slate-50">
                    <div className="container px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl"
                        >
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-6 block">• ORGANIC DOMINANCE AT SCALE</span>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-10 leading-[0.95] text-slate-900">
                                SEO That Drives<br />
                                <span className="text-brand-mint uppercase">Revenue Growth</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mb-12 leading-relaxed font-medium">
                                {content.header.subtitle}
                            </p>

                            {/* Hero Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                                {content.hero_metrics.map((metric, i) => (
                                    <div key={i}>
                                        <div className="text-3xl md:text-5xl font-black text-primary mb-1">{metric.value}</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6">{content.challenges.title}</h2>
                            <p className="text-xl text-slate-600 font-medium">Most websites are architecturally crippled. We fix the foundation first.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {content.challenges.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex gap-6 group hover:bg-red-50/30 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                                        <Icons.X size={18} strokeWidth={3} />
                                    </div>
                                    <p className="text-slate-700 font-bold leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="py-24 bg-slate-900 text-white relative">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Methodology</span>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">{content.approach.title}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {content.approach.items.map((item, index) => {
                                const IconComponent = Icons[item.icon as keyof typeof Icons];
                                const Icon = (typeof IconComponent === 'function' ? IconComponent : Icons.Zap) as LucideIcon;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-mint transition-all duration-500 group"
                                    >
                                        <div className="w-14 h-14 bg-brand-mint text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                            <Icon size={28} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 tracking-tight uppercase leading-none">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-medium">{item.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900 leading-none">The Roadmap to Domain Dominance</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
                            {/* Connector Line */}
                            <div className="absolute top-24 left-0 w-full h-px bg-slate-100 hidden md:block" />
                            {content.process.steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative z-10"
                                >
                                    <div className="text-7xl font-black text-slate-100 mb-6 group-hover:text-brand-mint/20 transition-colors uppercase tracking-widest">{step.step}</div>
                                    <h3 className="text-2xl font-black text-primary mb-3 uppercase tracking-tight">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-none">
                            Ready for Organic<br /><span className="text-brand-mint italic">Dominance?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-bold opacity-90">
                            {content.cta.subtitle}
                        </p>
                        <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                            <button className="px-16 py-6 bg-white text-primary font-black text-xl rounded-full hover:bg-brand-mint transition-all transform hover:scale-105 shadow-2xl tracking-tighter uppercase font-heading">
                                {content.cta.button_text}
                            </button>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
