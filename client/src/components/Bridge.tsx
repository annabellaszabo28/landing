import { motion } from "framer-motion";

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
    <section className="py-32 relative overflow-hidden bg-[#1E1E1E] text-white">
      {/* Background Gradient - Premium Dark Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E1E1E] via-[#252525] to-[#1E1E1E] opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white tracking-tight">
            {content.title}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-20 leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="relative h-40 md:h-64 flex items-center justify-center group max-w-5xl mx-auto">
          {/* Base Bridge Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-800" />

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
                className="text-left cursor-default p-6 rounded-2xl border border-white/5 bg-[#252525] hover:border-indigo-500/30 transition-all duration-500"
                whileHover={{ x: 5 }}
              >
                <div className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">{content.web2_label}</div>
                <div className="text-sm text-slate-400">{content.web2_sublabel}</div>
              </motion.div>

              {/* Central Node */}
              <div className="relative z-20 mx-4">
                <motion.div
                  className="w-20 h-20 bg-[#1E1E1E] rounded-full border border-indigo-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] relative"
                  animate={{
                    boxShadow: ["0 0 30px rgba(99,102,241,0.15)", "0 0 50px rgba(99,102,241,0.3)", "0 0 30px rgba(99,102,241,0.15)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <span className="text-3xl text-indigo-500 relative z-10">∞</span>
                </motion.div>
              </div>

              {/* Web3 Side */}
              <motion.div
                className="text-right cursor-default p-6 rounded-2xl border border-white/5 bg-[#252525] hover:border-indigo-500/30 transition-all duration-500"
                whileHover={{ x: -5 }}
              >
                <div className="text-2xl font-bold text-white mb-2 font-heading tracking-wide">{content.web3_label}</div>
                <div className="text-sm text-slate-400">{content.web3_sublabel}</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
