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
                <PageHeader
                    title={content.header.title}
                    subtitle={content.header.subtitle}
                />

                <section className="py-24 bg-slate-50">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-16">{content.challenges.title}</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {content.challenges.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                                            <Icons.AlertCircle size={20} />
                                        </div>
                                        <p className="text-slate-700 leading-relaxed font-medium">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-16">{content.solutions.title}</h2>
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
                                        className="glass p-8 rounded-2xl border-t-4 border-primary hover:shadow-xl transition-all"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    {/* Retired Radial Gradient */}
                    <div className="container relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">{content.cta.title}</h2>
                        <p className="text-slate-400 mb-12 max-w-3xl mx-auto text-xl">
                            {content.cta.subtitle}
                        </p>
                        <Link href="/contact">
                            <button className="bg-primary text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/40">
                                {content.cta.button_text}
                            </button>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
