import type { Metadata } from "next";
import { Work_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-work-sans" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-caveat" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "VentureKart — Invest in India's next big thing",
  description: "Retail equity crowdfunding for Indian startups. Invest from ₹500.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${caveat.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
