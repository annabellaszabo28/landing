import { motion } from "framer-motion";

interface BrandedBlogCardProps {
    title: string;
    category: string;
    className?: string;
}

export default function BrandedBlogCard({ title, category, className = "" }: BrandedBlogCardProps) {
    return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden bg-slate-900 text-white flex flex-col p-8 border border-white/10 rounded-2xl ${className}`}>
            {/* Tech Grid Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            {/* Top Bar: Logo & Circles */}
            <div className="relative z-10 flex items-center justify-between mb-auto w-full">
                <div className="flex items-center gap-2 opacity-50">
                    <div className="w-3 h-3 rounded-full border border-primary-light/30" />
                    <div className="w-3 h-3 rounded-full border border-primary-light/30" />
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-primary-light/60">
                    BlockMarketing Consulting
                </div>
                <div className="w-2 h-2 rounded-full bg-primary-light opacity-50" />
            </div>

            {/* Center Content: Title Pill */}
            <div className="relative z-10 flex items-center justify-center flex-grow w-full my-4">
                <div className="relative group w-full max-w-lg">
                    {/* Main Pill Container */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center shadow-2xl group-hover:bg-white/10 transition-colors">
                        <div className="text-[10px] font-mono text-primary-light mb-3 uppercase tracking-[0.2em] font-bold">
                            <span className="opacity-50">//</span> {category}
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold leading-tight text-white tracking-tight">
                            {title}
                        </h3>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Category/Tag */}
            <div className="relative z-10 flex justify-end items-end w-full mt-auto opacity-60">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-light border-t border-r border-white/10 pt-2 pr-2">
                    Read Article
                </div>
            </div>
        </div>
    );
}
