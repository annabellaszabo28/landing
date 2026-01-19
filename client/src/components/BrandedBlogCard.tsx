import { motion } from "framer-motion";

interface BrandedBlogCardProps {
    title: string;
    category: string;
    className?: string;
}

export default function BrandedBlogCard({ title, category, className = "" }: BrandedBlogCardProps) {
    return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden bg-primary text-white flex flex-col p-8 border border-white/10 ${className}`}>
            {/* Background Pattern - Hex/Grid Tech Look */}
            {/* Solid Brand Background */}

            {/* Top Bar: Logo & Circles */}
            <div className="relative z-10 flex items-center justify-between mb-auto w-full">
                <div className="flex items-center gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full border border-white/30" />
                    <div className="w-3 h-3 rounded-full border border-white/30" />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-slate-500">
                    BlockMarketing Consulting
                </div>
                <div className="w-2 h-2 rounded-full bg-white opacity-50" />
            </div>

            {/* Center Content: Title Pill */}
            <div className="relative z-10 flex items-center justify-center flex-grow w-full my-4">
                <div className="relative group w-full max-w-lg">
                    {/* No Gradient Glow */}

                    {/* Main Pill Container */}
                    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-center shadow-2xl">
                        <div className="text-xs font-mono text-white/60 mb-2 uppercase tracking-wide">
               // {category}
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold leading-tight text-white/90">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Category/Tag */}
            <div className="relative z-10 flex justify-end items-end w-full mt-auto opacity-40">
                <div className="text-[10px] uppercase tracking-widest border-t border-r border-white/20 pt-2 pr-2">
                    Read Article
                </div>
            </div>
        </div>
    );
}
