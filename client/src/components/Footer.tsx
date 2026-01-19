import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getPageContent } from "@/lib/content";
import FAQ from "./FAQ";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [commonContent, setCommonContent] = useState<any>(null);

  useEffect(() => {
    getPageContent<any>("common").then(setCommonContent).catch(() => { });
  }, [i18n.language]);

  return (
    <div className="flex flex-col">
      {commonContent?.faq_section && (
        <FAQ content={commonContent.faq_section} />
      )}

      <footer className="bg-white pt-24 pb-12 border-t border-slate-100 relative z-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="mb-8 inline-flex items-center gap-4 group">
                <img src="/brand_logo_new.png" alt="BlockMarketing Consulting" className="h-14 w-auto group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-black font-heading tracking-tighter text-slate-900">
                  BlockMarketing <span className="text-brand-mint italic">Consulting</span>
                </span>
              </a>
              <p className="text-slate-600 text-lg max-w-md mb-10 font-medium leading-relaxed">
                Elite growth architecture for the modern economy. We build high-performance systems that bridge the gap between traditional industry and the decentralized future.
              </p>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Navigation</h4>
              <ul className="space-y-4 text-lg font-bold text-slate-600">
                <li>
                  <Link href="/about">
                    <a className="hover:text-brand-mint transition-colors cursor-pointer">Our Identity</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:text-brand-mint transition-colors cursor-pointer">Insights</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-brand-mint transition-colors cursor-pointer">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Solutions</h4>
              <ul className="space-y-4 text-lg font-bold text-slate-600">
                <li>
                  <Link href="/marketing">
                    <a className="hover:text-brand-mint transition-colors cursor-pointer">Web2 Growth</a>
                  </Link>
                </li>
                <li>
                  <Link href="/web3">
                    <a className="hover:text-brand-mint transition-colors cursor-pointer">Web3 Ecosystems</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ai-native">
                    <a className="hover:text-brand-mint transition-colors cursor-pointer">AI Native</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-bold text-slate-500">
            <p>© 2026 {t("nav.agency_name")}. {t("footer.rights")}</p>
            <div className="flex gap-10">
              <Link href="/privacy">
                <a className="hover:text-slate-900 transition-colors cursor-pointer">{t("footer.privacy")}</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-slate-900 transition-colors cursor-pointer">{t("footer.terms")}</a>
              </Link>
              <Link href="/cookies">
                <a className="hover:text-slate-900 transition-colors cursor-pointer">Cookie Policy</a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
