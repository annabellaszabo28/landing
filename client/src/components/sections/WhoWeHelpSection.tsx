import { Building2, Rocket, UserSquare2 } from "lucide-react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
    Building2,
    Rocket,
    UserSquare2,
};

interface WhoWeHelpProps {
    content: {
        section_title: string;
        title: string;
        subtitle: string;
        items: {
            title: string;
            icon: string;
        }[];
        cta_text: string;
    };
}

export default function WhoWeHelpSection({ content }: WhoWeHelpProps) {
    return (
        <section className="relative bg-brand-dark pb-32 overflow-hidden">
            {/* Branding Glows */}
            <div className="glow-indigo top-0 right-0 -translate-y-1/2 translate-x-1/2" />
            <div className="glow-blue bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />

            {/* Top wave divider connecting to previous section */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[80px] w-[calc(100%+1.3px)] fill-slate-50">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container pt-32">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <p className="text-sm font-bold tracking-[0.25em] text-indigo-500 uppercase mb-4">
                        {content.section_title}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white tracking-tight leading-tight">
                        {content.title}
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Rocket;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="mb-8 text-indigo-400 p-8 rounded-full border border-white/10 bg-white/5 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all duration-500">
                                    <Icon size={64} strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <a
                        href="https://cal.com/annabella-szabo-marketing/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 hover:scale-105 transition-all shadow-xl shadow-white/10"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </section>
    );
}
