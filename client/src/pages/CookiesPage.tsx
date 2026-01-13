import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function CookiesPage() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>Cookie Policy | {t("nav.agency_name")}</title>
                <meta name="description" content={`Cookie Policy for ${t("nav.agency_name")}.`} />
                <link rel="canonical" href="https://blockmarketing.digital/cookies" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                <PageHeader
                    title="Cookie Policy"
                    subtitle="How we use cookies to improve your experience."
                />

                <section className="pb-24">
                    <div className="container max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="prose prose-slate lg:prose-xl max-w-none"
                        >
                            <p>Cookies are small text files stored on your device that help us provide a better website experience.</p>

                            <h3>Types of Cookies We Use</h3>
                            <ul>
                                <li><strong>Essential:</strong> Necessary for the website to function correctly.</li>
                                <li><strong>Statistics:</strong> Help us understand how visitors interact with the site (e.g., Google Analytics).</li>
                                <li><strong>Marketing:</strong> Used to track the efficiency of our advertising campaigns.</li>
                                <li><strong>Functional:</strong> Remember your preferences, such as language settings.</li>
                            </ul>

                            <h3>Control Your Settings</h3>
                            <p>You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies entirely.</p>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
