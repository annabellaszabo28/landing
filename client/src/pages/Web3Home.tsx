import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Rocket, Mic, Newspaper, Zap } from "lucide-react";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Map icon strings to components
const iconMap: Record<string, any> = {
    Users,
    Rocket,
    Mic,
    Newspaper
};

export default function Web3Home() {
    const { t, i18n } = useTranslation();
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        getPageContent<any[]>("web3-services").then(setServices);
    }, [i18n.language]);
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-primary/20">
            <Helmet>
                <title>{t("web3_seo.title")}</title>
                <meta name="description" content={t("web3_seo.description")} />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-40 pb-20 overflow-hidden bg-slate-50">
                    <div className="absolute inset-0 bg-white/40" />
                    <div className="container relative z-10 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                                    Web3 Native Growth
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-8 leading-[1.05] text-slate-900">
                                Growth for the<br />
                                <span className="text-brand-mint">Decentralized Internet.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mb-12 leading-relaxed font-medium">
                                We understand the nuances of blockchain communities. From tokenomics to on-chain analytics, we build systems that scale TVL and users.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {services.map((service, index) => {
                                const Icon = iconMap[service.icon] || Zap;

                                return (
                                    <motion.div
                                        key={service.id || index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group bg-white border border-slate-100 rounded-[2rem] p-10 hover:border-brand-mint/30 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-mint/10 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/5 rounded-bl-[4rem] transition-all group-hover:bg-brand-mint/10" />

                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-brand-mint group-hover:text-primary transition-colors duration-300 relative z-10 shadow-sm border border-slate-100">
                                            <Icon size={32} strokeWidth={2} />
                                        </div>

                                        <h3 className="text-2xl font-black font-heading text-slate-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-slate-600 mb-8 leading-relaxed font-medium flex-grow">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            {service.features && service.features.slice(0, 3).map((feature: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                                                    <CheckCircle2 size={18} className="text-brand-mint mt-0.5 shrink-0" strokeWidth={2.5} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={`/web3/${service.slug}`}>
                                            <a className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-sm hover:text-brand-mint transition-colors mt-auto group-hover:translate-x-2 duration-300">
                                                Explore Service <ArrowRight size={16} className="ml-2" strokeWidth={3} />
                                            </a>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
