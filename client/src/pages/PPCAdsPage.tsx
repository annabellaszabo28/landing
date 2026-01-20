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

interface PPCContent {
    header: { title: string; subtitle: string };
    hero_metrics: { value: string; label: string }[];
    challenges: { title: string; items: string[] };
    solutions: { title: string; items: Array<{ title: string; description: string; icon: string }> };
    methodology?: { title: string; steps: Array<{ title: string; desc: string }> };
    social_proof: { title: string; stat_1: string; stat_2: string };
    cta: { title: string; subtitle: string; button_text: string };
}

export default function PPCAdsPage() {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<PPCContent | null>(null);

    useEffect(() => {
        getPageContent<PPCContent>("ppc_ads").then(setContent);
    }, [i18n.language]);

    if (!content) return <LoadingSpinner />;

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{content.header.title} | {t("nav.agency_name")}</title>
                <meta name="description" content={content.header.subtitle} />
                <link rel="canonical" href="https://blockmarketingconsulting.com/ppc/performance_marketing" />
                <meta property="og:title" content={`${content.header.title} | ${t("nav.agency_name")}`} />
                <meta property="og:description" content={content.header.subtitle} />
                <meta property="og:url" content="https://blockmarketingconsulting.com/ppc/performance_marketing" />
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
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-6 block">• PERFORMANCE MARKETING DISRUPTION</span>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-8 leading-[0.95] text-slate-900">
                                {content.header.title.split(':').map((part, i) => (
                                    <span key={i} className={i === 1 ? "block text-brand-mint" : "block"}>
                                        {part}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mb-12 leading-relaxed font-medium">
                                {content.header.subtitle}
                            </p>

                            {/* Hero Metrics */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                                {content.hero_metrics.map((metric, i) => (
                                    <div key={i}>
                                        <div className="text-3xl md:text-4xl font-black text-primary mb-1">{metric.value}</div>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* The Problem Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.95]">
                                    {content.challenges.title.split(':').map((part, i) => (
                                        <span key={i} className={i === 1 ? "text-brand-mint block mt-2" : ""}>
                                            {part}
                                        </span>
                                    ))}
                                </h2>
                                <p className="text-xl text-slate-600 font-medium mb-10">
                                    Traditional agencies focus on clicks. We focus on conversion architecture and net profit.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {content.challenges.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                            <Icons.XCircle size={20} />
                                        </div>
                                        <p className="text-slate-700 font-bold leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="container px-4 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">The BlockMarketing Advantage</span>
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">{content.solutions.title}</h2>
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
                                        transition={{ delay: index * 0.1 }}
                                        className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-mint transition-all duration-500 group"
                                    >
                                        <div className="w-14 h-14 bg-brand-mint text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                            <Icon size={28} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 tracking-tight uppercase leading-none">{solution.title}</h3>
                                        <p className="text-slate-400 leading-relaxed font-medium">{solution.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Trust Statistics / Social Proof */}
                <section className="py-24 bg-white border-b border-slate-100">
                    <div className="container px-4 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter">{content.social_proof.title}</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-brand-mint transition-colors duration-500">
                                    <div className="text-6xl md:text-7xl font-black text-primary mb-4 group-hover:scale-110 transition-transform">64%</div>
                                    <div className="text-sm font-black text-slate-500 uppercase tracking-[0.2em]">{content.social_proof.stat_1.split(' ').slice(1).join(' ')}</div>
                                </div>
                                <div className="p-12 bg-primary rounded-[2.5rem] text-white shadow-2xl shadow-primary/20 group">
                                    <div className="text-6xl md:text-7xl font-black text-brand-mint mb-4 group-hover:scale-110 transition-transform">6.2x</div>
                                    <div className="text-sm font-black text-white uppercase tracking-[0.2em]">{content.social_proof.stat_2.split(' ').slice(1).join(' ')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* High Conversion CTA Section */}
                <section className="py-32 bg-slate-900 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-none">
                            Ready to Lead <br /><span className="text-brand-mint italic">the Market?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                            {content.cta.subtitle}
                        </p>

                        <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                            <button className="px-16 py-6 bg-brand-mint text-primary font-black text-xl rounded-full hover:scale-105 transition-all shadow-2xl shadow-brand-mint/20 tracking-tighter uppercase">
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
