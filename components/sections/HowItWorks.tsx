import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    num: "01",
    title: "Nezávazně se ozvete",
    desc: "Napište, zavolejte nebo vyplňte formulář níže. Žádné předběžné dokumenty, žádná registrace. Stačí říct, co vás trápí.",
  },
  {
    num: "02",
    title: "Projdeme spolu vaše vyúčtování",
    desc: "Online nebo osobně, záleží na vás. Stačí mít po ruce poslední vyúčtování. Zabere to zhruba 30 až 45 minut.",
  },
  {
    num: "03",
    title: "Dostanete jasné doporučení",
    desc: "Ukážu vám konkrétní čísla a možnosti. Rozhodnutí je vždycky na vás. Žádný tlak, žádné podpisy na koleni.",
  },
];

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00E8F5] mb-4">
              postup
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2F455C] mb-4">
              Jak to probíhá
            </h2>
            <p className="text-[#64748B] text-lg">
              Tři kroky. Žádná zbytečná složitost.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.12}>
              <div className="relative text-center md:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-[#F9F9F9] border border-[#E2E2E2] mb-6">
                  <span className="text-3xl font-semibold text-[#2F455C]/35" style={{ fontFamily: "Conthrax, sans-serif" }}>
                    {step.num}
                  </span>
                </div>
                <h3 className="font-semibold text-[#2F455C] text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-14 text-center">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 border-2 border-[#00E8F5] text-[#2F455C] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#00E8F5] hover:text-[#141414] transition-colors text-sm uppercase tracking-widest"
            >
              Začít. Je to zdarma.
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
