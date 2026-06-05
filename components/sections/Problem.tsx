import FadeIn from "@/components/ui/FadeIn";

export default function Problem() {
  return (
    <section className="py-16 bg-[#2F455C]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <p
            className="text-2xl md:text-3xl text-white/90 leading-relaxed"
            style={{ fontFamily: "Conthrax, Montserrat, sans-serif" }}
          >
            „Ceníky se mění každý měsíc. Volají vám podomáci. Vyúčtování
            nedává smysl.{" "}
            <span className="text-[#00E8F5]">Chápu. Taky jsem v tom byl."</span>
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-white/60 text-lg">
            Proto dělám tuhle práci. Aby na to lidi nemuseli být sami.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
