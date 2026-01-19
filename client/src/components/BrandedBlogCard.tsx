import { motion } from "framer-motion";

interface BrandedBlogCardProps {
    title: string;
    category: string;
    className?: string;
}

export default function BrandedBlogCard({ title, category, className = "" }: BrandedBlogCardProps) {
    return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden bg-[#0a0a0a] text-white flex flex-col p-8 border border-slate-800 ${className}`}>
            {/* Background Pattern - Hex/Grid Tech Look */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-slate-900" />
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* Top Bar: Logo & Circles */}
            <div className="relative z-10 flex items-center justify-between mb-auto w-full">
                <div className="flex items-center gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full border border-white/30" />
                    <div className="w-3 h-3 rounded-full border border-white/30" />
                </div>
                <div className="text-xs font-bold tracking-widest uppercase text-slate-500">
                    BlockMarketing Consulting
                </div>
                <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            </div>

            {/* Center Content: Title Pill */}
            <div className="relative z-10 flex items-center justify-center flex-grow w-full my-4">
                <div className="relative group w-full max-w-lg">
                    {/* Outer Glow */}
                    <div className="absolute -inset-1 bg-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Main Pill Container */}
                    <div className="relative bg-[#111] bg-opacity-80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center shadow-2xl">
                        <div className="text-xs font-mono text-indigo-400 mb-2 uppercase tracking-wide">
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
