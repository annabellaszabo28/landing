import { motion } from "framer-motion";

interface BrandedBlogCardProps {
    title: string;
    category: string;
    className?: string;
}

export default function BrandedBlogCard({ title, category, className = "" }: BrandedBlogCardProps) {
    return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden bg-primary text-white flex flex-col p-8 border border-white/10 rounded-2xl ${className}`}>
            {/* Design Powerhouse Style: Clean & Deep */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none border-[20px] border-white/10" />

            {/* Top Bar: Logo & Status */}
            <div className="relative z-10 flex items-center justify-between mb-auto w-full">
                <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-mint" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="text-[10px] font-black tracking-[0.4em] uppercase text-white">
                    BM <span className="text-brand-mint">CONSULTING</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-mint" />
            </div>

            {/* Center Content: Impactful Title */}
            <div className="relative z-10 flex items-center justify-center flex-grow w-full my-6 font-heading">
                <div className="relative group w-full max-w-lg">
                    {/* Solid Glass Container - High Contrast */}
                    <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 text-center shadow-2xl group-hover:bg-white/10 transition-all duration-500 transform group-hover:-translate-y-1">
                        <div className="text-[11px] font-black text-brand-mint mb-4 uppercase tracking-[0.3em]">
                            {category}
                        </div>
                        <h3 className="text-xl md:text-3xl font-black leading-[1.15] text-white tracking-tight">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Status */}
            <div className="relative z-10 flex justify-end items-end w-full mt-auto">
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-mint/60 border-t border-white/10 pt-3">
                    DESIGN POWERHOUSE © 2026
                </div>
            </div>
        </div>
    );
}
