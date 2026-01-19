import { motion } from "framer-motion";
import heroBgLight from "@/assets/hero-bg-light.png";

export interface BridgeProps {
  content?: {
    title: string;
    subtitle: string;
    web2_label: string;
    web2_sublabel: string;
    web3_label: string;
    web3_sublabel: string;
  };
}

export default function Bridge({ content }: BridgeProps) {
  if (!content) return null;

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50 text-slate-900">
      {/* Light Background Image (Matching Hero) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBgLight}
          alt="Abstract Light Background"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-primary-light tracking-tight">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="relative h-40 md:h-64 flex items-center justify-center group max-w-5xl mx-auto">
          {/* Active Line Glow */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary/30 blur-[4px]" />
          <div className="absolute top-1/2 left-1/4 right-1/4 h-[4px] bg-primary/20 blur-[12px]" />

          {/* Content Container */}
          {/* Energy Flow */}
          <div className="absolute top-1/2 left-0 w-full h-px overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[-200px] w-[200px] h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-slide-beam" />
            <div className="absolute top-0 left-[-400px] w-[300px] h-[3px] bg-gradient-to-r from-transparent via-primary-light/50 to-transparent animate-slide-beam" style={{ animationDelay: '1s' }} />
          </div>

          {/* Labels Container */}
          <div className="flex justify-between items-center relative px-4 md:px-12">
            {/* Web2 Side */}
            <motion.div
              className="text-left cursor-default p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary-light/50 transition-all duration-500"
              whileHover={{ x: 5 }}
            >
              <div className="text-2xl font-bold text-primary-light mb-2 font-heading tracking-wide uppercase text-sm">{content.web2_label}</div>
              <div className="text-sm text-slate-400 font-medium">{content.web2_sublabel}</div>
            </motion.div>

            {/* Central Node */}
            <div className="relative z-20 mx-4">
              <motion.div
                className="w-24 h-24 bg-white rounded-full border border-slate-100 flex items-center justify-center shadow-xl relative"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full border border-primary/10 opacity-50" />
                <span className="text-4xl text-primary relative z-10 font-bold">∞</span>
              </motion.div>
            </div>

            {/* Web3 Side */}
            <motion.div
              className="text-right cursor-default p-8 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary-light/50 transition-all duration-500"
              whileHover={{ x: -5 }}
            >
              <div className="text-2xl font-bold text-primary-light mb-2 font-heading tracking-wide uppercase text-sm">{content.web3_label}</div>
              <div className="text-sm text-slate-400 font-medium">{content.web3_sublabel}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}
