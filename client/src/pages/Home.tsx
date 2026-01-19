import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bridge from "@/components/Bridge";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import LoadingSpinner from "@/components/LoadingSpinner";
import WorkTogetherSection from "@/components/sections/WorkTogetherSection";
import WhoWeHelpSection from "@/components/sections/WhoWeHelpSection";
import TrustedBy from "@/components/TrustedBy";
import { Link } from "wouter";
import { getPageContent } from "@/lib/content";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import type { HomeContent } from "@/types";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    getPageContent<HomeContent>("home").then(setContent);
  }, [i18n.language]);

  if (!content) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>{t("home_seo.title")}</title>
        <meta name="description" content={t("home_seo.description")} />
        <meta name="keywords" content="AI marketing agency, Web3 marketing, digital agency, AI content, blockchain marketing, DAO community, generative AI, SEO agency, growth marketing" />
        <link rel="canonical" href="https://blockmarketingconsulting.com/" />
        <meta property="og:title" content={t("home_seo.title")} />
        <meta property="og:description" content={t("home_seo.description")} />
        <meta property="og:url" content="https://blockmarketingconsulting.com/" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <Hero content={content.hero} />
        <TrustedBy />
        <WorkTogetherSection content={content.work_together_section} />
        <WhoWeHelpSection content={content.who_we_help_section} />
        <Services content={content.services_section} />
        <Bridge content={content.bridge_section} />

        <section className="py-32 w-full relative overflow-hidden bg-brand-dark border-t border-white/5">
          {/* Background Effects */}
          <div className="glow-indigo top-0 right-0 -translate-y-1/2 translate-x-1/2" />
          <div className="glow-blue bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />

          <div className="container relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white tracking-tight leading-tight">
                {content.cta_section.title}
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                {content.cta_section.subtitle}
              </p>
              <Link href={content.cta_section.button_link}>
                <button className="bg-white text-slate-900 px-12 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-indigo-600 hover:scale-105 shadow-xl transition-all duration-300">
                  {content.cta_section.button_text}
                </button>
              </Link>
            </div>
          </div>
        </section>

        <FAQ content={content.faq_section} />
      </main>

      <Footer />
    </div>
  );
}
