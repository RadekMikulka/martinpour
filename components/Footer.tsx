export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#2F455C] text-white/60 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span className="font-semibold text-white uppercase tracking-widest text-xs" style={{ fontFamily: "Conthrax, Montserrat, sans-serif" }}>
            Martin Pour
          </span>
          <span className="hidden md:inline text-white/20">·</span>
          <span>IČO: XXXXXXXX</span>
          <span className="hidden md:inline text-white/20">·</span>
          <span>Energetický poradce</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="/gdpr" className="hover:text-white transition-colors uppercase tracking-wider text-xs">
            Ochrana osobních údajů
          </a>
          <span>© {year} Martin Pour</span>
        </div>
      </div>
    </footer>
  );
}
