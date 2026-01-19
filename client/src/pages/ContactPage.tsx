import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";

// reCAPTCHA site key - replace with your actual key
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Load reCAPTCHA script
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, keyof FormData> = {
      "first-name": "firstName",
      "last-name": "lastName",
      "email": "email",
      "subject": "subject",
      "message": "message",
    };
    const field = fieldMap[id];
    if (field) {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Get reCAPTCHA token
      let recaptchaToken = "";
      if (RECAPTCHA_SITE_KEY && window.grecaptcha) {
        await new Promise<void>(resolve => window.grecaptcha.ready(resolve));
        recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" });
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>{t("contact.title")} | {t("nav.agency_name")}</title>
        <meta name="description" content={t("contact.description")} />
        <meta name="keywords" content="contact marketing agency, hire marketing team, book discovery call, AI marketing consultation" />
        <link rel="canonical" href="https://blockmarketingconsulting.com/contact" />
        <meta property="og:title" content={`${t("contact.title")} | ${t("nav.agency_name")}`} />
        <meta property="og:description" content={t("contact.description")} />
        <meta property="og:url" content="https://blockmarketingconsulting.com/contact" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title={t("contact.header_title")}
          subtitle={t("contact.header_subtitle")}
          gradient="from-primary to-primary"
        />

        <section className="pb-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-8">{t("contact.form_title")}</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{t("contact.email_label")}</h3>
                      <p className="text-slate-600 mb-2">Ready to scale? Connect with our team directly.</p>
                      <a href="mailto:hello@blockmarketingconsulting.com" className="text-primary font-medium hover:underline">
                        hello@blockmarketingconsulting.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-bold text-lg mb-4">FAQ</h3>
                  <p className="text-slate-600 mb-4">
                    Looking for quick answers? Check out our frequently asked questions before reaching out.
                  </p>
                  <a href="/#faq" className="text-primary font-medium hover:underline">
                    View FAQ &rarr;
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass p-8 md:p-10 rounded-3xl"
              >
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={64} className="text-green-500 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{t("contact.success_title")}</h3>
                    <p className="text-slate-600 mb-6">{t("contact.success_msg")}</p>
                    <Button onClick={() => setStatus("idle")} variant="outline">
                      {t("contact.send_another")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                        <AlertCircle size={20} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium text-slate-700">{t("contact.first_name")}</label>
                        <Input
                          id="first-name"
                          placeholder="Jane"
                          className="bg-white/50"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium text-slate-700">{t("contact.last_name")}</label>
                        <Input
                          id="last-name"
                          placeholder="Doe"
                          className="bg-white/50"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">{t("contact.email")}</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="jane@company.com"
                        className="bg-white/50"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">{t("contact.subject")}</label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        className="bg-white/50"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">{t("contact.message")}</label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project goals, timeline, and budget..."
                        className="min-h-[150px] bg-white/50"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === "loading"}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl shadow-lg shadow-primary/20"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t("contact.sending")}
                        </>
                      ) : (
                        t("contact.send")
                      )}
                    </Button>

                    {RECAPTCHA_SITE_KEY && (
                      <p className="text-xs text-slate-400 text-center">
                        This site is protected by reCAPTCHA and the Google{" "}
                        <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener">Privacy Policy</a> and{" "}
                        <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener">Terms of Service</a> apply.
                      </p>
                    )}
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

