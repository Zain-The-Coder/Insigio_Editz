"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#" || href === "#top" || href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-charcoal-950/80 backdrop-blur-xl ${
        isScrolled
          ? "border-b border-charcoal-700 shadow-lg shadow-black/40 py-4"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "#top")}
          className="flex flex-col group cursor-pointer transition-opacity hover:opacity-90 select-none"
        >
          <span className="font-heading text-2xl md:text-3xl tracking-[0.3em] font-light text-ivory-100 group-hover:text-gold-400 transition-colors">
            INSIGIO
          </span>
          <span className="text-gold-600 text-[10px] tracking-[0.45em] font-medium uppercase font-body -mt-1 pl-0.5">
            STUDIO
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-medium uppercase tracking-widest text-ivory-200/70 hover:text-gold-500 transition-colors relative py-1 group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="inline-block bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-semibold px-6 py-2.5 rounded-none text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/20 active:translate-y-0.5 cursor-pointer"
          >
            Work With Us
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-ivory-100 hover:text-gold-500 transition-colors p-2 focus:outline-none cursor-pointer"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gold-500" />
          ) : (
            <Menu className="w-6 h-6 text-ivory-100" />
          )}
        </button>
      </div>

      {/* Mobile Animated Slide-Down Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-charcoal-900/95 backdrop-blur-xl border-b border-charcoal-800"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium uppercase tracking-[0.2em] text-ivory-200/80 hover:text-gold-400 transition-colors py-2 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 w-full max-w-xs">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="block w-full bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-semibold py-3 rounded-none text-xs uppercase tracking-widest transition-all duration-300 text-center cursor-pointer"
                >
                  Work With Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
