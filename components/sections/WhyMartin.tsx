import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const bullets = [
  {
    icon: "independent",
    title: "Nezávislý. Nikomu nestraním.",
    desc: "Nejsem vázaný na žádného dodavatele. Nedostávám bonusy za to, koho doporučím. Dostávám je za to, že jste spokojení.",
  },
  {
    icon: "experience",
    title: "8 let v energetice",
    desc: "Prošel jsem obchodní stránkou i regulaci. Vím, jak ceníky fungují zevnitř. A kde bývají háčky.",
  },
  {
    icon: "local",
    title: "Lokální, ale dostupný celé ČR",
    desc: "Jsem z regionu a raději se potkám osobně. Ale pokud jste jinde, poradíme si online. Funguje to stejně dobře.",
  },
  {
    icon: "straight",
    title: "Říkám, co si myslím",
    desc: "Pokud přechod nedává smysl, řeknu vám to. Neprodávám. Poradím. Rozdíl je podstatný.",
  },
];

function BulletIcon({ name }: { name: string }) {
  const common = { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" };
  if (name === "experience") return (
    <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3M4 11h16M6 5h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
  );
  if (name === "local") return (
    <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 10.5a2 2 0 100-4 2 2 0 000 4z" /></svg>
  );
  if (name === "straight") return (
    <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5M21 12a8.5 8.5 0 01-12.9 7.27L4 20l.73-4.1A8.5 8.5 0 1121 12z" /></svg>
  );
  return (
    <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l7 3v5c0 4.55-2.9 8.4-7 9.85C7.9 19.4 5 15.55 5 11V6l7-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-5" /></svg>
  );
}

export default function WhyMartin() {
  return (
    <section id="proc-martin" className="py-20 bg-[#F9F9F9]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00E8F5] mb-4">
                o mně
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#2F455C] mb-4">
                Proč zrovna já?
              </h2>
              <p className="text-[#64748B] text-lg mb-8">
                Upřímně: na trhu je spousta poradců. Tady je, čím se lišíme.
              </p>
              <div className="space-y-6">
                {bullets.map((b, i) => (
                  <FadeIn key={b.title} delay={i * 0.1}>
                    <div className="flex gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00E8F5]/10 text-[#2F455C]">
                        <BulletIcon name={b.icon} />
                      </span>
                      <div>
                        <p className="font-semibold text-[#2F455C] mb-1">{b.title}</p>
                        <p className="text-[#64748B]">{b.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="bg-white rounded-2xl p-8 border border-[#E2E2E2] shadow-sm">
              <p className="text-[#2F455C] text-lg font-medium mb-6">
                &ldquo;Klientům ušetřím průměrně 3 200 Kč ročně na elektřině a plynu
                dohromady. Ale číslo není vždy to nejdůležitější. Důležité je,
                abyste věděli, co platíte a proč.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/martin-pour-circle.png"
                  alt="Martin Pour"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#2F455C]">Martin Pour</p>
                  <p className="text-sm text-[#64748B]">Energetický poradce</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-[#E2E2E2]">
                {[
                  { num: "8+", label: "let v oboru" },
                  { num: "200+", label: "spokojených klientů" },
                  { num: "3 200 Kč", label: "průměrná roční úspora" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-xl font-semibold text-[#2F455C]" style={{ fontFamily: "Conthrax, sans-serif" }}>
                      {stat.num}
                    </p>
                    <p className="text-xs text-[#64748B] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
