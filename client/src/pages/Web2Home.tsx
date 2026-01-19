import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Search, Target, Share2, FileText, Zap } from "lucide-react";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Map icon strings to components
const iconMap: Record<string, any> = {
    Search,
    Target,
    Share2,
    FileText
};

export default function Web2Home() {
    const { t, i18n } = useTranslation();
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        getPageContent<any[]>("web2-services").then(setServices);
    }, [i18n.language]);
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{t("web2_seo.title")}</title>
                <meta name="description" content={t("web2_seo.description")} />
            </Helmet>
            <Navigation />

            <main className="flex-grow pt-24 pb-20">
                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Digital Marketing,<br />
                            <span className="text-primary">Supercharged by AI</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            We leverage advanced artificial intelligence to optimize every aspect of your marketing funnel, from acquisition to retention.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => {
                            const Icon = iconMap[service.icon] || Zap;

                            return (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all hover:shadow-lg"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-2 mb-8">
                                        {service.features.slice(0, 3).map((feature, i) => (
                                            <li key={i} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                                <CheckCircle2 size={16} className="text-primary mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link href={`/marketing/${service.slug}`}>
                                        <a className="inline-flex items-center text-primary font-semibold hover:underline">
                                            Learn More <ArrowRight size={16} className="ml-2" />
                                        </a>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
