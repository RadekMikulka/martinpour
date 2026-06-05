import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://martinpour.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Martin Pour — Energetický poradce",
  description:
    "Nezávislý energetický poradce pro domácnosti a malé firmy. Srovnám nabídky, vysvětlím, co reálně platíte, a vyřídím přechod za vás — bez tlaku a podomáků.",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: siteUrl,
    siteName: "Martin Pour — Energetický poradce",
    title: "Martin Pour — Energie bez šuškandy",
    description:
      "Pomáhám domácnostem a firmám ušetřit za energie. Férově, bez zbytečné byrokracie.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Martin Pour — Energetický poradce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Pour — Energetický poradce",
    description:
      "Nezávislý poradce pro energie. Srovnám nabídky, vysvětlím ceník, vyřídím přechod.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${montserrat.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
