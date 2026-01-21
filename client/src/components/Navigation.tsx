import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
// Language switcher removed as per user request

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
    { name: "Marketing Services", href: "/marketing" },
    { name: "Web3 Growth", href: "/web3" },
    { name: "Fractional CMO", href: "/cmo" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${scrolled
        ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200"
        : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Desktop Nav - Centered Layout */}
        <div className="w-full hidden md:flex items-center justify-between px-6 py-2.5 rounded-full border border-slate-200/60 bg-white/70 backdrop-blur-xl shadow-sm">

          {/* Logo */}
          <Link href="/" className="cursor-pointer group flex items-center gap-3">
            <img src="/brand_logo_new.png" alt="BlockMarketing Consulting" className="h-12 w-auto drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xl font-black font-heading tracking-tighter text-slate-900">
              BlockMarketing <span className="text-brand-mint">Consulting</span>
            </span>
          </Link>

          {/* Centered Links */}
          <div className="flex items-center gap-8 mx-auto">
            <Link href="/marketing">
              <a className="text-[13px] font-black uppercase tracking-widest text-slate-800 hover:text-brand-mint transition-colors cursor-pointer text-center leading-tight">Marketing<br /><span className="text-[10px] text-slate-400">Traditional</span></a>
            </Link>
            <Link href="/web3">
              <a className="text-[13px] font-black uppercase tracking-widest text-slate-800 hover:text-brand-mint transition-colors cursor-pointer text-center leading-tight">Web3 Growth<br /><span className="text-[10px] text-slate-400">Native</span></a>
            </Link>
            <Link href="/cmo">
              <a className="text-[13px] font-black uppercase tracking-widest text-slate-800 hover:text-brand-mint transition-colors cursor-pointer text-center leading-tight">Fractional<br /><span className="text-[10px] text-slate-400">CMO</span></a>
            </Link>
            <Link href="/about">
              <a className="text-[13px] font-black uppercase tracking-widest text-slate-800 hover:text-brand-mint transition-colors flex items-center gap-2 cursor-pointer">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse shadow-[0_0_8px_var(--brand-mint)]"></span>
                {t("nav.about")}
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-[13px] font-black uppercase tracking-widest text-slate-800 hover:text-brand-mint transition-colors cursor-pointer">{t("nav.blog")}</a>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Language switcher removed */}
            <Link href="/contact">
              <Button className="rounded-full px-8 h-12 bg-primary hover:bg-brand-mint transition-all font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 hover:shadow-brand-mint/40 hover:-translate-y-0.5">
                {t("nav.contact")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile: Logo on left */}
        <Link href="/" className="md:hidden cursor-pointer group flex items-center">
          <span className="text-lg font-bold font-heading tracking-tight text-slate-900">
            BlockMarketing <span className="text-primary">Consulting</span>
          </span>
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
          <a href="https://cal.com/bella-dwsbwo/introductory-call" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/25 font-bold">
              Book a Call
            </Button>
          </a>
          <div className="flex justify-center pt-2">
          </div>
        </div>
      )}
    </nav>
  );
}
