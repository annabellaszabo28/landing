import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Database, Network } from "lucide-react";

export default function AINativePage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-black/10">
            <Helmet>
                <title>AI Native | We Ship AI | BlockMarketing Consulting</title>
                <meta name="description" content="Most agencies talk about AI. We ship AI. Native integration of LLMs, agentic workflows, and predictive growth models." />
                <meta name="keywords" content="AI marketing agency, agentic workflows, LLM integration, predictive growth, AI native marketing, generative AI strategies" />
                <meta property="og:title" content="AI Native | We Ship AI | BlockMarketing Consulting" />
                <meta property="og:description" content="Most agencies talk about AI. We ship AI. Native integration of LLMs, agentic workflows, and predictive growth models." />
                <meta property="og:url" content="https://blockmarketingconsulting.com/ai-native" />
            </Helmet>
            <Navigation />

            <main className="flex-grow pt-32 pb-20">

                {/* Hero Section */}
                <section className="container px-4 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold font-heading tracking-tighter mb-16 leading-[0.9]">
                            Most Agencies <br />
                            Talk About AI. <br />
                            We Ship AI.
                        </h1>

                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold mb-6">What does AI-Native Mean?</h2>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                                As a marketing agency positioned at the forefront of disruptive technology, we consistently integrate AI frameworks, machine learning models, and automation tools into our strategic workflows. By leveraging advanced data analytics, predictive modeling, and AI-driven content optimization, we ensure our campaigns are performance-driven, scalable, and tailored to maximize ROI for each client.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Tools Section */}
                <section className="container px-4 mb-32">
                    <h3 className="text-2xl font-bold mb-12 border-b-2 border-black pb-4 inline-block">Tools which we are utilizing.</h3>

                    <div className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-slate-200 divide-x divide-slate-200">
                        {["Lovable", "OpenRouter", "CURSOR", "n8n", "StackBlitz"].map((tool) => (
                            <div key={tool} className="aspect-square md:aspect-[4/3] flex items-center justify-center p-8 grayscale hover:grayscale-0 transition-all hover:bg-slate-50">
                                <span className="font-bold text-xl">{tool}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Overview Section */}
                <section className="container px-4">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-7xl md:text-9xl font-bold font-heading tracking-tighter sticky top-32"
                            >
                                Overview.
                            </motion.h2>

                            <div className="mt-16 text-slate-600 space-y-8 sticky top-[400px]">
                                <p>AI is evolving at an unprecedented pace, and at BlockMarketing, we remain at the forefront by integrating and automating workflows with large language models (LLMs).</p>
                                <p>Our campaigns leverage the capabilities of LLMs to enhance audience targeting, data processing, creative-direction, guerrilla marketing and strategic decision-making across our work.</p>
                                <ArrowRight className="w-8 h-8 text-black" />
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-16 pt-8">
                            {[
                                {
                                    id: "01",
                                    title: "Agentic Workflows",
                                    desc: "Agentic AI workflows that drive intelligent automation across operations, streamline business processes, enhance product showcasing, and maintain real-time data sync. Whether it's building dynamic content pipelines or running predictive growth models, our frameworks reduce manual overhead, accelerate go-to-market strategies, and scale products."
                                },
                                {
                                    id: "02",
                                    title: "Data-Driven Audience Targeting & Campaign Optimization",
                                    desc: "We enable agents to ingest, analyze, and act on live audience data, refining targeting, optimizing spend, and ensuring hyper-relevant targeting content delivery. This level of precision not only minimizes wasted budget but continuously enhances campaign performance through real-time feedback loops, improving key metrics such as engagement, CTRs, and conversion rates."
                                },
                                {
                                    id: "03",
                                    title: "AI Integration for Scalable Growth",
                                    desc: "We architect long-term AI strategies that align with their growth objectives. From building proprietary agents for internal use to designing modular AI workflows that can adapt across departments and campaigns, we guide clients in transforming their operations through intelligent systems."
                                }
                            ].map((item) => (
                                <div key={item.id} className="border-t border-slate-200 pt-8 group hover:bg-slate-50 transition-colors p-8 rounded-3xl">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-sm font-mono border border-black rounded-full w-8 h-8 flex items-center justify-center">{item.id}</span>
                                        <div className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Brand Dark CTA */}
                <section className="py-24 bg-brand-dark relative overflow-hidden mt-32">
                    <div className="glow-indigo top-0 right-0 -translate-y-1/2 translate-x-1/2" />
                    <div className="glow-blue bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-white">Ready for AI-Native growth?</h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Let's build your next-gen marketing engine together. We ship solutions, not just slide decks.</p>

                        <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-slate-900 font-bold text-xl rounded-full hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                                Book a Strategy Call
                            </button>
                        </a>
                    </div>
                </section>
                <Footer />
        </div>
    );
}
