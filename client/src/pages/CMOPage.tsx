import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, BarChart3, ArrowRight, Calculator } from "lucide-react";

export default function CMOPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-white bg-[#0f0f0f] selection:bg-indigo-500/30">
            <Helmet>
                <title>CMO as a Service | BlockMarketing Digital</title>
                <meta name="description" content="Expert Lead AI Growth. From Zero to Live in under 48 Hours. Powered by the World's Best AI Stack." />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-[#0f0f0f] to-[#0f0f0f]" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />

                    <div className="container relative z-10 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight mb-8 leading-tight">
                                CMO as a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-400">Service</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
                                Expert Lead AI Growth for ambitious startups. Replace an entire marketing department with one AI-native executive integration.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 mb-20">
                                <a href="#pricing">
                                    <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-slate-200 transition-all transform hover:-translate-y-1">
                                        View Pricing
                                    </button>
                                </a>
                                <a href="#contact">
                                    <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all">
                                        Book Discovery Call
                                    </button>
                                </a>
                            </div>
                        </motion.div>

                        {/* Stats / Proof */}
                        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                            <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-white/5">
                                <h3 className="text-2xl font-bold text-white mb-2">"Who are we?"</h3>
                                <p className="text-slate-400">We are the bridge between traditional business and the decentralized future. We build growth engines.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-white/5 bg-gradient-to-br from-[#1a1a1a] to-indigo-900/10">
                                <h3 className="text-2xl font-bold text-white mb-2">CMO vs Agency</h3>
                                <p className="text-slate-400">We don't just execute tasks; we maximize your valuation. Strategic leadership + Execution.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Speed Section */}
                <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
                    <div className="container px-4">
                        <h2 className="text-4xl md:text-7xl font-bold font-heading mb-16 max-w-4xl">
                            From Zero to Live in <br />
                            <span className="text-indigo-400">under 48 Hours.</span>
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Audit & Strategy", desc: "Deep dive into your current metrics and goals." },
                                { step: "02", title: "AI Stack Setup", desc: "Deploying our proprietary growth engine." },
                                { step: "03", title: "Creative Launch", desc: "High-level asset production and copy." },
                                { step: "04", title: "Scale", desc: "Automated optimization and reporting." }
                            ].map((item) => (
                                <div key={item.step} className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-indigo-500/30 transition-all">
                                    <div className="text-4xl font-bold text-indigo-500/20 mb-4">{item.step}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-24 bg-[#0a0a0a]">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">Transparent Pricing</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Choose Your Growth Engine</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Starter */}
                            <div className="p-8 rounded-3xl bg-[#141414] border border-white/5 flex flex-col hover:border-white/10 transition-all">
                                <h3 className="text-xl font-bold text-slate-300 mb-2">Startup</h3>
                                <div className="text-4xl font-bold text-white mb-6">€2,500<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-400 mb-8 border-b border-white/5 pb-8">Perfect for early stage validation and initial traction.</p>
                                <ul className="space-y-4 mb-8 flex-grow text-slate-300">
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> AI Marketing Setup</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> 1 Campaign Manager</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Weekly Reporting</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Basic Creative Suite</li>
                                </ul>
                                <button className="w-full py-4 rounded-xl border border-indigo-500 text-indigo-400 font-bold hover:bg-indigo-500/10 transition-all">Get Started</button>
                            </div>

                            {/* Scale - Highlighted */}
                            <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-indigo-500/50 flex flex-col relative shadow-[0_0_50px_rgba(99,102,241,0.1)]">
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                                <h3 className="text-xl font-bold text-white mb-2">Scale</h3>
                                <div className="text-4xl font-bold text-white mb-6">€4,500<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-400 mb-8 border-b border-white/10 pb-8">For growing teams ready to dominate their niche.</p>
                                <ul className="space-y-4 mb-8 flex-grow text-slate-200">
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400 shrink-0" size={20} /> Full CMO Strategy</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400 shrink-0" size={20} /> 2 Senior Marketers</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400 shrink-0" size={20} /> Omni-channel Growth</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400 shrink-0" size={20} /> Premium Content Engine</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-400 shrink-0" size={20} /> 24/7 Slack Access</li>
                                </ul>
                                <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25">Scale Now</button>
                            </div>

                            {/* Enterprise */}
                            <div className="p-8 rounded-3xl bg-[#141414] border border-white/5 flex flex-col hover:border-white/10 transition-all">
                                <h3 className="text-xl font-bold text-slate-300 mb-2">Enterprise</h3>
                                <div className="text-4xl font-bold text-white mb-6">€7,000<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-400 mb-8 border-b border-white/5 pb-8">Full department replacement for established orgs.</p>
                                <ul className="space-y-4 mb-8 flex-grow text-slate-300">
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Dedicated Growth Team</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Custom AI Stack Dev</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Unlimited Revisions</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Priority Support</li>
                                </ul>
                                <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-24 bg-[#0f0f0f] border-t border-white/5">
                    <div className="container px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Calculate Your Paid Impact</h2>
                        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#1a1a1a] border border-white/5">
                            <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
                                <div className="text-left">
                                    <div className="text-sm text-slate-400 mb-1">Monthly Budget</div>
                                    <div className="text-2xl font-bold text-white">€10,000</div>
                                </div>
                                <Calculator className="text-indigo-500" size={40} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-left">
                                    <div className="text-sm text-slate-400 mb-1">Estimated ROI</div>
                                    <div className="text-4xl font-bold text-indigo-400">€43,000</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-slate-400 mb-1">Growth</div>
                                    <div className="text-2xl font-bold text-emerald-400">+330%</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-6 text-center">*Estimates based on average agency performance data.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 bg-[#0a0a0a]">
                    <div className="container px-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Expert Lead AI Growth</h2>
                        <p className="text-xl text-slate-400 mb-12">Ready to scale? Book your discovery call today.</p>

                        <a href="https://calendly.com/annabella-szabo" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-slate-200 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                Book a Call Now
                            </button>
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
