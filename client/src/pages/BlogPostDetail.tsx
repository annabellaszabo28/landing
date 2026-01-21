import { useRoute, Link } from "wouter";
import { getBlogPost, BlogPost } from "@/lib/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import BrandedBlogCard from "@/components/BrandedBlogCard";

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);
  const { t } = useTranslation();
  const currentUrl = `https://blockmarketingconsulting.com/blog/${slug}`;

  useEffect(() => {
    if (slug) {
      getBlogPost(slug).then(setPost);
    }
  }, [slug]);

  if (post === null) {
    return <NotFound />;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>{post.title} | {t("nav.agency_name")}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={currentUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <article className="container max-w-4xl px-4 md:px-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 overflow-hidden whitespace-nowrap">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-300">{post.category}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500 truncate">{post.title}</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-1.5 bg-brand-mint/10 text-primary border border-brand-mint/20 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tighter text-slate-900 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-50 overflow-hidden border border-slate-100">
                  <img src="/brand_logo_new.png" alt="BlockMarketing Consulting" className="w-full h-full object-contain p-1.5" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest text-slate-900">BlockMarketing Consulting</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Author</div>
                </div>
              </div>

              <div className="w-px h-8 bg-slate-100 hidden sm:block" />

              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Published</div>
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 uppercase tracking-widest">{post.readTime || '3 min read'}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Read time</div>
                </div>
              </div>
            </div>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl mb-20 aspect-[16/9] border border-slate-100 group"
          >
            <BrandedBlogCard title={post.title} category={post.category} className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16">
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-32 space-y-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Share</p>
                <div className="flex flex-col gap-4">
                  <button className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:scale-110 transition-all border border-slate-100">
                    <Share2 size={18} />
                  </button>
                  <button className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-mint hover:text-primary hover:scale-110 transition-all border border-slate-100">
                    <Tag size={18} />
                  </button>
                </div>
              </div>
            </aside>

            <section className="lg:col-span-9 max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-xl prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 prose-headings:mt-12 prose-headings:mb-6 prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:text-lg md:prose-p:text-xl prose-p:mb-6 prose-li:text-slate-700 prose-li:mb-2 prose-strong:text-slate-900 prose-img:rounded-3xl prose-blockquote:border-l-4 prose-blockquote:border-brand-mint prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:font-black prose-blockquote:text-2xl prose-blockquote:tracking-tight transition-all [&>p]:mb-6 [&>h2]:mt-14 [&>h2]:mb-6 [&>h3]:mt-10 [&>h3]:mb-4"
              >
                <ReactMarkdown
                  components={{
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="text-[#00D4AA] font-semibold underline underline-offset-4 decoration-2 hover:text-primary transition-colors"
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {children}
                      </a>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-14 mb-6">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-10 mb-4">
                        {children}
                      </h3>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </motion.div>

              <footer className="mt-20 pt-12 border-t border-slate-100">
                <div className="mb-16">
                  <h3 className="font-black text-2xl tracking-tight mb-8">Ready to Implement these Strategies?</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: "AI-Native Marketing", path: "/ai-native" },
                      { title: "Growth Strategy", path: "/marketing/strategy" },
                      { title: "Web3 Adoption", path: "/web3" }
                    ].map(service => (
                      <Link key={service.path} href={service.path}>
                        <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-brand-mint hover:bg-white transition-all group cursor-pointer">
                          <div className="font-black text-slate-900 group-hover:text-primary mb-2 uppercase text-xs tracking-widest">{service.title}</div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Explore <ArrowLeft size={12} className="rotate-180" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-8">
                  <div>
                    <h3 className="font-black text-2xl tracking-tight mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-2">
                      {['AI', 'Web3', 'Growth'].map(tag => (
                        <span key={tag} className="px-5 py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all cursor-pointer border border-slate-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Tags:</p>
                    <div className="flex gap-2">
                      <Tag size={16} className="text-brand-mint" />
                    </div>
                  </div>
                </div>
              </footer>
            </section>
          </div>
        </article>

        {/* Ready to Scale Section - High Conversion */}
        <section className="mt-24 bg-primary py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-mint/5 rounded-full blur-3xl" />
          <div className="container max-w-4xl text-center text-white relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white leading-none">
              Ready to <span className="text-brand-mint italic">Scale?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-xl mx-auto font-bold">
              Stop guessing. Start growing. Book your strategy session with our marketing experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer">
                <button className="px-12 py-5 rounded-full bg-brand-mint text-primary font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-brand-mint/20 tracking-tight">
                  Book a Strategy Call
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
