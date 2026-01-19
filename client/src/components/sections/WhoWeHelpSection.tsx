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
            {/* Retired Glow Effects */}

            {/* Top wave divider connecting to previous section */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[80px] w-[calc(100%+1.3px)] fill-slate-50">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container pt-32">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <p className="text-sm font-black tracking-[0.4em] text-brand-mint uppercase mb-6 text-center">
                        {content.section_title}
                    </p>
                    <h2 className="text-5xl md:text-8xl font-heading font-black mb-8 text-white tracking-tighter leading-[1.1]">
                        {content.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto leading-relaxed font-black">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-6xl mx-auto">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Rocket;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center group cursor-default"
                            >
                                <div className="mb-10 text-brand-mint p-10 rounded-[2.5rem] border border-white/10 bg-white/5 group-hover:border-brand-mint group-hover:bg-brand-mint/10 group-hover:shadow-[0_0_30px_rgba(165,243,200,0.3)] transition-all duration-500 group-hover:scale-105">
                                    <Icon size={80} strokeWidth={1} />
                                </div>
                                <h3 className="text-3xl font-black text-white group-hover:text-brand-mint transition-colors tracking-tight">
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
                        className="inline-block bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-white hover:scale-105 transition-all shadow-xl shadow-white/10"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </section >
    );
}
