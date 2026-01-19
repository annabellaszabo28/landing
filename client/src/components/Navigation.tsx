import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/marketing" },
    { name: "CMO as a Service", href: "/cmo" },
    { name: "AI Native", href: "/ai-native" },
    { name: t("nav.marketing"), href: "/marketing" },
    { name: t("nav.web3"), href: "/web3" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5"
        : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Desktop Nav - Centered Layout */}
        <div className="w-full hidden md:flex items-center justify-between px-6 py-2.5 rounded-full border border-slate-200/60 bg-white/70 backdrop-blur-xl shadow-sm">

          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <img src="/logo.png" alt={t("nav.agency_name")} className="h-10 w-auto" />
          </Link>

          {/* Centered Links */}
          <div className="flex items-center gap-8 mx-auto">
            <Link href="/marketing">
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">{t("nav.marketing")}</a>
            </Link>
            <Link href="/web3">
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">{t("nav.web3")}</a>
            </Link>
            <Link href="/cmo">
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">CMO aS</a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                {t("nav.about")}
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors cursor-pointer">{t("nav.blog")}</a>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* <LanguageSwitcher /> */}
            {/* CTA */}
            <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 font-bold text-sm shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
                Book a Call
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile: Logo on left */}
        <Link href="/" className="md:hidden cursor-pointer">
          <img src="/logo.png" alt={t("nav.agency_name")} className="h-8 w-auto" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-700 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          role="menu"
          className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-lg"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-lg font-medium text-slate-700 hover:text-primary transition-colors block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <a href="mailto:hello@blockmarketingconsulting.com" className="text-lg font-medium text-primary hover:underline transition-colors" onClick={() => setMobileMenuOpen(false)}>
            hello@blockmarketingconsulting.com
          </a>
          <a href="https://cal.com/annabella-szabo-marketing/30min" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/25 font-bold">
              Book a Call
            </Button>
          </a>
          <div className="flex justify-center pt-2">
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
      )}
    </nav>
  );
}
