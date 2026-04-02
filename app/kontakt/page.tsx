import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "AutoMechanik Premium Nowy Sącz",
    "image": "https://images.unsplash.com/photo-1625047509168-a71c6f5f73d8?auto=format&fit=crop&q=80",
    "@id": "https://mechanik-nowysacz-demo.pl",
    "url": "https://mechanik-nowysacz-demo.pl/kontakt",
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
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-white text-center">Kontakt</h1>
        <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Masz pytania dotyczące naprawy lub wyceny? Zadzwoń do nas lub napisz wiadomość. Jesteśmy tu by pomóc!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Nasze dane kontaktowe</h2>
            <div className="space-y-6 mb-8">
              <Card>
                <CardContent className="pt-6 flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-white">Adres warsztatu</h3>
                    <p className="text-gray-400">ul. Przykładowa 12<br />33-300 Nowy Sącz</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 flex items-start gap-4">
                  <Phone className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-white">Telefon kontaktowy</h3>
                    <p className="text-gray-400 text-lg">+48 123 456 789</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">kontakt@mechanik-nowysacz.pl</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 flex items-start gap-4">
                  <Clock className="text-primary mt-1" size={24} />
                  <div className="w-full">
                    <h3 className="font-semibold text-white mb-2">Godziny otwarcia</h3>
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Poniedziałek - Piątek</span><span>08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Sobota</span><span>08:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Niedziela</span><span className="text-primary font-medium">Zamknięte</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-white">Napisz do nas</h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Imię i nazwisko</label>
                  <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Telefon</label>
                  <input type="tel" className="w-full bg-background border border-border rounded-md px-4 py-2 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-200">Wiadomość / Pytanie</label>
                  <textarea rows={5} className="w-full bg-background border border-border rounded-md px-4 py-2 text-white"></textarea>
                </div>
                <Button className="w-full">Wyślij wiadomość</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
