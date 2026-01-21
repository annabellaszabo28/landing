import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Bridge from "@/components/Bridge";
import Footer from "@/components/Footer";
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
        <meta name="keywords" content="AI marketing agency, Web3 marketing, digital agency, seo agency, blockchain marketing, go-to-marketing strategist, generative AI, LLM agency, growth marketing" />
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

        <section className="py-32 w-full relative overflow-hidden bg-primary">
          <div className="container relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-heading font-black mb-10 text-white tracking-tighter leading-none">
                Ready to <span className="text-brand-mint italic">Scale?</span>
              </h2>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-bold">
                {content.cta_section.subtitle}
              </p>
              <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-primary px-12 py-5 rounded-full text-xl font-black hover:bg-brand-mint hover:text-primary hover:scale-105 shadow-2xl transition-all duration-300 tracking-tight uppercase">
                  Book a Strategy Session
                </button>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
