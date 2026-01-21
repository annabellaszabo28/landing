import { Lightbulb, Globe, HeartHandshake } from "lucide-react";
import { Link } from "wouter";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
    Lightbulb,
    Globe,
    HeartHandshake,
};

interface WorkTogetherProps {
    content: {
        section_title: string;
        title: string;
        subtitle: string;
        items: {
            title: string;
            icon: string;
            description?: string;
        }[];
        cta_text: string;
    };
}

export default function WorkTogetherSection({ content }: WorkTogetherProps) {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-sm font-black tracking-[0.25em] text-brand-mint uppercase mb-4">
                        {content.section_title}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 text-slate-900 tracking-tight leading-tight">
                        Built for <span className="text-brand-mint">Performance</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Lightbulb;
                        return (
                            <div key={index} className="group h-[360px] perspective-1000">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180"
                                >
                                    {/* Front Face */}
                                    <div className="absolute inset-0 backface-hidden bg-white p-12 rounded-[2.5rem] flex flex-col items-center justify-center border border-slate-100 shadow-xl shadow-slate-200/50 group-hover:border-brand-mint transition-colors duration-500">
                                        <div className="mb-8 text-primary p-6 bg-brand-mint/10 rounded-[2rem] group-hover:scale-110 group-hover:bg-brand-mint transition-all duration-500">
                                            <Icon size={48} strokeWidth={2} />
                                        </div>
                                        <h3 className="text-2xl font-black text-primary font-heading text-center tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Back Face */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary p-12 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-2xl shadow-primary/20">
                                        <div className="text-brand-mint mb-6">
                                            <Icon size={40} strokeWidth={2.5} />
                                        </div>
                                        <h3 className="text-xl font-black mb-4 font-heading text-white uppercase tracking-wider">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-white font-medium">
                                            {item.description || "Building superior systems for scale."}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <a
                        href="https://cal.com/bella-dwsbwo/introductory-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-mint text-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1 shadow-xl shadow-brand-mint/20"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </section>
    );
}
