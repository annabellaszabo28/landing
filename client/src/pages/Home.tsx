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
        <link rel="canonical" href="https://blockmarketing.digital/" />
        <meta property="og:title" content={t("home_seo.title")} />
        <meta property="og:description" content={t("home_seo.description")} />
        <meta property="og:url" content="https://blockmarketing.digital/" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <Hero content={content.hero} />
        <TrustedBy />
        <WorkTogetherSection content={content.work_together_section} />
        <WhoWeHelpSection content={content.who_we_help_section} />
        <Services content={content.services_section} />
        <Bridge content={content.bridge_section} />

        <section className="py-24 container text-center relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-12 rounded-3xl max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">{content.cta_section.title}</h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                {content.cta_section.subtitle}
              </p>
              <Link href={content.cta_section.button_link}>
                <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
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
