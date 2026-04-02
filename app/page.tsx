import Image from "next/image";
import Link from "next/link";
import { Wrench, ShieldCheck, Clock, Settings, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/Card";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "AutoMechanik Premium Nowy Sącz",
    "image": "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80",
    "@id": "",
    "url": "https://mechanik-nowysacz-demo.pl",
    "telephone": "+48 123 456 789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Przykładowa 12",
      "addressLocality": "Nowy Sącz",
      "postalCode": "33-300",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.6217,
      "longitude": 20.6970
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-48">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80"
            alt="Nowoczesny warsztat samochodowy w Nowym Sączu"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Profesjonalny Serwis <br />
              <span className="text-primary">Samochodowy</span> w Nowym Sączu
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Specjalizujemy się w nowoczesnej mechanice, diagnostyce komputerowej i naprawach premium. Zaufaj ekspertom z wieloletnim doświadczeniem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rezerwacja">
                <Button size="lg" className="w-full sm:w-auto text-lg no-underline font-semibold h-14 px-8">
                  Zarezerwuj termin
                </Button>
              </Link>
              <Link href="/uslugi">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8">
                  Nasze usługi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego my? */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dlaczego my?</h2>
            <p className="text-gray-400">Oferujemy standardy premium w cenach przyjaznych dla każdego klienta z Nowego Sącza i okolic.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck size={28} />
                </div>
                <CardTitle className="text-xl">Gwarancja Jakości</CardTitle>
                <CardDescription>Używamy tylko oryginalnych części lub certyfikowanych zamienników. Na każdą naprawę otrzymujesz gwarancję.</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Clock size={28} />
                </div>
                <CardTitle className="text-xl">Terminowość</CardTitle>
                <CardDescription>Szanujemy Twój czas. Naprawy wykonujemy w umówionym terminie, bez zbędnych opóźnień.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Settings size={28} />
                </div>
                <CardTitle className="text-xl">Nowoczesny Sprzęt</CardTitle>
                <CardDescription>Dysponujemy najnowocześniejszym sprzętem diagnostycznym, obsługującym auta wszystkich marek.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Usługi Zarys */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80"
                alt="Diagnostyka komputerowa samochodów w Nowym Sączu"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kompleksowa opieka nad Twoim autem</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Od drobnych napraw po generalne remonty silników. Jeśli szukasz rzetelnego mechanika w Nowym Sączu, świetnie trafiłeś.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Wrench className="text-primary flex-shrink-0" />
                <span className="text-gray-200">Mechanika i naprawy bieżące</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="text-primary flex-shrink-0" />
                <span className="text-gray-200">Zaawansowana diagnostyka komputerowa</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="text-primary flex-shrink-0" />
                <span className="text-gray-200">Elektryka i elektronika samochodowa</span>
              </li>
              <li className="flex items-center gap-3">
                <Wrench className="text-primary flex-shrink-0" />
                <span className="text-gray-200">Serwis klimatyzacji i wulkanizacja</span>
              </li>
            </ul>

            <Link href="/uslugi">
              <Button variant="outline">Poznaj pełną ofertę</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Co mówią nasi Klienci?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { author: "Jan Kowalski", body: "Najlepszy warsztat w Nowym Sączu! Pełen profesjonalizm i świetny kontakt. Auto naprawione w 1 dzień." },
              { author: "Anna Nowak", body: "Bardzo polecam. Wymiana rozrządu przeprowadzona szybko i uczciwie, pokazali mi nawet zużyte części." },
              { author: "Piotr Wiśniewski", body: "W końcu znalazłem mechanika, który nie naciąga! Jasna wycena przed naprawą, bez niespodzianek na końcu." },
            ].map((review, i) => (
              <Card key={i} className="bg-background border-border">
                <CardContent className="pt-6">
                  <div className="flex gap-1 text-primary mb-4">
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                  </div>
                  <p className="text-gray-300 italic mb-6">"{review.body}"</p>
                  <p className="font-semibold text-white">{review.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa dojazdu i Kontakt C-to-A */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-card p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Dotrzyj do nas bez problemu</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-white text-lg">Nasz adres</h3>
                    <p className="text-gray-400">ul. Przykładowa 12<br />33-300 Nowy Sącz</p>
                  </div>
                </div>
              </div>
              <Link href="/kontakt">
                <Button>Skontaktuj się z nami</Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 h-[400px] md:h-auto relative bg-neutral-800">
              {/* Google Maps mock placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-800/80">
                <div className="text-center p-6 bg-card border border-border rounded-xl shadow-lg max-w-sm">
                  <MapPin className="text-primary mx-auto mb-4" size={48} />
                  <p className="text-white font-medium">Mapa Google - Nowy Sącz<br/><span className="text-gray-400 text-sm">(Miejsce na interaktywną mapę)</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
