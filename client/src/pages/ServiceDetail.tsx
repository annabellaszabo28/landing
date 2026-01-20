import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
    ArrowLeft, CheckCircle2, Zap, ArrowRight, ShieldCheck, TrendingUp, Users, Clock, HelpCircle, BarChart
} from "lucide-react";
import web2Services from "@/content/web2-services.json";
import web3Services from "@/content/web3-services.json";
import { ServiceDetail as ServiceDetailType } from "@/types";
import { useTranslation } from "react-i18next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// Helper for dynamic icons
const DynamicIcon = ({ name, size = 24, className = "" }: { name: string, size?: number, className?: string }) => {
    // @ts-ignore
    const IconComponent = Icons[name] || Zap;
    return <IconComponent size={size} className={className} />;
};

export default function ServiceDetail({ type }: { type: "web2" | "web3" }) {
    const { slug } = useParams();
    const { t } = useTranslation();

    const services = (type === "web2" ? web2Services : web3Services) as ServiceDetailType[];
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 font-heading">Service Not Found</h1>
                    <Link href={type === "web2" ? "/marketing" : "/web3"}>
                        <a className="text-primary hover:underline font-bold">Back to Services</a>
                    </Link>
                </div>
            </div>
        );
    }

    const backLink = type === "web2" ? "/marketing" : "/web3";
    const currentUrl = `https://blockmarketingconsulting.com/${type === "web2" ? "marketing" : "web3"}/${slug}`;

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-primary/20">
            <Helmet>
                <title>{service.title} | {t("nav.agency_name")}</title>
                <meta name="description" content={service.description} />
                <meta name="keywords" content={`${service.title}, ${type === "web2" ? "marketing agency" : "web3 growth"}, blockmarketing`} />
                <link rel="canonical" href={currentUrl} />
            </Helmet>
            <Navigation />

            <main className="flex-grow pt-24">
                {/* 1. Hero Section */}
                <section className="pt-20 pb-16 bg-slate-50">
                    <div className="container px-4">
                        <Link href={backLink}>
                            <a className="inline-flex items-center text-slate-500 hover:text-primary mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
                                <ArrowLeft size={16} className="mr-2" /> Back to {type === "web2" ? "Marketing" : "Web3"}
                            </a>
                        </Link>

                        <div className="max-w-4xl">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-6 block">
                                {type === "web2" ? "Marketing Excellence" : "Decentralized Growth"}
                            </span>
                            <h1 className="text-5xl md:text-[56px] font-black font-heading tracking-tighter mb-8 leading-[1.1] text-slate-900">
                                {service.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed font-medium max-w-3xl">
                                {service.longDescription}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                                    <button className="px-10 py-5 bg-primary text-white font-black text-lg rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                                        Book Discovery Call
                                    </button>
                                </a>
                                <a href="#approach">
                                    <button className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-black text-lg rounded-full hover:bg-slate-50 transition-all">
                                        Our Methodology
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Results Bar */}
                {service.heroMetrics && (
                    <section className="py-12 border-y border-slate-100 bg-white">
                        <div className="container px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {service.heroMetrics.map((metric, i) => (
                                    <div key={i} className="flex flex-col items-center md:items-start">
                                        <div className="text-4xl font-black text-primary mb-1">{metric.value}</div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* 3. The Challenge */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-4 mb-8 text-slate-300">
                                <div className="h-px flex-grow bg-slate-100" />
                                <HelpCircle size={24} />
                                <div className="h-px flex-grow bg-slate-100" />
                            </div>
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-center mb-10 leading-none">
                                {service.challenge.title}
                            </h2>
                            <p className="text-slate-600 text-xl font-medium text-center leading-relaxed">
                                {service.challenge.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Our Approach */}
                <section id="approach" className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Methodology</span>
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-slate-900 leading-none mb-6">
                                {service.methodology.title}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 mb-16">
                            {service.methodology.phases.map((phase, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="text-5xl font-black text-slate-200 uppercase tracking-tighter leading-none mb-6">0{i + 1}</div>
                                    <h4 className="text-xl font-black text-primary uppercase tracking-tight">{phase.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium line-clamp-3">
                                        {phase.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                            <button className="px-8 py-4 bg-primary text-white font-black text-sm rounded-full hover:bg-slate-900 transition-all uppercase tracking-widest">
                                Book Strategy Session
                            </button>
                        </a>
                    </div>
                </section>

                {/* 5. What's Included */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div className="sticky top-32">
                                <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">The Deliverables</span>
                                <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-slate-900 leading-none mb-8">
                                    What's <span className="text-brand-mint">Included.</span>
                                </h2>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-md">
                                    A comprehensive checklist of high-impact assets and strategies we deploy for your brand.
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                                <div className="grid md:grid-cols-1 gap-6">
                                    {service.deliverables.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 pb-4 border-b border-white">
                                            <div className="w-6 h-6 rounded-full bg-brand-mint/20 flex items-center justify-center text-brand-mint">
                                                <CheckCircle2 size={16} strokeWidth={3} />
                                            </div>
                                            <span className="font-bold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Process Timeline */}
                <section className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="max-w-4xl mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Speed to Market</span>
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-slate-900 leading-none mb-6">
                                Realistic <span className="text-brand-mint tracking-tight">Timeline.</span>
                            </h2>
                            <p className="text-slate-600 text-lg font-medium">Standard duration: <span className="text-primary font-black underline decoration-brand-mint decoration-2 underline-offset-4">{service.timeline.duration}</span></p>
                        </div>

                        <div className="relative pl-8 border-l border-slate-200 ml-4 space-y-12">
                            {service.timeline.milestones.map((ms, i) => (
                                <div key={i} className="relative">
                                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-2 border-brand-mint" />
                                    <div className="text-xs font-black text-brand-mint uppercase tracking-widest mb-1">{ms.week}</div>
                                    <h4 className="text-xl font-black text-primary uppercase tracking-tight mb-2">{ms.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Who This Is For */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Ideal Partners</span>
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-slate-900 leading-none">
                                {service.targetAudience.title}
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {service.targetAudience.types.map((type, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 shadow-sm group-hover:scale-110 transition-all">
                                        <Users size={24} />
                                    </div>
                                    <h4 className="font-black text-primary uppercase tracking-tight leading-tight">{type}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Results & Social Proof */}
                <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mint opacity-[0.03] blur-[100px] rounded-full" />
                    <div className="container px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter mb-6 leading-none pt-4">
                                What You Can <span className="text-brand-mint">Expect.</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 mb-20">
                            {service.socialProof.metrics.map((metric, i) => (
                                <div key={i} className="text-center group">
                                    <div className="inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-brand-mint mb-8 group-hover:scale-110 transition-all duration-500">
                                        <DynamicIcon name={metric.icon} size={32} />
                                    </div>
                                    <div className="text-5xl font-black text-white mb-3 tracking-tighter">{metric.value}</div>
                                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{metric.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-6">
                                <div className="text-4xl font-black text-brand-mint">{service.socialProof.projectCount}</div>
                                <div className="text-sm font-bold text-slate-300 uppercase tracking-widest leading-tight">Successful {service.title}<br />Project Launches</div>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-center gap-6">
                                <div className="text-4xl font-black text-brand-mint">{service.socialProof.retentionRate}</div>
                                <div className="text-sm font-bold text-slate-300 uppercase tracking-widest leading-tight">Client Retention<br />Rate Focus</div>
                            </div>
                        </div>

                        <div className="text-center mt-16">
                            <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-brand-mint text-primary font-black text-xl rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-brand-mint/20">
                                See How We Can Help You
                            </a>
                        </div>
                    </div>
                </section>

                {/* 9. Why BlockMarketing */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">The Advantage</span>
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-slate-900 leading-none">
                                Why BlockMarketing <span className="text-brand-mint tracking-tight">Consulting.</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {service.differentiators.map((diff, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="text-brand-mint mb-6">
                                        <DynamicIcon name={diff.icon} size={32} strokeWidth={2.5} />
                                    </div>
                                    <h4 className="text-lg font-black text-primary uppercase tracking-tight">{diff.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium line-clamp-3">
                                        {diff.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. Pricing Indicator */}
                <section className="py-24 bg-slate-50">
                    <div className="container px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Investment</span>
                            <h2 className="text-3xl md:text-[42px] font-black font-heading tracking-tighter text-slate-900 leading-none mb-8">
                                Value-Driven <span className="text-brand-mint">Pricing.</span>
                            </h2>
                            <p className="text-slate-600 text-xl font-medium mb-12">
                                We offer bespoke pricing models tailored to your specific goals, from fixed-project fees to performance-based incentives.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                                    <button className="px-10 py-5 bg-primary text-white font-black text-lg rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                                        Request Custom Quote
                                    </button>
                                </a>
                                <Link href="/contact">
                                    <a className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-black text-lg rounded-full hover:bg-slate-100 transition-all text-center">
                                        Contact Sales
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 11. FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Service Support</span>
                                <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-slate-900 leading-none">
                                    Frequently Asked<br />
                                    <span className="text-brand-mint uppercase tracking-tight">Questions</span>
                                </h2>
                            </div>

                            <Accordion type="single" collapsible className="space-y-4">
                                {service.faqs.map((item, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`item-${i}`}
                                        className="bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-2 overflow-hidden"
                                    >
                                        <AccordionTrigger className="text-xl font-black text-primary py-6 hover:no-underline text-left uppercase tracking-tight">
                                            {item.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-lg leading-relaxed font-medium pb-8 prose-strong:font-normal prose-b:font-normal">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* 12. Final CTA */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black font-heading mb-8 tracking-tighter text-white leading-tight">
                            Ready to lead the <span className="text-brand-mint">{type === "web2" ? "Market?" : "Decentralized Future?"}</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop guessing. Start growing. Book your strategic growth session today and see the difference data-driven marketing makes.
                        </p>

                        <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-primary font-black text-xl rounded-full hover:bg-brand-mint transition-all transform hover:scale-105 shadow-2xl shadow-white/10 tracking-tighter uppercase">
                                Book a Strategy Call
                            </button>
                        </a>
                    </div>
                    {/* Abstract background elements */}
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-mint opacity-10 blur-[100px] rounded-full" />
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-mint opacity-10 blur-[100px] rounded-full" />
                </section>
            </main>
            <Footer />
        </div>
    );
}
