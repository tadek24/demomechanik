import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Najlepszy mechanik Ptaszkowa | AutoMechanik Premium",
  description: "Zaufany warsztat samochodowy w Ptaszkowej. Szybki dojazd, laweta dla klientów z Grybowa, Nowego Sącza i okolic 100km. Diagnostyka, elektryka i mechanika.",
  keywords: "mechanik Ptaszkowa, warsztat samochodowy Ptaszkowa, naprawa aut Grybów, laweta Ptaszkowa, wymiana oleju, komputerowa diagnostyka Stróże",
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
        <main className="flex-1 w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
