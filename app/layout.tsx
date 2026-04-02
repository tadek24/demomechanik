import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Najlepszy mechanik Nowy Sącz | AutoMechanik Premium",
  description: "Szukasz profesjonalnego warsztatu samochodowego w Nowym Sączu? Oferujemy kompleksową mechanikę, elektrykę i diagnostykę. Umów się na wizytę już dziś!",
  keywords: "mechanik Nowy Sącz, warsztat samochodowy Nowy Sącz, naprawa aut, diagnostyka komputerowa, wymiana oleju, wulkanizacja Nowy Sącz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body className={`${inter.variable} min-h-screen flex flex-col font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
