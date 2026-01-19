import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { getAllBlogPosts, BlogPost } from "@/lib/content";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import BrandedBlogCard from "@/components/BrandedBlogCard";

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllBlogPosts().then(setPosts);
  }, [i18n.language]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-primary/20">
      <Helmet>
        <title>Insights | Blog | BlockMarketing Consulting</title>
        <meta name="description" content="Thoughts on the convergence of AI, Web3, and digital culture. Stay ahead of the curve with insights from industry experts." />
        <meta name="keywords" content="AI marketing blog, Web3 insights, digital marketing trends, blockchain news, growth hacking tips" />
        <link rel="canonical" href="https://blockmarketingconsulting.com/blog" />
        <meta property="og:title" content={`Insights | ${t("nav.agency_name")}`} />
        <meta property="og:description" content="Thoughts on the convergence of AI, Web3, and digital culture." />
        <meta property="og:url" content="https://blockmarketingconsulting.com/blog" />
      </Helmet>
      <Navigation />

      <main className="flex-grow">
        <PageHeader
          title="Blog"
          subtitle="Everything Product Marketing, Web2 and Web3. Insights on the convergence of AI, blockchain, and digital growth."
        />

        <section className="pb-24">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <a className="block h-full group cursor-pointer">
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col h-full"
                    >
                      <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-lg border border-slate-100 group-hover:border-primary/20 transition-colors">
                        <BrandedBlogCard title={post.title} category={post.category} className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <img src="/brand_logo_blue.png" alt="Author" className="w-5 h-5 rounded-full object-contain" />
                          {post.author}
                        </div>
                        <span className="text-primary font-bold flex items-center gap-1 text-sm group-hover:gap-2 transition-all">
                          {t("common.read_more")} <ArrowRight size={16} />
                        </span>
                      </div>
                    </motion.article>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
