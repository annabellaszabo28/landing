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
    challenges: { title: string; items: string[] };
    solutions: { title: string; items: Array<{ title: string; description: string; icon: string }> };
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
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                <PageHeader
                    title={content.header.title}
                    subtitle={content.header.subtitle}
                    gradient="from-indigo-600 to-blue-500"
                />

                <section className="py-24 bg-slate-50">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="text-3xl font-bold mb-6">{content.challenges.title}</h2>
                            <div className="space-y-4 text-left">
                                {content.challenges.items.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                                            <Icons.X size={16} />
                                        </div>
                                        <p className="text-slate-700 font-medium">{item}</p>
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
                                        className="glass p-8 rounded-2xl border-b-4 border-primary hover:translate-y-[-8px] transition-transform"
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

                <section className="py-24 bg-slate-50">
                    <div className="container text-center">
                        <h2 className="text-3xl font-bold mb-12">{content.social_proof.title}</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                <div className="text-5xl font-bold text-primary mb-2">{content.social_proof.stat_1.split(" ")[0]}</div>
                                <div className="text-slate-500 font-medium uppercase tracking-wider">{content.social_proof.stat_1.split(" ").slice(1).join(" ")}</div>
                            </div>
                            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                                <div className="text-5xl font-bold text-primary mb-2">{content.social_proof.stat_2.split(" ")[0]}</div>
                                <div className="text-slate-500 font-medium uppercase tracking-wider">{content.social_proof.stat_2.split(" ").slice(1).join(" ")}</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-primary text-white">
                    <div className="container text-center">
                        <h2 className="text-4xl font-bold mb-6">{content.cta.title}</h2>
                        <p className="text-slate-100 mb-10 max-w-2xl mx-auto text-lg">
                            {content.cta.subtitle}
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-primary px-10 py-4 rounded-full text-xl font-bold hover:bg-slate-100 transition-all shadow-xl shadow-white/10">
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
