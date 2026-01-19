import { useParams, Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
    ArrowLeft, CheckCircle2, Zap
} from "lucide-react";
import web2Services from "@/content/web2-services.json";
import web3Services from "@/content/web3-services.json";
import { ServiceDetail as ServiceDetailType } from "@/types";

const AIEngineVisual = ({ type, icon, label }: { type: string, icon?: string, label?: string }) => {
    const isWeb3 = type === "web3";
    // @ts-ignore
    const Icon = Icons[icon] || Zap;

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${isWeb3 ? 'from-purple-500/20 to-pink-500/10' : 'from-indigo-500/20 to-blue-500/10'} rounded-3xl blur-3xl opacity-30`} />

            {/* Orbiting Elements */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 10 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div
                        className={`w-[${300 + i * 80}px] h-[${300 + i * 80}px] rounded-full border border-slate-200/20`}
                        style={{ width: 300 + i * 80, height: 300 + i * 80 }}
                    />
                </motion.div>
            ))}

            {/* Core Box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-64 h-64 flex flex-col items-center justify-center"
            >
                <div className={`absolute inset-0 rounded-[2.5rem] border border-white/20 backdrop-blur-3xl shadow-2xl bg-white/5 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${isWeb3 ? 'from-purple-500/10 to-pink-500/10' : 'from-indigo-500/10 to-blue-500/10'}`} />
                </div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-20 flex flex-col items-center"
                >
                    <div className={`p-6 rounded-3xl bg-white/10 border border-white/20 mb-6 shadow-xl`}>
                        <Icon size={48} className={isWeb3 ? 'text-pink-500' : 'text-indigo-500'} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-white/80 uppercase">
                        {label?.split(' ')[0]} Engine
                    </span>
                </motion.div>

                {/* Scanning Line */}
                <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"
                />
            </motion.div>

            {/* Floating Data Nodes */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                    }}
                    className={`absolute px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-mono text-white/50 whitespace-nowrap`}
                    style={{
                        top: `${15 + Math.random() * 70}%`,
                        left: `${10 + Math.random() * 80}%`,
                    }}
                >
                    {isWeb3 ? `0x${(i * 1234).toString(16)}` : `NODE_${i * 1024}`}
                </motion.div>
            ))}
        </div>
    );
};

export default function ServiceDetail({ type }: ServiceDetailProps) {
    const { slug } = useParams();

    const services = type === "web2" ? web2Services : web3Services;
    const service = services.find(s => s.slug === slug) as ServiceDetailType | undefined;

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href={type === "web2" ? "/marketing" : "/web3"}>
                        <a className="text-primary hover:underline">Back to Services</a>
                    </Link>
                </div>
            </div>
        );
    }

    const backLink = type === "web2" ? "/marketing" : "/web3";
    const sectionTitle = type === "web2" ? "Agile Web2 Marketing" : "Decentralized Growth";

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{service.title} | BlockMarketing Digital</title>
                <meta name="description" content={service.description} />
            </Helmet>
            <Navigation />

            <main className="flex-grow pt-24 pb-20">
                <div className="container px-4">

                    <Link href={backLink}>
                        <a className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
                            <ArrowLeft size={16} className="mr-2" /> Back to {type === "web2" ? "Marketing" : "Web3"}
                        </a>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 tracking-wide uppercase">
                                {sectionTitle}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                                {service.title}
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                                {service.longDescription}
                            </p>

                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 mb-10 shadow-sm">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Zap size={20} className="text-primary" /> Core Deliverables
                                </h3>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-slate-700 text-sm font-medium">
                                            <CheckCircle2 size={16} className="text-primary mr-3 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://cal.com/annabella-szabo-marketing/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 inline-block text-center"
                                >
                                    Book a Discovery Call
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Column: Premium Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <AIEngineVisual type={type} icon={service.icon} label={service.title} />

                            {/* Proven Results Stats */}
                            {service.results && (
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white/90 backdrop-blur-2xl border border-slate-200 rounded-3xl p-6 shadow-2xl space-y-4">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-2">Proven Impact</h4>
                                    <div className="flex justify-around items-center">
                                        {service.results.map((res, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-3xl font-bold text-slate-900">{res.value}</div>
                                                <div className="text-[10px] text-slate-500 font-semibold uppercase">{res.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* How We Work Section */}
                    {service.process && (
                        <motion.section
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-t border-slate-200 pt-24"
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold mb-4">How We Work</h2>
                                <p className="text-slate-500 max-w-2xl mx-auto">Our recursive AI methodology ensures continuous optimization and predictive results.</p>
                            </div>

                            <div className="grid md:grid-cols-4 gap-8">
                                {service.process.map((step, i) => (
                                    <div key={i} className="group relative">
                                        <div className="text-5xl font-black text-slate-50 mb-4 transition-colors group-hover:text-indigo-50">
                                            {step.step}
                                        </div>
                                        <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                        {i < 3 && (
                                            <div className="hidden md:block absolute top-10 -right-4 w-8 h-px bg-slate-200" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
