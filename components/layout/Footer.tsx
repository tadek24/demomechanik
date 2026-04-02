import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight mb-4">
              <Wrench className="h-6 w-6" />
              <span>AutoMechanik<span className="text-white">Nowy Sącz</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Twój zaufany serwis samochodowy klasy premium w Nowym Sączu. Nowoczesny sprzęt i doświadczeni specjaliści zapewniają najwyższą jakość napraw.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Szybkie linki</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Strona Główna</Link></li>
              <li><Link href="/o-nas" className="hover:text-primary transition-colors">O nas</Link></li>
              <li><Link href="/uslugi" className="hover:text-primary transition-colors">Usługi</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Dane kontaktowe</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>ul. Przykładowa 12, 33-300 Nowy Sącz</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>kontakt@mechanik-nowysacz.pl</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Godziny otwarcia</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li className="flex justify-between"><span>Pon - Pt:</span> <span className="text-white">08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sobota:</span> <span className="text-white">08:00 - 14:00</span></li>
              <li className="flex justify-between"><span>Niedziela:</span> <span className="text-primary font-medium">Zamknięte</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AutoMechanik Nowy Sącz. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="#" className="hover:text-white transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
