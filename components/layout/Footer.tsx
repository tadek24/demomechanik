import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Wrench, Navigation } from "lucide-react";

export function Footer() {
  const seoCities = [
    "Stróże", "Grybów", "Siołkowa", "Cieniawa", "Nowy Sącz", "Stara Wieś", "Krużlowa", "Paszyn", "Mystków"
  ];

  return (
    <footer className="w-full border-t border-border bg-card mt-auto relative z-20">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight mb-4">
              <Wrench className="h-6 w-6" />
              <span>AutoMechanik<span className="text-white">Ptaszkowa</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Nowoczesny warsztat samochodowy pełen pasji. Oferujemy najwyższą jakość napraw i 
              natychmiastową pomoc dzięki naszej lawecie w promieniu do 100km.
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
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Ptaszkowa 155, 33-333 Ptaszkowa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span>+48 500 600 700</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span>kontakt@mechanik-ptaszkowa.pl</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white flex items-center gap-2">
              <Navigation className="h-5 w-5 text-primary"/> Obsługujemy klientów z:
            </h3>
            <div className="flex flex-row flex-wrap gap-3">
              {seoCities.map(city => {
                const slug = city.toLowerCase().replace(/ /g, "-").replace(/ą/g, "a").replace(/ę/g, "e").replace(/ół/g, "ol").replace(/ó/g, "o").replace(/ś/g, "s").replace(/ć/g, "c").replace(/ż/g, "z").replace(/ź/g, "z").replace(/ł/g, "l").replace(/ń/g, "n");
                return (
                  <Link 
                    key={city}
                    href={`/obszar-dzialania/${slug}`} 
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm hover:bg-orange-600 hover:text-white transition-all duration-300 hover:-translate-y-[1px] text-gray-300"
                  >
                    Mechanik {city}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AutoMechanik Ptaszkowa. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="#" className="hover:text-white transition-colors">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
