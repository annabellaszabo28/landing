import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Box, Newspaper } from "lucide-react";
import { getBlogPosts } from "@/lib/content";
import { useState, useEffect } from "react";
import type { BlogPost } from "@/types";

export default function GeneralHome() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);

    useEffect(() => {
        getBlogPosts().then(posts => {
            setBlogs(posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3));
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>BlockMarketing Consulting | AI native marketing agency</title>
                <meta name="description" content="BlockMarketing Consulting is an AI native marketing agency with 10+ years of experience, bridging the gap between Web2 growth and Web3 innovation." />
                <link rel="canonical" href="https://blockmarketingconsulting.com/" />
            </Helmet>
            <Navigation />

            <main className="flex-grow flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-20">

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-slate-50 -z-10" />

                <div className="container px-4 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                            AI native marketing agency • 10+ Years Experience
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-slate-900 leading-[1.05]">
                            AI-Native Growth<br />
                            <span className="text-brand-mint uppercase tracking-tight">Architecture</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                            We fuse autonomous agentic workflows with seasoned marketing expertise to scale global brands across Web2 and Web3 economies. Institutional-grade growth strategy for the new era.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Web2 Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 text-left"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Layers size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Web2 Marketing</h3>
                                <p className="text-muted-foreground mb-6">
                                    Data driven digital marketing supercharged by AI. SEO, PPC, and Social strategies that outperform.
                                </p>
                                <Link href="/marketing">
                                    <a className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                        Explore Services <ArrowRight size={16} className="ml-2" />
                                    </a>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Web3 Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 text-left"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Box size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                                    <Box size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Web3 Growth</h3>
                                <p className="text-muted-foreground mb-6">
                                    Decentralized community building and GTM strategies for the next generation of the internet.
                                </p>
                                <Link href="/web3">
                                    <a className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                                        Explore Solutions <ArrowRight size={16} className="ml-2" />
                                    </a>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                    {/* Latest Insights Section */}
                    <section className="py-24 bg-white">
                        <div className="container px-4">
                            <div className="text-center mb-16">
                                <span className="text-brand-mint font-black tracking-[0.3em] uppercase text-xs mb-4 block">Knowledge Share</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900">Latest Insights</h2>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                {blogs.map((blog, idx) => (
                                    <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group cursor-pointer"
                                        >
                                            <div className="aspect-video rounded-3xl overflow-hidden mb-6 bg-slate-100 border border-slate-100">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                                                {blog.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm line-clamp-2 font-medium">
                                                {blog.excerpt}
                                            </p>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-center mt-16">
                                <Link href="/blog">
                                    <a className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 text-primary font-bold rounded-full hover:bg-slate-200 transition-colors uppercase text-sm tracking-wider">
                                        View All Articles <ArrowRight size={18} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </section>
            </main>

            <Footer />
        </div>
    );
}
