import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Rocket, BarChart3, Calculator, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function CMOPage() {
    const [budget, setBudget] = useState(5000);
    const estROI = Math.floor(budget * 4.2);
    const estLeads = Math.floor(budget / 45); // Approx €45 CPA

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-primary/20">
            <Helmet>
                <title>Fractional CMO Services for Web3 & AI | BlockMarketing</title>
                <meta name="description" content="Expert Fractional CMO services. Scale your Web3 or AI startup with a dedicated marketing leadership team. We replace an entire department for the cost of one hire." />
                <meta name="keywords" content="fractional CMO, marketing leadership, Web3 CMO, AI marketing director, startup marketing help, growth executive" />
                <meta property="og:title" content="Fractional CMO Services for Web3 & AI | BlockMarketing" />
                <meta property="og:description" content="Expert Fractional CMO services. Scale your Web3 or AI startup with a dedicated marketing leadership team." />
                <meta property="og:url" content="https://blockmarketing.digital/cmo" />
            </Helmet>
            <Navigation />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
                    <div className="absolute inset-0 bg-white" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />

                    <div className="container relative z-10 px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6 tracking-wide uppercase">
                                Leadership as a Service
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-8 leading-[1.1]">
                                The Impact of a CMO.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Without the Equity.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
                                Expert Fractional CMO services for ambitious Web3 & AI startups. We replace an entire marketing department with one integrated growth engine.
                            </p>

                            <div className="flex flex-col md:flex-row gap-6 mb-20">
                                <a href="#pricing">
                                    <button className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:-translate-y-1">
                                        View Pricing Plans
                                    </button>
                                </a>
                                <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold text-lg rounded-full hover:bg-slate-50 hover:text-primary transition-all">
                                        Book Discovery Call
                                    </button>
                                </a>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
                            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Why Fractional?</h3>
                                <p className="text-slate-500 leading-relaxed">Top-tier CMOs cost $250k/year + equity. We deliver the same strategic leadership and execution for a flat monthly fee. No equity, no onboarding time.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white shadow-xl shadow-indigo-500/20">
                                <h3 className="text-2xl font-bold mb-2">The AI Advantage</h3>
                                <p className="text-indigo-100 leading-relaxed">We don't just hire people; we deploy agents. Our AI-native stack allows us to execute 10x faster than traditional agencies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Speed Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4">
                        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                                    From Zero to Live in <br />
                                    <span className="text-primary">under 48 Hours.</span>
                                </h2>
                                <p className="text-slate-500 text-lg">Our onboarding isn't weeks. It's hours.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Audit & Strategy", desc: "Deep dive into your current metrics, KPIs, and market positioning." },
                                { step: "02", title: "AI Stack Deployment", desc: "Setting up our proprietary growth engine and automation tools." },
                                { step: "03", title: "Creative Sprint", desc: "High-velocity production of ad creatives, landing pages, and copy." },
                                { step: "04", title: "Scale & Optimize", desc: "Real-time performance tracking and automated budget allocation." }
                            ].map((item) => (
                                <div key={item.step} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg transition-all group">
                                    <div className="text-5xl font-black text-slate-200 mb-6 group-hover:text-indigo-100 transition-colors">{item.step}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interactive Calculator Section */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/20 blur-[120px] rounded-full" />

                    <div className="container px-4 relative z-10">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">ROI Calculator</span>
                                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Calculate Your Potential Impact</h2>
                                <p className="text-slate-400">See what our AI-driven performance engine can deliver for your budget.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                                <div className="mb-12">
                                    <div className="flex justify-between items-end mb-6">
                                        <label className="text-slate-300 font-medium">Monthly Marketing Budget</label>
                                        <div className="text-3xl font-bold font-heading text-white">€{budget.toLocaleString()}</div>
                                    </div>
                                    <input
                                        type="range"
                                        min="1000"
                                        max="50000"
                                        step="500"
                                        value={budget}
                                        onChange={(e) => setBudget(Number(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                                        <span>€1,000</span>
                                        <span>€50,000+</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="flex justify-center mb-4 text-indigo-400"><TrendingUp size={32} /></div>
                                        <div className="text-sm text-slate-400 mb-1">Est. Revenue Impact</div>
                                        <div className="text-3xl font-bold text-white">€{estROI.toLocaleString()}</div>
                                        <div className="text-xs text-emerald-400 mt-2 font-bold">4.2x ROAS</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="flex justify-center mb-4 text-blue-400"><Users size={32} /></div>
                                        <div className="text-sm text-slate-400 mb-1">Est. Qualified Leads</div>
                                        <div className="text-3xl font-bold text-white">~{estLeads.toLocaleString()}</div>
                                        <div className="text-xs text-slate-500 mt-2">@ €45 CPA</div>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                                        <div className="flex justify-center mb-4 text-purple-400"><Zap size={32} /></div>
                                        <div className="text-sm text-slate-400 mb-1">Campaign Velocity</div>
                                        <div className="text-3xl font-bold text-white">2 Days</div>
                                        <div className="text-xs text-slate-500 mt-2">Launch Time</div>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 mt-8 text-center italic">*Estimates based on aggregated performance data from our Web3 & SaaS client portfolio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-24 bg-slate-50">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Transparent Pricing</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Choose Your Growth Engine</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Starter */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col hover:shadow-xl transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Startup</h3>
                                <div className="text-4xl font-bold text-slate-900 mb-6">€2,500<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-500 mb-8 border-b border-slate-100 pb-8">Perfect for early stage validation and initial traction.</p>
                                <ul className="space-y-4 mb-8 flex-grow text-slate-600 font-medium">
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> AI Marketing Setup</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> 1 Campaign Manager</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Weekly Reporting</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Typeform/CRM Setup</li>
                                </ul>
                                <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-4 rounded-xl border border-indigo-200 text-indigo-600 font-bold hover:bg-indigo-50 transition-all">Get Started</button>
                                </a>
                            </div>

                            {/* Scale - Highlighted */}
                            <div className="p-8 rounded-3xl bg-white border-2 border-indigo-600 flex flex-col relative shadow-2xl shadow-indigo-200 scale-105 z-10">
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl">MOST POPULAR</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Scale</h3>
                                <div className="text-4xl font-bold text-slate-900 mb-6">€4,500<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-500 mb-8 border-b border-slate-100 pb-8">For growing teams ready to dominate their niche.</p>
                                <ul className="space-y-4 mb-8 flex-grow text-slate-700 font-bold">
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-600 shrink-0" size={20} /> Full Fractional CMO</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-600 shrink-0" size={20} /> 2 Senior Marketers</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-600 shrink-0" size={20} /> Omni-channel Growth</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-600 shrink-0" size={20} /> Premium Content Engine</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-600 shrink-0" size={20} /> 24/7 Slack Access</li>
                                </ul>
                                <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 transform hover:-translate-y-0.5">Scale Now</button>
                                </a>
                            </div>

                            {/* Enterprise */}
                            <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col hover:shadow-xl transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                                <div className="text-4xl font-bold text-slate-900 mb-6">€7,000<span className="text-lg text-slate-500 font-normal">/mo</span></div>
                                <p className="text-slate-500 mb-8 border-b border-slate-100 pb-8">Full department replacement for established orgs.</p>
                                <ul className="space-y-4 mb-8 flex-grow text-slate-600 font-medium">
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Dedicated Growth Squad</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Custom AI Agents</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Unlimited Revisions</li>
                                    <li className="flex gap-3"><CheckCircle2 className="text-indigo-500 shrink-0" size={20} /> Priority Support</li>
                                </ul>
                                <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                                    <button className="w-full py-4 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">Contact Sales</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="contact" className="py-24 bg-white border-t border-slate-100">
                    <div className="container px-4 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">Ready to lead the market?</h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Stop guessing. Start growing. Book your strategy session today.</p>

                        <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
                            <button className="px-12 py-5 bg-primary text-white font-bold text-xl rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-indigo-500/30">
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
