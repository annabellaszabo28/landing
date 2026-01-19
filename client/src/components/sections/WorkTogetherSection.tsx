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
        }[];
        cta_text: string;
    };
}

export default function WorkTogetherSection({ content }: WorkTogetherProps) {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <p className="text-sm font-bold tracking-[0.25em] text-orange-600 uppercase mb-4">
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
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 flex flex-col items-center text-center h-[340px] justify-center group border border-slate-100"
                            >
                                <div className="mb-8 text-orange-600 p-5 bg-orange-500/10 rounded-2xl group-hover:scale-110 transition-all duration-300">
                                    <Icon size={52} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 font-heading">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link href="/contact">
                        <button className="bg-[#E64A19] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#D84315] hover:shadow-lg transition-all transform hover:-translate-y-1 shadow-md shadow-orange-900/20">
                            {content.cta_text}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
