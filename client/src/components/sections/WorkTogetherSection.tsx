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
                    <p className="text-sm font-bold tracking-[0.25em] text-indigo-600 uppercase mb-4">
                        {content.section_title}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-slate-900 tracking-tight leading-tight">
                        {content.title}
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Lightbulb;
                        return (
                            <div key={index} className="group h-[340px] perspective-1000">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ transformStyle: "preserve-3d" }}
                                    className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl shadow-slate-200/50 rounded-[2rem]"
                                >
                                    {/* Front Face */}
                                    <div className="absolute w-full h-full backface-hidden bg-white p-12 rounded-[2rem] flex flex-col items-center justify-center border border-slate-100">
                                        <div className="mb-8 text-indigo-600 p-5 bg-indigo-50 rounded-2xl group-hover:scale-110 transition-all duration-300">
                                            <Icon size={52} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-800 font-heading">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Back Face */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center text-white">
                                        <h3 className="text-xl font-bold mb-4 font-heading">
                                            {item.title}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-indigo-100">
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
                        href="https://cal.com/annabella-szabo-marketing/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-primary/90 hover:shadow-lg transition-all transform hover:-translate-y-1 shadow-md shadow-primary/25"
                    >
                        Book a Call
                    </a>
                </div>
            </div>
        </section>
    );
}
