import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Box } from "lucide-react";
import heroBgLight from "@/assets/hero-bg-light.png";
import { Link } from "wouter";

export interface HeroProps {
  content?: {
    title: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
  };
}

export default function Hero({ content }: HeroProps) {
  if (!content) return null;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-50 text-slate-900 px-4 pt-32 pb-20">

      {/* Light Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgLight}
          alt="Abstract Light Background"
          className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="container relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-mint animate-pulse" />
            <span className="text-[13px] font-black text-primary uppercase tracking-[0.3em]">
              AI native marketing agency • <span className="text-brand-mint font-black">10+ Years of Expertise</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-tight">
            {content.title.split(':').map((part, i) => (
              <span key={i} className={i === 1 ? "block text-brand-mint pb-4" : "block mb-2"}>
                {part}
              </span>
            ))}
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Portal Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Web2 Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 text-left overflow-hidden shadow-sm"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
              <Layers size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-mint/10 rounded-2xl flex items-center justify-center text-brand-mint mb-8 group-hover:bg-brand-mint/20 transition-all duration-500">
                <Layers size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-primary tracking-tight">Web2 <span className="text-brand-mint">Marketing</span></h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                Data driven digital marketing supercharged by AI. SEO, PPC, and Social strategies that outperform the competition.
              </p>
              <Link href="/marketing">
                <a className="inline-flex items-center text-primary font-black text-lg group-hover:text-brand-mint transition-colors group-hover:translate-x-2 duration-300">
                  Explore Services <ArrowRight size={22} className="ml-2" strokeWidth={3} />
                </a>
              </Link>
            </div>
          </motion.div>

          {/* Web3 Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 text-left overflow-hidden shadow-sm"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
              <Box size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-brand-mint/10 rounded-2xl flex items-center justify-center text-brand-mint mb-8 group-hover:bg-brand-mint/20 transition-all duration-500">
                <Box size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-black mb-4 text-primary tracking-tight">Web3 <span className="text-brand-mint">Growth</span></h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                Decentralized community building and GTM strategies for the next generation of the internet. Built for scale.
              </p>
              <Link href="/web3">
                <a className="inline-flex items-center text-primary font-black text-lg group-hover:text-brand-mint transition-colors group-hover:translate-x-2 duration-300">
                  Explore Solutions <ArrowRight size={22} className="ml-2" strokeWidth={3} />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
