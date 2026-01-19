import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-primary mb-6 inline-block">
              {t("nav.agency_name")}
            </a>
            <p className="text-slate-500 max-w-sm mb-8">
              Intelligent growth for the modern web. We build the bridge between traditional business and the decentralized future.
            </p>
          </div>



          <div>

            <ul className="space-y-4 text-slate-600">
              <li>
                <Link href="/about">
                  <a className="hover:text-primary transition-colors cursor-pointer">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="hover:text-primary transition-colors cursor-pointer">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-primary transition-colors cursor-pointer">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 {t("nav.agency_name")}. {t("footer.rights")}</p>
          <div className="flex gap-8">
            <Link href="/privacy">
              <a className="hover:text-slate-900 cursor-pointer">{t("footer.privacy")}</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-slate-900 cursor-pointer">{t("footer.terms")}</a>
            </Link>
            <Link href="/cookies">
              <a className="hover:text-slate-900 cursor-pointer">Cookie Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
