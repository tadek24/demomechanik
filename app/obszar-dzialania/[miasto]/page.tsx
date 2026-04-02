import { MapPin, Truck, Wrench, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Props {
  params: { miasto: string };
}

// Mapowanie slug do poprawnej nazwy z wielkiej litery (uproszczony przykład)
const slugToName = (slug: string) => {
  const parts = slug.split('-');
  return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
};

export async function generateMetadata({ params }: Props) {
  const miasto = slugToName(params.miasto);
  return {
    title: `Mechanik ${miasto} | Szybki Dojazd z Ptaszkowej | AutoMechanik Premium`,
    description: `Szukasz niezawodnego mechanika i mieszkasz w ${miasto}? Prowadzimy elitarny warsztat w pobliskiej Ptaszkowej. Oferujemy lawetę i dojazd dla klientów z okolic!`,
  };
}

export default function ObszarDzialaniaPage({ params }: Props) {
  const miasto = slugToName(params.miasto);

  return (
    <div className="w-full">
      {/* Dynamic SEO Hero */}
      <section className="relative overflow-hidden pt-24 pb-24 border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/95 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1503376713356-1a1a36b2a0a6?q=80&w=1000&auto=format&fit=crop"
            alt={`Laweta z Ptaszkowej do ${miasto}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
           <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Specjalna oferta dojazdowa</span>
           <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Profesjonalny mechanik dla mieszkańców obszaru <span className="text-primary">{miasto}</span>
           </h1>
           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
             Jesteś z miejscowości {miasto} i masz awarię? Nasz główny serwis zlokalizowany w pobliskiej Ptaszkowej oferuje 
             <strong> błyskawiczny dojazd i usługę lawety</strong> dla wszystkich klientów z Twojej okolicy w promieniu do 100km!
           </p>
           <Link href="/rezerwacja">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">Wzywam pomoc / Rezerwuję termin</Button>
           </Link>
        </div>
      </section>

      {/* SEO Persuasion Content */}
      <section className="py-20 bg-card">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                 <h2 className="text-3xl font-bold mb-6">Dlaczego warto wybrać naszą firmę w Ptaszkowej będąc w {miasto}?</h2>
                 <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                   Wielu klientów z miejscowości {miasto} szuka zaufanego, niesieciowego warsztatu, w którym auto traktowane jest 
                   z największym szacunkiem. Zamiast szukać niesprawdzonych rozwiązań lokalnych, proponujemy sprawdzoną jakość. 
                   Nasi mechanicy chętnie odbierają auta z terenu całej południowej Polski i dysponują własnym transportem!
                 </p>
                 <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <Truck className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold flex items-center gap-2">Pomoc autolawety 24/7</h4>
                        <p className="text-sm text-gray-500">Odbierzemy Twoje uszkodzone auto prosto z lokalizacji {miasto}.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <Wrench className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Kompletny park maszynowy</h4>
                        <p className="text-sm text-gray-500">Mamy podnośniki 5-tonowe i testery, których często brakuje w małych garażach.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <ShieldCheck className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold">Tylko 100% zadowolonych klientów</h4>
                        <p className="text-sm text-gray-500">Zadzwoń do nas i dołącz do setek stałych bywalców naszego warsztatu.</p>
                      </div>
                    </li>
                 </ul>
               </div>
               <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <Image 
                    src="https://images.unsplash.com/photo-1563261623-01bd930a6c0c?q=80&w=1000&auto=format&fit=crop"
                    alt={`Diagnostyka komputerowa silnika dla aut z ${miasto}`}
                    fill
                    className="object-cover"
                  />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
