import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";

// Single family — Hanken Grotesk: a warm humanist grotesque. All display,
// body and legacy script slots resolve to this one sans for the
// business-neutral design language.
const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
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
    <html lang="nl" className={body.variable}>
      <body className="font-sans antialiased">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
