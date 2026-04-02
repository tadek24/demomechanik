import { MapPin, Truck, Wrench, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Props {
  params: { miasto: string };
}

const slugToName = (slug: string) => {
  const parts = slug.split('-');
  return parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
};

export async function generateMetadata({ params }: Props) {
  const miasto = slugToName(params.miasto);
  return {
    title: `Mechanik ${miasto} | Szybki Dojazd z Ptaszkowej | AutoMechanik Premium`,
    description: `Nasz warsztat w Ptaszkowej obsługuje wielu kierowców z miejscowości ${miasto}. Oferujemy pełną diagnostykę, szybkie terminy i – w razie potrzeby – pomoc w odholowaniu auta.`,
  };
}

export default function ObszarDzialaniaPage({ params }: Props) {
  const miasto = slugToName(params.miasto);

  return (
    <div className="w-full">
      {/* Dynamic SEO Hero */}
      <section className="relative overflow-hidden pt-24 pb-32 border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1503376713356-1a1a36b2a0a6?q=80&w=1000&auto=format&fit=crop"
            alt={`Mechanik dla klientów z ${miasto}`}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
           <span className="text-primary font-semibold tracking-wider uppercase mb-4 block">Usługi Premium Automechanika</span>
           <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
             Szukasz sprawdzonego mechanika? Z <span className="text-primary">{miasto}</span> to tylko kilka minut drogi!
           </h1>
           <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
             Nasz warsztat w Ptaszkowej obsługuje wielu kierowców z miejscowości {miasto}. Oferujemy pełną diagnostykę, szybkie terminy i – w razie potrzeby – pomoc w odholowaniu auta. Sprawdź naszą jakość, której zaufali Twoi sąsiedzi.
           </p>
           <Link href="/rezerwacja">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-primary/20 hover:-translate-y-1 transition-transform">
                Zarezerwuj termin
              </Button>
           </Link>
        </div>
      </section>

      {/* Trust & Features Content */}
      <section className="py-20 bg-card">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                 <h2 className="text-3xl font-bold mb-6">Pełne spektrum usług dla Ciebie</h2>
                 <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                   Nie musisz zadowalać się półśrodkami. Wybierając nas, gwarantujesz swojemu samochodowi obsługę zgodną z najwyższymi standardami, niezależnie czy przyjeżdżasz z miejscowości {miasto}, czy innej części okolicy.
                 </p>
                 <ul className="space-y-6">
                    <li className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-border/50">
                      <Wrench className="text-primary mt-1 flex-shrink-0" size={28} />
                      <div>
                        <h4 className="text-white font-semibold text-lg flex items-center gap-2">Szeroka oferta naprawcza</h4>
                        <p className="text-sm text-gray-400 mt-1">Silniki, zawieszenia, układy hamulcowe oraz bieżące wymiany filtrów i płynów.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start bg-background/50 p-4 rounded-xl border border-border/50">
                      <Truck className="text-primary mt-1 flex-shrink-0" size={28}/>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Niezawodna Laweta</h4>
                        <p className="text-sm text-gray-400 mt-1">Przyjedziemy bezpośrednio do {miasto}, zabezpieczymy pojazd i przetransportujemy go do warsztatu.</p>
                      </div>
                    </li>
                 </ul>
               </div>
               <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border border-border">
                  <Image 
                    src="https://images.unsplash.com/photo-1563261623-01bd930a6c0c?q=80&w=1000&auto=format&fit=crop"
                    alt={`Diagnostyka komputerowa samochodów ${miasto}`}
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
