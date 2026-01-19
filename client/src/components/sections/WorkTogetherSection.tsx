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
        <section className="py-24 bg-[#FFE4D6]/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-4">
                        MIÉRT VÁLASSZ MINKET
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                        {content.title}
                    </h2>
                    <p className="text-lg text-slate-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {content.items.map((item, index) => {
                        const Icon = iconMap[item.icon] || Lightbulb;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-[300px] justify-center"
                            >
                                <div className="mb-6 text-[#F4A492]">
                                    <Icon size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-medium text-slate-800">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Link href="/contact">
                        <button className="bg-[#A61A1A] text-white px-10 py-3 rounded-full font-medium hover:bg-[#8B1515] transition-colors shadow-lg shadow-[#A61A1A]/20">
                            {content.cta_text}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
