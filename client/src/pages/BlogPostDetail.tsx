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
import BrandedBlogCard from "@/components/BrandedBlogCard";

export default function BlogPostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);

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
        <title>{post.title} | BlockMarketing Digital</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <article className="container max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full font-medium mb-6">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                  <img
                    src="/brand_logo.png"
                    alt="BlockMarketing"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">BlockMarketing</div>
                  <div className="text-xs">Company Profile</div>
                </div>
              </div>

              <div className="w-px h-8 bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-slate-400" />
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-900">{new Date(post.date).toLocaleDateString()}</div>
                  <div className="text-xs">Published</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl mb-16 aspect-video border border-slate-100"
          >
            <BrandedBlogCard title={post.title} category={post.category} className="w-full h-full" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-2 hidden lg:block">
              <div className="sticky top-32 space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Share</p>
                <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg prose-slate max-w-none first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left"
              >
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </motion.div>

              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="font-bold text-xl mb-6">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                    #AI
                  </span>
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                    #Web3
                  </span>
                  <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                    #Marketing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter CTA */}
        <section className="mt-24 bg-slate-900 py-20">
          <div className="container max-w-4xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay ahead of the curve</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Join 10,000+ strategists receiving our weekly insights on AI and Web3.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-3 rounded-full bg-primary font-bold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
