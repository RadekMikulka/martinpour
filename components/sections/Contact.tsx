"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "VASE_ID";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[#E2E2E2] bg-[#F9F9F9] text-[#141414] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1032CF]/30 focus:border-[#1032CF] transition-colors text-sm";

  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00E8F5] mb-4">
              kontakt
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2F455C] mb-4">
              Ozvěte se
            </h2>
            <p className="text-[#64748B] text-lg">
              Napište pár slov o vaší situaci. Ozvu se do 24 hodin.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-[#2F455C] text-lg mb-5 uppercase tracking-wider text-sm">
                  Kontaktní údaje
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      href: "tel:+420725704335",
                      label: "+420 725 704 335",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                    },
                    {
                      href: "mailto:martin@martinpour.cz",
                      label: "martin@martinpour.cz",
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 text-[#64748B] hover:text-[#2F455C] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#F9F9F9] border border-[#E2E2E2] flex items-center justify-center group-hover:bg-[#00E8F5] group-hover:text-[#141414] group-hover:border-[#00E8F5] transition-colors text-[#2F455C]">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </a>
                  ))}
                  <div className="flex items-center gap-3 text-[#64748B]">
                    <div className="w-10 h-10 rounded-lg bg-[#F9F9F9] border border-[#E2E2E2] flex items-center justify-center text-[#2F455C]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span>Celá Česká republika (online nebo osobně)</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#2F455C] text-sm mb-3 uppercase tracking-wider">
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/in/martinpour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#1032CF] transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/martinpour
                </a>
              </div>

              <div className="bg-[#F9F9F9] rounded-xl p-6 border border-[#E2E2E2]">
                <p className="text-sm text-[#64748B] leading-relaxed">
                  <span className="font-semibold text-[#2F455C]">Obvyklá doba odezvy:</span>{" "}
                  do 24 hodin ve všední dny. O víkendu trochu déle, ale odpovím.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            {status === "ok" ? (
              <div className="flex flex-col items-center justify-center text-center h-full gap-4 bg-[#F9F9F9] rounded-2xl p-10 border border-[#E2E2E2]">
                <div className="w-16 h-16 rounded-full bg-[#00E8F5]/15 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#00E8F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#2F455C] text-xl">Zpráva odeslána!</h3>
                <p className="text-[#64748B]">Ozvu se vám do 24 hodin. Díky za zájem.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#2F455C] uppercase tracking-wider mb-1.5">
                      Jméno *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jan Novák"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2F455C] uppercase tracking-wider mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+420 725 704 335"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2F455C] uppercase tracking-wider mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jan@novak.cz"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#2F455C] uppercase tracking-wider mb-1.5">
                    Zpráva
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Řekněte mi pár slov o vaší situaci: co platíte, co vás trápí, nebo co byste chtěli řešit."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Něco se pokazilo. Zkuste to znovu nebo mi napište přímo na e-mail.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full border-2 border-[#00E8F5] text-[#2F455C] font-semibold py-3.5 rounded-lg hover:bg-[#00E8F5] hover:text-[#141414] transition-colors disabled:opacity-60 uppercase tracking-widest text-sm"
                >
                  {status === "sending" ? "Odesílám…" : "Odeslat zprávu"}
                </button>
                <p className="text-xs text-[#94A3B8] text-center">
                  Odesláním souhlasíte se zpracováním osobních údajů dle{" "}
                  <a href="/gdpr" className="underline hover:text-[#64748B]">GDPR zásad</a>.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
