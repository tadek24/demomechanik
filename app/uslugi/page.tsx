import { Wrench, Battery, Wind, Settings } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi mechaniczne Nowy Sącz | Cennik i Naprawy",
  description: "Pełny zakres usług naszego warsztatu: naprawa silników, serwis klimatyzacji, elektronika samochodowa i wulkanizacja w Nowym Sączu.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Mechanika ogólna",
      desc: "Wymiana rozrządu, sprzęgła, klocków hamulcowych i naprawy zawieszenia. Przywracamy autu pełną sprawność.",
      icon: <Wrench className="w-8 h-8 text-primary" />
    },
    {
      title: "Elektryka i elektronika",
      desc: "Diagnostyka, kodowanie wtryskiwaczy, naprawa alternatorów, rozruszników, oraz skanowanie błędów OBD2.",
      icon: <Battery className="w-8 h-8 text-primary" />
    },
    {
      title: "Klimatyzacja (Nabijanie/Odgrzybianie)",
      desc: "Przegląd układu klimatyzacji, sprawdzanie szczelności, ozonowanie oraz wymiana czynnika (R134a i 1234yf).",
      icon: <Wind className="w-8 h-8 text-primary" />
    },
    {
      title: "Serwis Opon (Wulkanizacja)",
      desc: "Sezonowa wymiana opon, wyważanie kół z testem drogowym, prostowanie felg oraz sprzedaż nowych opon.",
      icon: <Settings className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Nasze Usługi</h1>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Jesteśmy dumnym ekspertem motoryzatorskim z Nowego Sącza. Poznaj szeroką ofertę naszych usług naprawczych,
        które świadczymy od lat dla zachowania pełnego bezpieczeństwa.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((svc, idx) => (
          <Card key={idx} className="bg-card hover:border-primary transition-colors cursor-pointer">
            <CardHeader>
              <div className="mb-4 bg-background p-3 rounded-xl inline-flex w-fit border border-border">
                {svc.icon}
              </div>
              <CardTitle className="text-xl">{svc.title}</CardTitle>
              <CardDescription className="text-base">{svc.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
