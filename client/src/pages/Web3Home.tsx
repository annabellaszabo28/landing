import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Rocket, Mic, Newspaper, Zap } from "lucide-react";
import web3Services from "@/content/web3-services.json";

// Map icon strings to components
const iconMap: Record<string, any> = {
    Users,
    Rocket,
    Mic,
    Newspaper
};

export default function Web3Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>Lumina Digital | Web3 Growth & Community Strategies</title>
                <meta name="description" content="Decentralized community building and GTM strategies. We help blockchain protocols and dApps scale with authenticity." />
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
                            Growth for the<br />
                            <span className="text-primary">Decentralized Internet</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            We understand the nuances of blockchain communities. No bots, no hype—just real engagement and sustainable growth.
                        </p>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {web3Services.map((service, index) => {
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

                                    <Link href={`/web3/${service.slug}`}>
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
