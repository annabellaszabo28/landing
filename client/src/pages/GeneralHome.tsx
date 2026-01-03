import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Box } from "lucide-react";

export default function GeneralHome() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
            <Helmet>
                <title>Lumina Digital | AI-Native Marketing Agency</title>
                <meta name="description" content="Lumina Digital is an AI-native marketing agency with 10+ years of experience, bridging the gap between Web2 growth and Web3 innovation." />
            </Helmet>
            <Navigation />

            <main className="flex-grow flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-20">

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" />

                <div className="container px-4 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                            AI-Native Agency • 10+ Years Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Future-Proof<br />Your Growth
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                            We fuse agentic AI workflows with seasoned marketing expertise to scale ambitious brands in both Web2 and Web3 economies.
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
                                    Data-driven digital marketing supercharged by AI. SEO, PPC, and Social strategies that outperform.
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
                </div>
            </main>

            <Footer />
        </div>
    );
}
