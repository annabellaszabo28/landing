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
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-slate-900 tracking-tight">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-20 leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="relative h-40 md:h-64 flex items-center justify-center group max-w-5xl mx-auto">
          {/* Base Bridge Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200" />

          {/* Active Line Glow */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent blur-sm" />

          {/* Content Container */}
          <div className="w-full relative z-10">

            {/* Animated Energy Flow - Indigo Beam */}
            <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 pointer-events-none overflow-hidden">
              <motion.div
                className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-[2px]"
                animate={{ left: ["-20%", "120%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Labels Container */}
            <div className="flex justify-between items-center relative px-4 md:px-12">
              {/* Web2 Side */}
              <motion.div
                className="text-left cursor-default p-8 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-indigo-400/30 transition-all duration-500"
                whileHover={{ x: 5 }}
              >
                <div className="text-2xl font-bold text-slate-900 mb-2 font-heading tracking-wide">{content.web2_label}</div>
                <div className="text-sm text-slate-500">{content.web2_sublabel}</div>
              </motion.div>

              {/* Central Node */}
              <div className="relative z-20 mx-4">
                <motion.div
                  className="w-24 h-24 bg-white rounded-full border border-slate-100 flex items-center justify-center shadow-[0_4px_20px_rgba(99,102,241,0.15)] relative"
                  animate={{
                    boxShadow: ["0 4px 20px rgba(99,102,241,0.15)", "0 4px 40px rgba(99,102,241,0.25)", "0 4px 20px rgba(99,102,241,0.15)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full border border-indigo-50 opacity-50" />
                  <span className="text-4xl text-indigo-600 relative z-10 font-bold">∞</span>
                </motion.div>
              </div>

              {/* Web3 Side */}
              <motion.div
                className="text-right cursor-default p-8 rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-indigo-400/30 transition-all duration-500"
                whileHover={{ x: -5 }}
              >
                <div className="text-2xl font-bold text-slate-900 mb-2 font-heading tracking-wide">{content.web3_label}</div>
                <div className="text-sm text-slate-500">{content.web3_sublabel}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
