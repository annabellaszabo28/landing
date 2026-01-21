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

interface AIContent {
    header: { title: string; subtitle: string };
    hero_metrics: { value: string; label: string }[];
    challenges: { title: string; items: string[] };
    solutions: { title: string; items: Array<{ title: string; description: string; icon: string }> };
    cta: { title: string; subtitle: string; button_text: string };
}

export default function AISearchPage() {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<AIContent | null>(null);

    useEffect(() => {
        getPageContent<AIContent>("ai_search_growth").then(setContent);
    }, [i18n.language]);

    if (!content) return <LoadingSpinner />;

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{content.header.title} | {t("nav.agency_name")}</title>
                <meta name="description" content={content.header.subtitle} />
                <link rel="canonical" href="https://blockmarketingconsulting.com/ai_search/growth" />
                <meta property="og:title" content={`${content.header.title} | ${t("nav.agency_name")}`} />
                <meta property="og:description" content={content.header.subtitle} />
                <meta property="og:url" content="https://blockmarketingconsulting.com/ai_search/growth" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="pt-40 pb-20 relative overflow-hidden bg-white">
                    <div className="container px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl"
                        >
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-6 block">• THE FUTURE OF DISCOVERY: GEO</span>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-10 leading-[0.95] text-slate-900">
                                {content.header.title.split('.').map((part, i) => (
                                    <span key={i} className={i === 1 ? "block text-brand-mint" : "block"}>
                                        {part}{i === 0 && '.'}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mb-12 leading-relaxed font-medium">
                                {content.header.subtitle}
                            </p>

                            {/* Hero Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                                {content.hero_metrics.map((metric, i) => (
                                    <div key={i}>
                                        <div className="text-3xl md:text-5xl font-black text-primary mb-1">{metric.value}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto mb-16 text-center">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 leading-none">
                                {content.challenges.title}
                            </h2>
                            <p className="text-xl text-slate-600 font-medium">
                                If you isn't cited by AI, you don't exist in the next economy.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {content.challenges.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-6"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                        <Icons.AlertCircle size={24} />
                                    </div>
                                    <p className="text-slate-700 leading-relaxed font-bold text-lg">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Solution</span>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900">{content.solutions.title}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {content.solutions.items.map((solution, index) => {
                                const IconComponent = Icons[solution.icon as keyof typeof Icons];
                                const Icon = (typeof IconComponent === 'function' ? IconComponent : Icons.Zap) as LucideIcon;
                                return (
                                    <motion.div
                                        key={solution.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-brand-mint transition-all duration-500 group"
                                    >
                                        <div className="w-14 h-14 bg-primary text-brand-mint rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                            <Icon size={28} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 tracking-tight uppercase leading-none text-primary">{solution.title}</h3>
                                        <p className="text-slate-600 leading-relaxed font-medium">{solution.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Authority Section / GEO Audit CTA */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
                        <Icons.Brain className="absolute -top-20 -right-20 w-[500px] h-[500px] text-white" />
                    </div>
                    <div className="container px-4 relative z-10 text-center text-white">
                        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                            Dominate the<br /><span className="text-brand-mint">Generative Web.</span>
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-bold opacity-90">
                            {content.cta.subtitle}
                        </p>
                        <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                            <button className="px-16 py-6 bg-white text-primary font-black text-xl rounded-full hover:bg-brand-mint hover:text-primary transition-all transform hover:scale-105 shadow-2xl tracking-tighter uppercase font-heading">
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
