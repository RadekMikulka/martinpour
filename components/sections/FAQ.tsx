"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    q: "Kolik to stojí?",
    a: "Úvodní konzultace je zdarma. Pokud pak dojde k přechodu k novému dodavateli, dostávám standardní provizi od dodavatele. Tuto částku vám vždy sdělím předem. Čisté poradenství bez přechodu je 800 Kč/hod.",
  },
  {
    q: "Jsem vázaný smlouvou, můžu vůbec měnit dodavatele?",
    a: "Záleží na podmínkách vaší smlouvy. Většina smluv na dobu neurčitou má výpovědní dobu 3 měsíce k výročí. U smluv na dobu určitou to bývá složitější. Projdeme to společně a zjistíme, kdy a jak to jde udělat nejlépe.",
  },
  {
    q: "Co když mi nový dodavatel zkrachuje?",
    a: "V ČR je zákazník chráněný. Při krachu dodavatele přecházíte automaticky na záložního dodavatele určeného ERÚ. Přijdete maximálně o zálohy, které jste zaplatili, ale dodávka elektřiny nebo plynu se nepřeruší.",
  },
  {
    q: "Funguje to i pro firmy?",
    a: "Ano, pomáhám i malým a středním firmám. U větších odběrů (od cca 50 MWh/rok) má smysl uvažovat i o spotových tarifech nebo zajišťování ceny dopředu. O tom si také pomluvíme.",
  },
  {
    q: "Jak dlouho přechod trvá?",
    a: "Standardně 1 až 3 měsíce od podání žádosti, v závislosti na vašem aktuálním dodavateli a tarifu. Celou administrativu zařídím za vás. Stačí podepsat souhlas.",
  },
  {
    q: "Co když nechci měnit, jen si nechat poradit?",
    a: "To je v pořádku. Přijdu, projdeme to, dostanete jasný obraz situace. Pokud pak nic neměníte, nic za to neplatíte (první konzultace zdarma). Poradenský poplatek nastupuje až při opakovaných konzultacích bez realizace.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.07}>
      <div
        className={`rounded-xl overflow-hidden border transition-colors duration-200 ${
          open ? "border-[#00E8F5]/60" : "border-[#E2E2E2]"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className={`w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors ${
            open ? "bg-[#00E8F5]/5" : "hover:bg-[#F9F9F9]"
          }`}
        >
          <span
            className={`font-semibold text-base transition-colors ${
              open ? "text-[#00E8F5]" : "text-[#2F455C]"
            }`}
          >
            {q}
          </span>
          <svg
            className={`w-5 h-5 shrink-0 transition-all duration-200 ${
              open ? "text-[#00E8F5] rotate-180" : "text-[#94A3B8]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <div className="px-6 pb-5 text-[#64748B] leading-relaxed border-t border-[#00E8F5]/20 pt-4">
            {a}
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00E8F5] mb-4">
              časté dotazy
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2F455C] mb-4">
              Časté otázky
            </h2>
            <p className="text-[#64748B] text-lg">
              Tohle se ptají skoro všichni. A je to v pořádku.
            </p>
          </div>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
