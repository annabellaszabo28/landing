import { motion } from "framer-motion";

interface BrandedBlogCardProps {
    title: string;
    category: string;
    className?: string;
}

export default function BrandedBlogCard({ title, category, className = "" }: BrandedBlogCardProps) {
    return (
        <div className={`relative w-full aspect-[16/10] overflow-hidden bg-[#020626] text-white flex flex-col p-8 border border-white/10 rounded-2xl ${className}`}>
            {/* Design Powerhouse Pattern: High-end Grid */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, var(--brand-mint) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            {/* Top Bar: Logo & Circles */}
            <div className="relative z-10 flex items-center justify-between mb-auto w-full">
                <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-mint/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-mint/20" />
                </div>
                <div className="text-[10px] font-black tracking-[0.4em] uppercase text-white/60">
                    BM <span className="text-brand-mint">CONSULTING</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-brand-mint shadow-[0_0_15px_rgba(165,243,200,0.6)]" />
            </div>

            {/* Center Content: Impactful Title */}
            <div className="relative z-10 flex items-center justify-center flex-grow w-full my-6 font-heading">
                <div className="relative group w-full max-w-lg">
                    {/* Glass Container - Design House Style */}
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 text-center shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:bg-white/10 transition-all duration-500 transform group-hover:-translate-y-1">
                        <div className="text-[11px] font-black text-brand-mint mb-4 uppercase tracking-[0.3em]">
                            {category}
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold leading-[1.15] text-white tracking-tight">
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
