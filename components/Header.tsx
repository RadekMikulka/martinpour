"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Jak to funguje", href: "#jak-to-funguje" },
  { label: "Proč já", href: "#proc-martin" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-semibold text-lg text-[#2F455C] tracking-tight"
          style={{ fontFamily: "Conthrax, Montserrat, sans-serif" }}
        >
          Martin Pour
          <span className="text-[#00E8F5]">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest text-[#6B7280] hover:text-[#2F455C] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="text-xs font-semibold uppercase tracking-widest border-2 border-[#00E8F5] text-[#2F455C] px-4 py-2.5 rounded-lg hover:bg-[#00E8F5] hover:text-[#141414] transition-colors"
          >
            Nezávazná konzultace
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-[#2F455C]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otevřít menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E2E2] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-widest text-[#2F455C]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-semibold uppercase tracking-widest border-2 border-[#00E8F5] text-[#2F455C] px-4 py-3 rounded-lg text-center hover:bg-[#00E8F5] transition-colors"
          >
            Nezávazná konzultace
          </a>
        </div>
      )}
    </header>
  );
}
