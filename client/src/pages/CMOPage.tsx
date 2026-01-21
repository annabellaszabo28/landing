import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, BarChart3, Calculator, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import heroBgLight from "@/assets/hero-bg-light.png";
import { useTranslation } from "react-i18next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { getPageContent } from "@/lib/content";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import type { CMOContent } from "@/types";

export default function CMOPage() {
    const { t, i18n } = useTranslation();
    const [content, setContent] = useState<CMOContent | null>(null);
    const [budget, setBudget] = useState(5000);

    useEffect(() => {
        getPageContent<CMOContent>("cmo").then(setContent);
    }, [i18n.language]);

    if (!content) return <LoadingSpinner />;

    // Calculator metrics based on budget
    const avgCPC = 0.85; // Average CPC in EUR
    const ctr = 0.025; // 2.5% click-through rate
    const potentialClicks = Math.floor(budget / avgCPC);
    const potentialImpressions = Math.floor(potentialClicks / ctr);


    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-primary/20">
            <Helmet>
                <title>{t("cmo_seo.title")}</title>
                <meta name="description" content={t("cmo_seo.description")} />
                <meta name="keywords" content="fractional cmo, chief marketing officer service, marketing leadership, growth strategy consultant, executive marketing" />
                <link rel="canonical" href="https://blockmarketingconsulting.com/cmo" />
                <meta property="og:title" content={t("cmo_seo.title")} />
                <meta property="og:description" content={t("cmo_seo.description")} />
                <meta property="og:url" content="https://blockmarketingconsulting.com/cmo" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden bg-slate-50 text-slate-900">
                    {/* Light Background Image */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src={heroBgLight}
                            alt="Abstract Light Background"
                            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-white/40" />
                    </div>

                    <div className="container relative z-10 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                                    {content.hero.badge}
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-8 leading-[1.05] text-slate-900">
                                {content.hero.title_main}<br />
                                <span className="text-brand-mint">{content.hero.title_highlight}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mb-12 leading-relaxed font-medium">
                                {content.hero.subtitle}
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 mb-20">
                                <a href="#pricing">
                                    <button className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:-translate-y-1">
                                        {content.hero.cta_pricing}
                                    </button>
                                </a>
                                <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold text-lg rounded-full hover:bg-slate-50 hover:text-primary transition-all">
                                        {content.hero.cta_call}
                                    </button>
                                </a>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                                <h3 className="text-2xl font-black text-brand-mint mb-2 uppercase tracking-tight">{content.benefits.fractional.title}</h3>
                                <p className="text-slate-600 leading-relaxed font-medium">{content.benefits.fractional.desc}</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-primary text-white shadow-2xl shadow-primary/30">
                                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-brand-mint">{content.benefits.ai.title}</h3>
                                <p className="text-white/90 leading-relaxed font-medium">{content.benefits.ai.desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Speed Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-7xl font-black font-heading mb-6 tracking-tighter leading-none">
                                    {content.speed.title_main} <br />
                                    <span className="text-brand-mint uppercase tracking-tight">{content.speed.title_highlight}</span>
                                </h2>
                                <p className="text-slate-700 text-xl font-medium">{content.speed.subtitle}</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {content.speed.steps.map((item) => (
                                <div key={item.step} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-brand-mint/50 hover:shadow-2xl transition-all group">
                                    <div className="text-5xl font-black text-slate-100 mb-6 group-hover:text-brand-mint/20 transition-colors uppercase tracking-widest">{item.step}</div>
                                    <h3 className="text-2xl font-black text-primary mb-3 uppercase tracking-tight group-hover:text-brand-mint transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interactive Calculator Section */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full" />

                    <div className="container px-4 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-sm mb-4 block">{content.calculator.badge}</span>
                                <h1 className="text-3xl md:text-6xl font-black font-heading mb-6 text-white tracking-tighter">{content.calculator.title}</h1>
                                <p className="text-white/70 text-lg font-medium">{content.calculator.subtitle}</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                                <div className="mb-12">
                                    <div className="flex justify-between items-end mb-6">
                                        <label className="text-slate-300 font-medium">{content.calculator.budget_label}</label>
                                        <div className="text-3xl font-bold font-heading text-white">€{budget.toLocaleString()}</div>
                                    </div>
                                    <input
                                        type="range"
                                        min="2500"
                                        max="100000"
                                        step="2500"
                                        value={budget}
                                        onChange={(e) => setBudget(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>€2,500</span>
                                        <span>€100,000+</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all duration-500 shadow-xl">
                                        <div className="flex justify-center mb-6 text-brand-mint drop-shadow-[0_0_10px_rgba(165,243,200,0.4)]"><TrendingUp size={40} /></div>
                                        <div className="text-xs text-white/50 uppercase tracking-widest font-black mb-2">{content.calculator.impressions_label}</div>
                                        <div className="text-3xl font-black text-white tracking-tighter">{potentialImpressions.toLocaleString()}</div>
                                        <div className="text-xs text-white/30 mt-4 font-bold tracking-wider">@ {ctr * 100}% Avg. CTR</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all duration-500 shadow-xl">
                                        <div className="flex justify-center mb-6 text-brand-mint drop-shadow-[0_0_10px_rgba(165,243,200,0.4)]"><Users size={40} /></div>
                                        <div className="text-xs text-white/50 uppercase tracking-widest font-black mb-2">{content.calculator.clicks_label}</div>
                                        <div className="text-3xl font-black text-white tracking-tighter">~{potentialClicks.toLocaleString()}</div>
                                        <div className="text-xs text-white/30 mt-4 font-bold tracking-wider">@ €{avgCPC.toFixed(2)} Target CPC</div>
                                    </div>
                                    <div className="p-8 rounded-3xl bg-brand-mint text-primary text-center group transition-all duration-500 shadow-2xl shadow-brand-mint/20">
                                        <div className="flex justify-center mb-6 text-primary"><Calculator size={40} strokeWidth={2.5} /></div>
                                        <div className="text-xs uppercase tracking-widest font-black mb-2">{content.calculator.cpc_label}</div>
                                        <div className="text-3xl font-black tracking-tighter">€{avgCPC.toFixed(2)}</div>
                                        <div className="text-xs mt-4 font-bold tracking-wider">{content.calculator.benchmarked}</div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 mt-8 text-center italic">{content.calculator.disclaimer}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-sm mb-4 block">{content.pricing.badge}</span>
                            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter">{content.pricing.title}</h2>
                            <p className="text-2xl text-slate-700 mt-6 max-w-3xl mx-auto leading-tight">{content.pricing.subtitle}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Foundation */}
                            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 flex flex-col hover:shadow-2xl transition-all hover:-translate-y-2 text-white">
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{content.pricing.plans.foundation.title}</h3>
                                <div className="text-4xl font-black text-brand-mint mb-6">{content.pricing.plans.foundation.price}<span className="text-lg text-slate-500">/mo</span></div>
                                <p className="text-slate-400 mb-8 border-b border-slate-800 pb-8 font-medium h-20">{content.pricing.plans.foundation.desc}</p>

                                <div className="mb-4">
                                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider opacity-70">{content.pricing.plans.foundation.weekly_label}</h4>
                                </div>

                                <ul className="space-y-6 mb-8 flex-grow text-slate-300 font-medium">
                                    <li>
                                        <div className="font-bold text-white mb-1">Social Media Management</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>7 Posts Per Week (One Channel)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Social Media Engagement</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>20 Engagement Actions Per Week (One Channel)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Content Marketing</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>1 SEO Optimized Article Per Week</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Video Component</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>1 Video Monthly (30 sec)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Paid Ads Management</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>One Channel Included</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Technical Support</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>Full Website Audit</span></div>
                                    </li>
                                </ul>
                                <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-brand-mint hover:text-slate-900 transition-all">Choose this plan →</button>
                                </a>
                            </div>

                            {/* Attention - Highlighted */}
                            <div className="p-10 rounded-[2.5rem] bg-slate-900 border-4 border-brand-mint flex flex-col relative shadow-2xl shadow-brand-mint/10 md:scale-105 z-10 text-white">
                                <div className="absolute -top-5 right-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[12px] font-black px-6 py-2 rounded-lg tracking-[0.1em] uppercase shadow-lg">{content.pricing.plans.attention.popular_badge}</div>
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{content.pricing.plans.attention.title}</h3>
                                <div className="text-4xl font-black text-brand-mint mb-6">{content.pricing.plans.attention.price}<span className="text-lg text-white/50">/mo</span></div>
                                <p className="text-slate-300 mb-8 border-b border-slate-700 pb-8 font-medium h-20">{content.pricing.plans.attention.desc}</p>

                                <div className="mb-4">
                                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider opacity-70">{content.pricing.plans.attention.weekly_label}</h4>
                                </div>

                                <ul className="space-y-6 mb-8 flex-grow text-white font-medium">
                                    <li>
                                        <div className="font-bold text-brand-mint mb-1">Social Media Management</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>14 Posts Per Week (Multiple Channels)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-brand-mint mb-1">Social Media Engagement</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>30 Engagement Actions Per Week (One Channel)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-brand-mint mb-1">Content Marketing</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>7 SEO Optimized Articles Per Week</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-brand-mint mb-1">Video Component</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>1 Video Weekly</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-brand-mint mb-1">Paid Ads Management</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>One Channel Included</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-brand-mint mb-1">Technical Support</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>Full Audit + Strategy for Website</span></div>
                                    </li>
                                </ul>
                                <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-brand-mint hover:text-slate-900 transition-all shadow-xl shadow-brand-mint/20 transform hover:-translate-y-1">Choose this plan →</button>
                                </a>
                            </div>

                            {/* Accelerator */}
                            <div className="p-8 rounded-[2rem] bg-slate-900 border border-slate-800 flex flex-col hover:shadow-2xl transition-all hover:-translate-y-2 text-white">
                                <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{content.pricing.plans.accelerator.title}</h3>
                                <div className="text-4xl font-black text-brand-mint mb-6">{content.pricing.plans.accelerator.price}<span className="text-lg text-slate-500">/mo</span></div>
                                <p className="text-slate-400 mb-8 border-b border-slate-800 pb-8 font-medium h-20">{content.pricing.plans.accelerator.desc}</p>

                                <div className="mb-4">
                                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider opacity-70">{content.pricing.plans.accelerator.weekly_label}</h4>
                                </div>

                                <ul className="space-y-6 mb-8 flex-grow text-slate-300 font-medium">
                                    <li>
                                        <div className="font-bold text-white mb-1">Social Media Management</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>30 Posts Per Week (Multiple Channels)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Social Media Engagement</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>40 Engagement Actions Per Week (One Channel)</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Content Marketing</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>15 SEO Optimized Articles Per Week</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Video Component</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>10 Videos Monthly</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Paid Ads Management</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>3 Channels Included</span></div>
                                    </li>
                                    <li>
                                        <div className="font-bold text-white mb-1">Technical Support</div>
                                        <div className="flex items-start gap-2 text-sm"><CheckCircle2 className="text-brand-mint mt-0.5" size={16} strokeWidth={3} /> <span>Full Audit + Full Design Support</span></div>
                                    </li>
                                </ul>
                                <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-5 rounded-2xl bg-white text-slate-900 font-black uppercase tracking-widest text-sm hover:bg-brand-mint hover:text-slate-900 transition-all">Choose this plan →</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden w-full border-t border-white/5">
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black font-heading mb-6 tracking-tighter text-white leading-none">{content.cta.title}</h2>
                        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">{content.cta.subtitle}</p>

                        <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-slate-900 font-black text-xl rounded-full hover:bg-brand-mint transition-all transform hover:scale-105 shadow-2xl shadow-white/10 tracking-tight">
                                {content.cta.button}
                            </button>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
