import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { getPageContent } from "@/lib/content";
import { Plus, Minus } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface FAQItem {
    question: string;
    answer: string;
    category: string;
}

const CATEGORIES = ["Get Started", "Our Approach", "Services", "Measuring Results"];

export default function FAQPage() {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState("Get Started");
    const [openItems, setOpenItems] = useState<number[]>([]);
    const [faqItems, setFaqItems] = useState<FAQItem[]>([]);

    useEffect(() => {
        // In a real app, these would come from the JSON content
        // For now, mapping the existing common.json items to these categories
        setFaqItems([
            {
                question: "What kind of marketing do you specialize in?",
                answer: "We specialize in the intersection of traditional performance marketing and the emerging AI-native economy. This includes GEO (Generative Engine Optimization), AI-powered PPC, and full-stack product marketing for Web2 and Web3 brands.",
                category: "Get Started"
            },
            {
                question: "How do I get started working with you?",
                answer: "The process begins with a 30-minute discovery call where we audit your current growth architecture and identify leakage points. From there, we deliver a custom strategy roadmap. If aligned, we can begin high-impact execution within 72 hours.",
                category: "Get Started"
            },
            {
                question: "What challenges do you help businesses overcome?",
                answer: "We help brands solve distribution moats, scale user acquisition through predictive ads, and modernize their SEO strategies for the era of AI search (GEO). We also assist with the technical transition from Web2 to Web3 models.",
                category: "Our Approach"
            },
            {
                question: "What makes your approach different?",
                answer: "We combine over a decade of marketing experience with modern AI workflows that increase speed and precision. We're hands-on, accountable, and treat your growth like our own. Our team has worked with high-growth startups and leading blockchain protocols.",
                category: "Our Approach"
            },
            {
                question: "Who do you typically partner with?",
                answer: "We work with businesses of all sizes, from funded startups to established enterprises. What matters most is alignment on goals and a commitment to growth. Our strategies scale to match your budget and ambitions.",
                category: "Get Started"
            },
            {
                question: "What services do you offer?",
                answer: "We provide elite growth solutions across the entire digital stack. Our core expertise includes GEO & LLM Optimization (AI Search Visibility), Predictive Performance Ads (AI PPC), and Product Led Growth (PLG). We also provide full cycle Product Building (Websites, Apps, SaaS), Web3 Engineering (dApps, Smart Contracts), and CMO as a Service for strategic high-level guidance.",
                category: "Services"
            },
            {
                question: "How long before I see results?",
                answer: "Timeline depends on the service. PPC campaigns can generate leads within days. With our new LLM optimization and GEO strategies, clients typically see meaningful results in just 3-4 weeks, much faster than traditional SEO.",
                category: "Measuring Results"
            },
            {
                question: "How do you measure and report on results?",
                answer: "Transparency is core to how we work. You'll receive regular reports with clear KPIs, insights, and recommendations. We use data dashboards so you can track performance in real-time, and we schedule review calls to discuss progress and next steps.",
                category: "Measuring Results"
            }
        ]);
    }, []);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const filteredItems = faqItems.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>FAQ | BlockMarketing Consulting</title>
                <meta name="description" content="Common queries about our AI native marketing and Web3 growth services." />
            </Helmet>
            <Navigation />

            <main className="flex-grow pt-32 pb-24">
                <div className="container max-w-5xl">
                    <div className="text-center mb-16 px-4">
                        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-slate-900 leading-tight">
                            Got Questions? <span className="text-brand-mint">We've Got Answers</span>
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                            We've compiled these frequently asked questions to help you quickly understand our approach, services, and how we focus on your customers to deliver tangible results.
                        </p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setOpenItems([]);
                                }}
                                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeCategory === cat
                                        ? "bg-slate-900 text-white shadow-xl scale-105"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Accordion List */}
                    <div className="space-y-4">
                        <AnimatePresence mode="popLayout">
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.question}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                                    >
                                        <span className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-brand-mint transition-colors">
                                            {item.question}
                                        </span>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${openItems.includes(index) ? "rotate-180" : ""}`}>
                                            {openItems.includes(index) ? (
                                                <Minus className="text-brand-mint" size={20} />
                                            ) : (
                                                <Plus className="text-slate-400" size={20} />
                                            )}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openItems.includes(index) && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 md:p-8 pt-0 border-t border-slate-50 text-slate-600 text-lg leading-relaxed font-normal">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-slate-600 mb-8 font-bold text-lg">Your question isn't covered? We're ready to connect and provide a more personal response.</p>
                        <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                            <button className="bg-slate-900 text-white px-12 py-5 rounded-full text-lg font-black hover:bg-brand-mint hover:text-primary transition-all shadow-2xl hover:scale-105">
                                Get Started
                            </button>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
