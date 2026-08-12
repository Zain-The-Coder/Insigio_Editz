"use client";

const navLinks = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function VimeoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 7.53c-.1.2-.23.47-.39.81-.59 1.25-1.74 3.03-3.44 5.34-1.78 2.42-3.32 3.63-4.62 3.63-.8 0-1.47-.36-2.02-1.09-.55-.73-.97-1.89-1.26-3.48-.36-1.93-.65-3.37-.87-4.32-.34-1.42-.77-2.13-1.29-2.13-.1 0-.44.13-1.02.39L6.3 7.39l.66.7c.64.67 1.05 1.15 1.23 1.44.42 1.3.82 2.87 1.2 4.71.45 2.18 1.12 3.56 2.01 4.14.89.58 1.84.44 2.85-.42.99-.86 1.83-2.05 2.52-3.57.69-1.52 1.07-2.82 1.14-3.9.07-1.08-.28-1.62-1.05-1.62-.39 0-.84.09-1.35.27.42-1.37 1.13-2.4 2.13-3.09 1-.69 2.04-.98 3.12-.87.87.1 1.44.49 1.71 1.18.27.69.21 1.42-.18 2.19z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    name: "Vimeo",
    href: "https://vimeo.com",
    icon: VimeoIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: YoutubeIcon,
  },
];

export default function Footer() {
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
  };

  return (
    <footer className="relative bg-charcoal-950 border-t border-charcoal-800 text-slate-100">
      {/* Gold decorative thin gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent w-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Top section: Logo, Tagline, Social Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 py-8 border-b border-charcoal-800/60">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <a
              href="#top"
              onClick={(e) => scrollToSection(e, "#top")}
              className="flex flex-col group cursor-pointer select-none"
            >
              <span className="font-heading text-2xl md:text-3xl tracking-[0.3em] font-light text-slate-100 group-hover:text-cyan-400 transition-colors">
                INSIGIO
              </span>
              <span className="text-cyan-600 text-[10px] tracking-[0.45em] font-medium uppercase font-body -mt-1 pl-0.5">
                EDITZ
              </span>
            </a>
            <p className="font-heading  text-slate-200/50 text-sm md:text-base max-w-md">
              Premium cinematic editing for weddings, fitness brands, vlogs, and creators worldwide.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-slate-200/40 hover:text-cyan-500 transition-colors duration-300 p-2 hover:scale-110 transform"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Middle section: Navigation Links */}
        <div className="py-8 flex flex-wrap justify-center items-center gap-8 md:gap-12 border-b border-charcoal-800/60">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-medium uppercase tracking-widest text-slate-200/70 hover:text-cyan-500 transition-colors relative py-1 group cursor-pointer"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Bottom section: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-200/30">
          <p>Â© 2026 Insigio Editz. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px]">
            Premium Video Editing & Post-Production
          </p>
        </div>
      </div>
    </footer>
  );
}
