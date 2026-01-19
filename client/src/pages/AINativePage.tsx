import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Bot, Zap, Network, Database } from "lucide-react";

export default function AINativePage() {
    const aiTools = [
        "OpenAI", "Anthropic", "Google Gemini", "Cursor", "Lovable",
        "n8n", "Make", "Langchain", "OpenRouter", "Perplexity",
        "Midjourney", "ElevenLabs", "Replicate", "Hugging Face", "StackBlitz"
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-background selection:bg-primary/20">
            <Helmet>
                <title>AI Native Agency | Agentic Workflows & LLM Integration | BlockMarketing Consulting</title>
                <meta name="description" content="We build and deploy AI systems that drive real business results. Agentic workflows, LLM integration, predictive analytics, and intelligent automation at scale." />
                <meta name="keywords" content="AI marketing agency, agentic workflows, LLM integration, AI automation, generative AI, predictive analytics, intelligent automation, AI consulting" />
                <link rel="canonical" href="https://blockmarketingconsulting.com/ai-native" />
                <meta property="og:title" content="AI Native Agency | Agentic Workflows & LLM Integration | BlockMarketing Consulting" />
                <meta property="og:description" content="We build and deploy AI systems that drive real business results. Agentic workflows, LLM integration, predictive analytics, and intelligent automation at scale." />
                <meta property="og:url" content="https://blockmarketingconsulting.com/ai-native" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">

                {/* Hero Section */}
                <section className="pt-40 pb-24 relative overflow-hidden bg-slate-50">
                    <div className="container px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-5xl"
                        >
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-sm mb-6 block">Our Technology</span>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-10 leading-[0.95] text-primary">
                                Most Agencies<br />
                                Talk About AI.<br />
                                <span className="text-brand-mint">We Ship It.</span>
                            </h1>

                            <div className="max-w-3xl">
                                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                                    AI is not a buzzword for us. It's the foundation of everything we build. From recursive agentic workflows to custom LLM integrations, we architect intelligent systems that automate, optimize, and scale your operations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </section>

                {/* Tools Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-sm mb-4 block">Our Stack</span>
                            <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-primary mb-6">
                                Powered by <span className="text-brand-mint">Leading AI</span>
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                We leverage the best AI tools and frameworks to build solutions that deliver real results.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                            {aiTools.map((tool) => (
                                <div key={tool} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
                                    <span className="font-bold text-sm md:text-base text-center">{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="mb-16">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-sm mb-4 block">Capabilities</span>
                            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-primary">
                                What We <span className="text-brand-mint">Build</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Bot,
                                    title: "Agentic Workflows",
                                    desc: "Autonomous AI agents that execute complex tasks independently. From content generation pipelines to automated customer interactions, we build systems that work while you sleep."
                                },
                                {
                                    icon: Network,
                                    title: "LLM Integration",
                                    desc: "Custom integrations with OpenAI, Anthropic, and open source models. We build intelligent systems that understand context, generate insights, and drive decisions."
                                },
                                {
                                    icon: Database,
                                    title: "Predictive Analytics",
                                    desc: "Data driven forecasting and optimization. We build models that predict customer behavior, optimize spend, and identify growth opportunities before your competitors."
                                },
                                {
                                    icon: Zap,
                                    title: "Intelligent Automation",
                                    desc: "End to end workflow automation that eliminates manual overhead. From lead scoring to content distribution, we automate the repetitive so you can focus on strategy."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Generative AI",
                                    desc: "Production ready generative systems for content, design, and code. We build AI that creates at scale while maintaining your brand voice and quality standards."
                                },
                                {
                                    icon: Cpu,
                                    title: "Custom AI Products",
                                    desc: "Bespoke AI solutions built for your specific needs. From internal tools to customer facing products, we architect and ship AI that gives you a competitive edge."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-10 rounded-[2rem] border border-slate-100 hover:border-brand-mint hover:shadow-2xl transition-all duration-500 group"
                                >
                                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-brand-mint mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={28} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Brand Dark CTA */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black font-heading mb-8 tracking-tighter text-white leading-none">
                            Ready for <span className="text-brand-mint">AI Native</span> Growth?
                        </h2>
                        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
                            We ship solutions, not slide decks. Let's build your next gen marketing engine together.
                        </p>

                        <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-primary font-black text-xl rounded-full hover:bg-brand-mint hover:text-primary transition-all transform hover:scale-105 shadow-2xl shadow-white/10 tracking-tight uppercase">
                                Book a Strategy Call
                            </button>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
