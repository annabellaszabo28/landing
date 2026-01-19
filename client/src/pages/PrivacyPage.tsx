import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function PrivacyPage() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{t("footer.privacy")} | {t("nav.agency_name")}</title>
                <meta name="description" content={`Privacy Policy for ${t("nav.agency_name")}.`} />
                <link rel="canonical" href="https://blockmarketingconsulting.com/privacy" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                <PageHeader
                    title={t("footer.privacy")}
                    subtitle="Last Updated: January 1, 2026"
                />

                <section className="pb-24">
                    <div className="container max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="prose prose-slate lg:prose-xl max-w-none"
                        >
                            <h3>1. Data Controller</h3>
                            <p>BlockMarketing Consulting is the data controller for the information collected on this website. You can reach us at hello@blockmarketingconsulting.com.</p>

                            <h3>2. Information We Collect</h3>
                            <p>We only collect information that you voluntarily provide to us via our contact form, such as your name, email address, and project details.</p>

                            <h3>3. Use of Information</h3>
                            <p>We use your information solely to respond to your inquiries and provide the requested marketing services. We do not sell or rent your personal data to third parties.</p>

                            <h3>4. Data Security</h3>
                            <p>We implement robust security measures to protect your personal information from unauthorized access or disclosure.</p>

                            <h3>5. Your Rights</h3>
                            <p>Under GDPR, you have the right to access, correct, or delete your personal data. You can exercise these rights at any time by contacting us.</p>

                            <h3>6. Cookies</h3>
                            <p>We use cookies to enhance your browsing experience. For more information, please see our Cookie Policy.</p>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
