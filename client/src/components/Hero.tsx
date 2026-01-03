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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 px-4 pt-32 pb-20">

      {/* Light Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgLight}
          alt="Abstract Light Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40" />
      </div>

      <div className="container relative z-10 flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              AI-Native Agency • 10+ Years Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            {content.title.split(':').map((part, i) => (
              <span key={i} className={i === 1 ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-indigo-600 to-indigo-500 block" : ""}>
                {part}
              </span>
            ))}
          </h1>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
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
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 hover:border-indigo-400/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 text-left overflow-hidden shadow-sm"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
              <Layers size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform">
                <Layers size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Web2 Marketing</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Data-driven digital marketing supercharged by AI. SEO, PPC, and Social strategies that outperform the competition.
              </p>
              <Link href="/marketing">
                <a className="inline-flex items-center text-indigo-600 font-bold text-lg group-hover:translate-x-1 transition-transform">
                  Explore Services <ArrowRight size={20} className="ml-2" />
                </a>
              </Link>
            </div>
          </motion.div>

          {/* Web3 Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 hover:border-indigo-400/50 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 text-left overflow-hidden shadow-sm"
          >
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover:opacity-10 transition-opacity rotate-12">
              <Box size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform">
                <Box size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Web3 Growth</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Decentralized community building and GTM strategies for the next generation of the internet. Built for scale.
              </p>
              <Link href="/web3">
                <a className="inline-flex items-center text-indigo-600 font-bold text-lg group-hover:translate-x-1 transition-transform">
                  Explore Solutions <ArrowRight size={20} className="ml-2" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
