import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    Cpu, Sparkles, Bot, Zap, Network, Database,
    Share2, Search, Target, Mail, BarChart3,
    Video, Image as ImageIcon, MessageSquare,
    CheckCircle2, XCircle, ArrowRight
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AINativePage() {
    const toolCategories = [
        {
            name: "Content & Strategy",
            tools: ["ChatGPT", "Claude", "Jasper AI", "Copy.ai", "MarketMuse", "Surfer SEO"]
        },
        {
            name: "Marketing Automation",
            tools: ["HubSpot AI", "ActiveCampaign", "Zapier", "Make", "Salesforce"]
        },
        {
            name: "Campaign Optimization",
            tools: ["AdCreative.ai", "Albert.ai", "Persado", "Google AI", "Meta Lattice"]
        },
        {
            name: "Analytics & Intelligence",
            tools: ["Browse AI", "Brand24", "Seventh Sense", "Mixpanel", "Amplitude"]
        },
        {
            name: "Creative Production",
            tools: ["Midjourney", "RunwayML", "PhotoRoom", "DALL-E 3", "Descript"]
        },
        {
            name: "Developer Tools",
            tools: ["Cursor", "n8n", "OpenRouter", "StackBlitz", "Lovable"]
        }
    ];

    const capabilities = [
        {
            icon: Sparkles,
            title: "AI Content Generation",
            desc: "Scale your content output by 340% while maintaining absolute brand voice consistency through custom-tuned LLMs."
        },
        {
            icon: Target,
            title: "Predictive Optimization",
            desc: "Our machine learning models analyze live data to predict high-intent behavior and optimize campaigns in real-time."
        },
        {
            icon: Bot,
            title: "Marketing Automation",
            desc: "Deploy intelligent AI agents that handle lead scoring, sequence timing, and multi-channel distribution autonomously."
        },
        {
            icon: BarChart3,
            title: "AI-Powered Analytics",
            desc: "Transform raw data into actionable growth strategies using advanced sentiment analysis and predictive churn modeling."
        },
        {
            icon: Search,
            title: "Intelligent Search Growth",
            desc: "Dominate AI-search results (SGE) through semantic optimization and entity-based content architecture."
        }
    ];

    const faqItems = [
        {
            q: "What makes you AI-native vs. AI-assisted?",
            a: "Most agencies use AI as a better 'spellcheck'. We are AI-native, meaning every process from audience research to campaign bidding is built on machine learning frameworks and autonomous agentic workflows. We don't just use AI; we architect with it."
        },
        {
            q: "Which AI tools do you use and why?",
            a: "We use a modular stack including OpenAI, Anthropic, and custom-built agents. We select tools based on data privacy, output reliability, and integration capabilities to ensure your growth engine is scalable and secure."
        },
        {
            q: "How do you ensure AI-generated content quality?",
            a: "We use a 'Human-in-the-Loop' (HITL) system. Our AI handles the heavy lifting of generation and data analysis, while our senior strategists provide the creative direction and quality control traditional brands expect."
        },
        {
            q: "Can AI really replace human marketers?",
            a: "AI doesn't replace marketers; marketers using AI replace those who don't. We use AI to eliminate the 70% of manual tasks that bog down traditional agencies, allowing our team to focus purely on high-level strategy."
        }
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-primary/20">
            <Helmet>
                <title>AI Marketing Agency | AI-Native Growth & Automation | BlockMarketing Consulting</title>
                <meta name="description" content="AI-native marketing agency deploying machine learning automation, predictive analytics, and AI-powered campaigns. 70% faster execution, 4.2x better ROAS." />
                <meta name="keywords" content="AI marketing agency, marketing automation, machine learning marketing, predictive analytics, AI content generation, AI SEO" />
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
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-6 block">• ARTIFICIAL INTELLIGENCE POWERED</span>
                            <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-10 leading-[0.95] text-slate-900">
                                AI Marketing Agency.<br />
                                <span className="text-brand-mint">Built for Scale.</span>
                            </h1>

                            <div className="max-w-3xl">
                                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                                    As an AI-native marketing agency at the forefront of marketing automation, we integrate AI frameworks, machine learning models, and intelligent automation into every campaign. We deliver performance-driven, scalable growth that maximizes ROI.
                                </p>
                            </div>

                            {/* Rapid Results */}
                            <div className="flex flex-wrap gap-8 py-8 border-t border-slate-200 mt-12">
                                <div>
                                    <div className="text-2xl font-black text-primary">70%</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Manual Task Reduction</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-primary">4.2x</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg. ROAS Improvement</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-primary">2.4M+</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">AI Generated Assets</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Service Cards */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="max-w-4xl mb-16">
                            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-slate-900 leading-none mb-6">
                                AI Marketing<br />
                                <span className="text-brand-mint uppercase tracking-tight">Automation at Scale.</span>
                            </h2>
                            <p className="text-slate-600 text-xl font-medium">We replace manual guesswork with intelligent execution systems.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {capabilities.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-brand-mint transition-all duration-500 group flex flex-col h-full"
                                >
                                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-brand-mint mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={28} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-black text-primary mb-4 tracking-tight uppercase leading-tight">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium mb-8 flex-grow">{item.desc}</p>
                                    <div className="text-brand-mint font-black text-xs uppercase tracking-[0.2em]">Operational Excellence</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Traditional Agency vs.<br /><span className="text-brand-mint text-5xl md:text-7xl">AI-Native</span></h2>
                        </div>

                        <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="p-8 font-black uppercase tracking-widest text-sm">Capability</th>
                                        <th className="p-8 font-black uppercase tracking-widest text-sm opacity-50">Traditional</th>
                                        <th className="p-8 font-black uppercase tracking-widest text-sm text-brand-mint">BlockMarketing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { cap: "Campaign Setup", trad: "2-4 Weeks", ai: "48 Hours" },
                                        { cap: "Content Production", trad: "Manual Process", ai: "AI-Automated" },
                                        { cap: "Optimization", trad: "Monthly Reviews", ai: "Real-time ML" },
                                        { cap: "Scalability", trad: "Linear Growth", ai: "Exponential" },
                                        { cap: "Cost Structure", trad: "High Overhead", ai: "Efficient Automation" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-t border-slate-100">
                                            <td className="p-8 font-black text-primary uppercase text-xs tracking-wider">{row.cap}</td>
                                            <td className="p-8 text-slate-400 font-medium italic">{row.trad}</td>
                                            <td className="p-8 text-primary font-black flex items-center gap-3">
                                                <CheckCircle2 className="text-brand-mint" size={18} strokeWidth={3} />
                                                {row.ai}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* New Technology Stack Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container px-4 relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-sm mb-4 block">Our Infrastructure</span>
                            <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-slate-900">
                                Our AI Marketing<br />
                                <span className="text-brand-mint uppercase tracking-tight">Technology Stack</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                            {toolCategories.map((cat, i) => (
                                <div key={i} className="space-y-6">
                                    <h3 className="text-xl font-black text-primary uppercase tracking-widest border-b-2 border-brand-mint pb-3 inline-block">
                                        {cat.name}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {cat.tools.map(tool => (
                                            <span key={tool} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-600 hover:border-brand-mint hover:bg-white transition-all cursor-default">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results/Metrics Section */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="container px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">AI-Powered <span className="text-brand-mint">Results.</span></h2>
                            <p className="text-slate-400 text-xl font-medium">Replacing manual guesswork with deterministic output.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center group hover:border-brand-mint/50 transition-all duration-500">
                                <span className="text-6xl font-black text-brand-mint mb-4 block group-hover:scale-110 transition-transform">340%</span>
                                <h3 className="text-xl font-bold mb-2">Increase in Content Output</h3>
                                <p className="text-slate-400 text-sm font-medium">AI-generated content while maintaining 100% brand voice consistency.</p>
                            </div>
                            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center group hover:border-brand-mint/50 transition-all duration-500">
                                <span className="text-6xl font-black text-brand-mint mb-4 block group-hover:scale-110 transition-transform">4.2x</span>
                                <h3 className="text-xl font-bold mb-2">ROAS Improvement</h3>
                                <p className="text-slate-400 text-sm font-medium">Machine learning optimization across 100+ multi-channel campaigns.</p>
                            </div>
                            <div className="p-10 bg-white/5 rounded-3xl border border-white/10 text-center group hover:border-brand-mint/50 transition-all duration-500">
                                <span className="text-6xl font-black text-brand-mint mb-4 block group-hover:scale-110 transition-transform">70%</span>
                                <h3 className="text-xl font-bold mb-2">Time Reduction</h3>
                                <p className="text-slate-400 text-sm font-medium">Automated workflows replacing manual marketing and operations tasks.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Common Questions</span>
                                <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tighter text-slate-900 leading-none">
                                    Frequently Asked<br />
                                    <span className="text-brand-mint uppercase tracking-tight">Questions</span>
                                </h2>
                            </div>

                            <Accordion type="single" collapsible className="space-y-4">
                                {faqItems.map((item, i) => (
                                    <AccordionItem
                                        key={i}
                                        value={`item-${i}`}
                                        className="bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-2 overflow-hidden"
                                    >
                                        <AccordionTrigger className="text-xl font-black text-primary py-6 hover:no-underline text-left uppercase tracking-tight">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-lg leading-relaxed font-medium pb-8 prose-strong:font-normal prose-b:font-normal">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-32 bg-primary relative overflow-hidden">
                    <div className="container px-4 text-center relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black font-heading mb-8 tracking-tighter text-white leading-none">
                            Ready for <span className="text-brand-mint">AI Native</span> Growth?
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop using AI as a tool. Start using it as your foundation. Let's build your next-gen marketing engine together.
                        </p>

                        <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-primary font-black text-xl rounded-full hover:bg-brand-mint hover:text-primary transition-all transform hover:scale-105 shadow-2xl shadow-white/10 tracking-tighter uppercase">
                                Book Your AI Strategy Session
                            </button>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
