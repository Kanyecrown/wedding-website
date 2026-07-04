import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const cormorant = Cormorant_Garamond({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-cormorant" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "The Wedding of Faith & Francis",
  description: "August 15, 2026 — Akamo Hotel, Ugbe Akoko, Ondo State.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${greatVibes.variable} ${cormorant.variable} ${cinzel.variable} bg-ivory text-primary antialiased font-body`}>
        {children}
      </body>
    </html>
  );
}