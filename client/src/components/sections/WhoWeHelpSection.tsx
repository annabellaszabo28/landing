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
        <section className="relative bg-[#362F2D] text-white pb-32 overflow-hidden">
            {/* Top wave divider connecting to previous section */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-[80px] w-[calc(100%+1.3px)] fill-[#FDFBF7]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>

            <div className="container pt-32">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <p className="text-sm font-bold tracking-widest text-[#E67E22] uppercase mb-4">
                        {content.section_title}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {content.title}
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        {content.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-5xl mx-auto">
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
                                <div className="mb-8 text-[#FDBA74] p-6 rounded-full border border-[#FDBA74]/20 group-hover:border-[#FDBA74] group-hover:bg-[#FDBA74]/10 transition-all duration-300">
                                    <Icon size={48} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
