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
        <section className="py-24 bg-[#FDFBF7]">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-bold tracking-widest text-orange-600 uppercase mb-4">
                        {content.section_title}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        {content.title}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Lightbulb;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center h-[320px] justify-center group border border-slate-100"
                            >
                                <div className="mb-8 text-[#E67E22] p-4 bg-orange-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link href="/contact">
                        <button className="bg-[#C0392B] text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-[#A93226] transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/20">
                            {content.cta_text}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
