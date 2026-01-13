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
        <link rel="canonical" href="https://blockmarketing.digital/about" />
        <meta property="og:title" content={t("about_seo.title")} />
        <meta property="og:url" content="https://blockmarketing.digital/about" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title={content.header.title}
          subtitle={content.header.subtitle}
          gradient="from-blue-500 to-teal-400"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto py-12"
            >
              <p className="text-xl font-medium text-slate-800 leading-relaxed italic">
                "We are marketers, coders, strategists and product designers. We know our shit and have been in the industry for 10+ years."
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
