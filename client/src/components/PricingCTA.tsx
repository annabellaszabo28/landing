import { Link } from "wouter";
import { motion } from "framer-motion";

interface PricingCTAProps {
    title?: string;
    subtitle?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    primaryHref?: string;
    secondaryHref?: string;
    theme?: 'light' | 'dark';
}

export default function PricingCTA({
    title = "Value-Driven Pricing.",
    subtitle = "We offer bespoke pricing models tailored to your specific goals, from fixed-project fees to performance-based incentives.",
    primaryButtonText = "Request Custom Quote",
    secondaryButtonText = "Contact Sales",
    primaryHref = "https://cal.com/bella-dwsbwo/introductory-call",
    secondaryHref = "/contact",
    theme = 'light'
}: PricingCTAProps) {
    const isDark = theme === 'dark';

    return (
        <section className={`py-24 ${isDark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
            <div className="container px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Investment</span>
                    <h2 className={`text-4xl md:text-[64px] font-black font-heading tracking-tighter mb-8 leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {title.split(' ').map((word, i) => (
                            word.toLowerCase() === 'pricing.' || word.toLowerCase() === 'growth.' || word.toLowerCase() === 'dominance.' ?
                                <span key={i} className="text-brand-mint italic tracking-tight">{word} </span> : word + ' '
                        ))}
                    </h2>
                    <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-xl font-medium mb-12`}>
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href={primaryHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="w-full px-10 py-5 bg-primary text-white font-black text-lg rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-primary/20 hover:-translate-y-1 min-w-[240px]">
                                {primaryButtonText}
                            </button>
                        </a>
                        <Link href={secondaryHref}>
                            <button className={`w-full px-10 py-5 ${isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'} font-black text-lg rounded-full border transition-all hover:-translate-y-1 min-w-[240px]`}>
                                {secondaryButtonText}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
