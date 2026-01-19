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
          title={content.header.title}
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

            {/* Partners Section */}
            <div className="mb-24">
              <h3 className="text-2xl font-bold text-center mb-12">{content.partners?.title}</h3>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {content.partners?.items.map((partner, i) => (
                  <span key={i} className="text-2xl font-heading font-bold text-slate-400 hover:text-primary transition-colors cursor-default">{partner}</span>
                ))}
              </div>
            </div>

            {/* Expertise Section */}
            <div className="grid md:grid-cols-3 gap-8">
              {content.expertise?.items.map((item, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold mb-4 text-primary font-heading">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Brand Dark CTA */}
          <section className="py-24 bg-brand-dark relative overflow-hidden mt-32">
            {/* Retired Glow Effects */}
            <div className="container px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white uppercase tracking-tight">Let's build the future together.</h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Whether you're a high-growth SME or a Web3 native protocol, we have the engine to scale your vision.</p>
              <Link href="/contact">
                <button className="bg-white text-slate-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-white hover:scale-105 transition-all shadow-xl shadow-white/10">
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </section>
      </main>

      <Footer />
    </div>
  );
}
