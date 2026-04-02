"use client";

import Link from "next/link";
import { Wrench, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Główna" },
    { href: "/o-nas", label: "O nas" },
    { href: "/uslugi", label: "Usługi" },
    { href: "/cennik", label: "Kalkulator Wyceny" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <Wrench className="h-6 w-6" />
            <span>AutoMechanik<span className="text-white">Nowy Sącz</span></span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="/rezerwacja">
            <Button>Zarezerwuj termin</Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden p-2 text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="flex flex-col gap-4 p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/rezerwacja" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2">Zarezerwuj termin</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
