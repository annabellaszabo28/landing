import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900 px-4">

      {/* Light Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBgLight}
          alt="Abstract Light Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Subtle overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40" />
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 flex flex-col items-center text-center pt-10 md:pt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-6xl mx-auto"
        >
          <div className="relative mb-8 text-center pt-24 md:pt-32">
            {/* Tagline */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  Next-Gen Digital Agency
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-tight mb-6">
              Scaling Brands <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-indigo-600 to-indigo-500">
                in the Age of AI & Web3
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              We define the digital frontier. From generative marketing to decentralized communities,
              we build the systems that power the next generation of business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/work">
                <Button size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-14 text-lg shadow-lg shadow-indigo-600/25 border border-indigo-500/30">
                  Our Work <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full border-slate-300 bg-white/80 hover:bg-white text-slate-700 px-8 h-14 text-lg backdrop-blur-sm shadow-sm">
                  View Services
                </Button>
              </Link>
            </div>
          </div>

        </motion.div>

        {/* Stats / Features Grid at Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl border-t border-slate-200 mt-auto bg-white/60 backdrop-blur-sm rounded-t-2xl">
          {[
            { label: "Reach Lift", value: "+400%", icon: "Chart", id: "01" },
            { label: "Leads Generated", value: "12.5k", icon: "Users", id: "02" },
            { label: "Execution Speed", value: "10x", icon: "Lightning", id: "03" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className={`text-left p-8 md:p-10 border-r border-slate-200 last:border-0 hover:bg-white/80 transition-colors group relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 text-xs text-slate-400 font-mono opacity-50">{stat.id}</div>
              <div className="h-6 w-6 text-indigo-600 mb-20 opacity-80 group-hover:opacity-100 transition-opacity">
                {/* Simple Icon Placeholder */}
                {i === 0 && <svg fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" /></svg>}
                {i === 1 && <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>}
                {i === 2 && <svg fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>}
              </div>
              <div className="text-5xl font-light text-slate-900 mb-2 tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
