import FadeIn from "@/components/ui/FadeIn";

export default function Pricing() {
  return (
    <section id="cenik" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00E8F5] mb-4">
              transparentně
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2F455C] mb-4">
              Kolik to stojí?
            </h2>
            <p className="text-[#64748B] text-lg">
              Bez tajností. Přesně takhle to funguje.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-[#F9F9F9] rounded-2xl p-8 md:p-10 border border-[#E2E2E2]">
            <div className="space-y-8">
              {[
                {
                  num: "1",
                  title: "Úvodní konzultace: zdarma",
                  body: "První schůzka (online nebo osobně) je bez poplatku. Projdeme vaše vyúčtování, zjistíme, kde stojíte, a domluvíme se, co dál. Žádný závazek.",
                },
                {
                  num: "2",
                  title: "Při realizaci přechodu: provize od dodavatele",
                  body: "Pokud přejdete k novému dodavateli na moje doporučení, dostanu standardní provizi od toho dodavatele. Tuto částku vám vždy předem sdělím a nikdy nevyberete možnost, která by mně vynesla víc, ale vám nevyhovovala.",
                },
                {
                  num: "3",
                  title: "Poradenství bez přechodu: domluva individuálně",
                  body: (
                    <>
                      Jen chcete poradit, aniž byste cokoliv měnili? V pořádku.
                      V takovém případě si hodinovou konzultaci účtuji{" "}
                      <strong className="text-[#2F455C]">800 Kč/hod</strong>.
                      Předem vám řeknu, kolik času to přibližně zabere.
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#00E8F5]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#2F455C] text-sm font-bold">{item.num}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2F455C] text-lg mb-1">{item.title}</p>
                    <p className="text-[#64748B]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-[#E2E2E2]">
              <p className="text-sm text-[#64748B] text-center">
                Žádné skryté poplatky. Žádné překvapení ve smlouvě. Takhle pracuji.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
