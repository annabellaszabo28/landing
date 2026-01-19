import { motion } from "framer-motion";
import React from 'react';

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle: string;
}

export default function PageHeader({
  title,
  subtitle
}: PageHeaderProps) {
  return (
    <section className="relative pt-48 pb-24 overflow-hidden bg-white">
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="w-20 h-1 bg-brand-mint mx-auto mb-10 rounded-full" />
          <h1 className="text-5xl md:text-9xl font-heading font-black mb-10 text-slate-900 tracking-tighter leading-[0.9]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-bold">
            {subtitle}
          </p>
        </motion.div>
      </div>

      {/* Branded Subtle Patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    </section>
  );
}
