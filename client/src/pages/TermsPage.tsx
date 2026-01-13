import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export default function TermsPage() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>{t("footer.terms")} | {t("nav.agency_name")}</title>
                <meta name="description" content={`Terms of Use for ${t("nav.agency_name")}.`} />
                <link rel="canonical" href="https://blockmarketing.digital/terms" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                <PageHeader
                    title={t("footer.terms")}
                    subtitle="Effective Date: January 1, 2026"
                />

                <section className="pb-24">
                    <div className="container max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="prose prose-slate lg:prose-xl max-w-none"
                        >
                            <h3>1. Acceptance of Terms</h3>
                            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

                            <h3>2. Eligibility</h3>
                            <p>You must be at least 18 years of age to use our services.</p>

                            <h3>3. Marketing Services</h3>
                            <p>BlockMarketing Digital provides a range of digital marketing services. While we strive for excellence, we do not guarantee specific ROI or results due to the dynamic nature of digital platforms.</p>
                            <ul>
                                <li><strong>Intellectual Property:</strong> Materials created for clients remain our property until full payment is received, at which point ownership transfers.</li>
                                <li><strong>Compliance:</strong> We effort to comply with platform policies (Google, Meta, etc.) but are not liable for platform side rejections or account suspensions.</li>
                            </ul>

                            <h3>4. User Obligations</h3>
                            <p>You agree to use the site for lawful purposes only and are responsible for any content you provide to us.</p>

                            <h3>5. Data Protection</h3>
                            <p>We comply with GDPR and other relevant data protection regulations. Please refer to our Privacy Policy for more details.</p>

                            <h3>6. Limitation of Liability</h3>
                            <p>BlockMarketing Digital shall not be liable for any incidental or consequential damages arising from the use of our services or website.</p>

                            <h3>7. Law & Jurisdiction</h3>
                            <p>These terms are governed by the laws of Hungary and the European Union. Any disputes will be settled in the competent courts of Hungary.</p>

                            <h3>8. Contact Information</h3>
                            <p>If you have any questions about these Terms, please contact us at hello@blockmarketing.digital.</p>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
