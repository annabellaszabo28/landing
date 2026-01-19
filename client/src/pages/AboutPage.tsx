import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LoadingSpinner from "@/components/LoadingSpinner";
import { motion } from "framer-motion";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import type { AboutContent } from "@/types";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function AboutPage() {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState<AboutContent | null>(null);

  useEffect(() => {
    getPageContent<AboutContent>("about").then(setContent);
  }, [i18n.language]);

  if (!content) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>{t("about_seo.title")}</title>
        <meta name="description" content={t("about_seo.description")} />
        <meta name="keywords" content="about blockmarketing consulting, marketing team, AI agency experts, web3 specialists, digital agency san francisco" />
        <link rel="canonical" href="https://blockmarketingconsulting.com/about" />
        <meta property="og:title" content={t("about_seo.title")} />
        <meta property="og:description" content={t("about_seo.description")} />
        <meta property="og:url" content="https://blockmarketingconsulting.com/about" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title={
            <>
              About BlockMarketing <br />
              <span className="text-brand-mint italic">Consulting</span>
            </>
          }
          subtitle={content.header.subtitle}
        />

        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">{content.mission.title}</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {content.mission.content_1}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {content.mission.content_2}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={content.mission.image}
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Impact Quote / Sub-CTA */}
            <div className="mb-24 text-center">
              <span className="text-brand-mint font-black tracking-[0.4em] uppercase text-xs mb-6 block">Our Impact</span>
              <h2 className="text-4xl md:text-7xl font-black font-heading mb-8 tracking-tighter text-slate-900 leading-[1.1]">
                Bridging the Gap Between <span className="text-brand-mint">Insight</span> and <span className="text-brand-mint">Execution</span>.
              </h2>
            </div>

            {/* Expertise Section */}
            <div className="grid md:grid-cols-3 gap-8">
              {content.expertise?.items.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-brand-mint hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-12 h-12 bg-brand-mint/10 rounded-2xl flex items-center justify-center text-brand-mint mb-8 group-hover:bg-brand-mint transition-all duration-500 group-hover:text-primary">
                    <span className="font-black text-xl">{i + 1}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 text-primary font-heading tracking-tight">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Brand Dark CTA */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="container px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-black font-heading mb-8 text-white tracking-tighter leading-none">Ready to lead the <span className="text-brand-mint">Market?</span></h2>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-bold leading-relaxed">Whether you're a high-growth scale-up or a Web3 native protocol, we have the engine to scale your vision.</p>
            <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-primary px-12 py-5 rounded-full text-xl font-black hover:bg-brand-mint hover:text-primary hover:scale-105 transition-all shadow-2xl shadow-brand-mint/20 tracking-tight uppercase">
                Book a Strategy Call
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
