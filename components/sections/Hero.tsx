import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const stats = [
  { value: "8+", label: "let praxe" },
  { value: "200+", label: "spokojených klientů" },
  { value: "3 200 Kč", label: "průměrná roční úspora" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] bg-[#F9F9F9] flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col h-full">

        {/* Overline */}
        <FadeIn delay={0}>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00E8F5] mb-8">
            Martin Pour&nbsp;&nbsp;·&nbsp;&nbsp;Energetický poradce
          </p>
        </FadeIn>

        {/* Headline + photo */}
        <div className="flex items-center gap-8 md:gap-12 flex-1">
          <div className="flex-1 min-w-0">
            <FadeIn delay={0.08}>
              <h1
                className="font-semibold text-[#2F455C] leading-[1.18] mb-5"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontFamily: "Conthrax, Montserrat, sans-serif",
                }}
              >
                Pomáhám vám dělat
                <br className="hidden sm:block" />
                {" "}chytrá energetická
                <br className="hidden sm:block" />
                {" "}<span className="text-[#00E8F5]">rozhodnutí.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.18}>
              <p className="text-lg text-[#6B7280] leading-relaxed max-w-[460px] mb-8">
                Srovnám nabídky, rozklíčuji vyúčtování a doporučím přesně to,
                co dává smysl. Vy se rozhodnete. Papírování vyřídím za vás.
              </p>
            </FadeIn>

            <FadeIn delay={0.26}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 border-2 border-[#00E8F5] text-[#2F455C] font-semibold px-6 py-3.5 rounded-lg hover:bg-[#00E8F5] hover:text-[#141414] transition-colors text-sm uppercase tracking-widest"
                >
                  Konzultace zdarma
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <span className="text-sm text-[#94A3B8]">Bez závazků.</span>
              </div>
            </FadeIn>
          </div>

          {/* Circle photo — volně, bez boxu */}
          <FadeIn delay={0.12} direction="left">
            <div className="shrink-0 hidden sm:block w-[200px] md:w-[300px] lg:w-[380px]">
              <Image
                src="/images/martin-pour-circle.png"
                alt="Martin Pour"
                width={380}
                height={380}
                priority
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>

        {/* Credentials stripe */}
        <FadeIn delay={0.35}>
          <div className="mt-12 pt-8 border-t border-[#2F455C]/10 flex flex-wrap gap-8 md:gap-14">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl font-semibold text-[#2F455C] leading-none"
                  style={{ fontFamily: "Conthrax, sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
