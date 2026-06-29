import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";

// Display — Fraunces: a characterful "old-style" craft serif with warmth
// and personality (soft serifs, expressive italics). Fits a tailor's atelier.
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body — Hanken Grotesk: a warm humanist grotesque, far more characterful
// than Roboto while staying highly legible.
const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const script = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stoftotleven.nl"),
  title: {
    default: "Stof tot Leven — by Hatish | Maatwerk in raamdecoratie & stofferen, Rotterdam",
    template: "%s · Stof tot Leven — by Hatish",
  },
  description:
    "Stof tot Leven by Hatish: ambachtelijk maatwerk in raamdecoratie, stofferen, kussens op maat en maritieme bekleding. Twintig jaar ervaring op de Kleiweg in Rotterdam.",
  keywords: [
    "raamdecoratie Rotterdam",
    "stofferen Rotterdam",
    "kussens op maat",
    "maritieme bekleding",
    "gordijnen op maat",
    "Hatish",
    "Stof tot Leven",
  ],
  openGraph: {
    title: "Stof tot Leven — by Hatish",
    description:
      "Ambachtelijk maatwerk in raamdecoratie, stofferen, kussens en maritieme bekleding. Twintig jaar op de Kleiweg, Rotterdam.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        <div aria-hidden className="grain-layer" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
