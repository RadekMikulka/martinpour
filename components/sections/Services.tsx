import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Srovnám nabídky napříč trhem",
    desc: "Projdu aktuální nabídky od relevantních dodavatelů a ukážu vám, co dává smysl pro váš konkrétní odběr. Ne to, co je zrovna v reklamě.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Vysvětlím, co reálně platíte",
    desc: "Rozklíčuji vaše vyúčtování po položkách. Zjistíme, kolik opravdu platíte za kWh, kde jsou regulované složky a kde je prostor pro úsporu.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Vyřídím přechod za vás",
    desc: "Papíry, výpověď smlouvy, registrace u nového dodavatele. To všechno zvládnu za vás. Vy jen řeknete ano nebo ne.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Poradím s FVE, tarify a spoty",
    desc: "Uvažujete o solárních panelech nebo spotovém tarifu? Projdeme to společně, včetně toho, jestli se to u vás vůbec vyplatí.",
  },
];

export default function Services() {
  return (
    <section id="sluzby" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00E8F5] mb-4">
              naše služby
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2F455C] mb-4">
              Co pro vás udělám
            </h2>
            <p className="text-[#64748B] text-lg max-w-xl mx-auto">
              Ne každý potřebuje všechno. Začneme tam, kde to bolí nejvíc.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-7 border border-[#E2E2E2] hover:border-[#00E8F5]/50 hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-xl bg-[#00E8F5]/10 flex items-center justify-center text-[#2F455C] mb-5 group-hover:bg-[#00E8F5] group-hover:text-[#141414] transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-[#2F455C] text-lg mb-2">
                  {s.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
