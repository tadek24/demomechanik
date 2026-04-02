import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">O Nas</h1>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-300 mb-12 text-center">
          Dowiedz się więcej o naszej historii, zespole pasjonatów motoryzacji i profesjonalnym wyposażeniu naszego warsztatu.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Nasza Historia</h2>
            <p className="text-gray-400 mb-4">
              Początki naszego warsztatu sięgają 2010 roku. Zaczynaliśmy jako mały, rodzinny garaż w Nowym Sączu.
              Dzięki pasji i uczciwemu podejściu szybko zyskaliśmy zaufanie lokalnej społeczności.
            </p>
            <p className="text-gray-400">
              Dziś jesteśmy jednym z najnowocześniejszych centrów motoryzacyjnych w regionie, naprawiamy nowoczesne pojazdy używając zaawansowanych technologii.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg border border-border">
             <Image 
                src="https://images.unsplash.com/photo-1632823465306-edeb5ce5e6f6?auto=format&fit=crop&q=80"
                alt="Historia warsztatu Nowy Sącz"
                fill
                className="object-cover"
              />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-white text-center">Nasz Zespół i Wyposażenie</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
             <CardContent className="pt-6">
                <div className="w-full h-40 bg-neutral-800 rounded-md mb-4 flex items-center justify-center border border-border">
                  <span className="text-gray-500">Zdjęcie Głównego Mechanika</span>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Krzysztof - Head Mechanic</h3>
                <p className="text-sm text-gray-400">15 lat doświadczenia w elektronice samochodowej.</p>
             </CardContent>
          </Card>
          <Card>
             <CardContent className="pt-6">
                <div className="w-full h-40 bg-neutral-800 rounded-md mb-4 flex items-center justify-center border border-border">
                  <span className="text-gray-500">Zdjęcie Sprzętu</span>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Tester Delphi</h3>
                <p className="text-sm text-gray-400">Zaawansowana diagnostyka komputerowa każdego modułu.</p>
             </CardContent>
          </Card>
          <Card>
             <CardContent className="pt-6">
                <div className="w-full h-40 bg-neutral-800 rounded-md mb-4 flex items-center justify-center border border-border">
                  <span className="text-gray-500">Logo Certyfikatu</span>
                </div>
                <h3 className="font-semibold text-lg text-white mb-2">Certyfikaty ASO</h3>
                <p className="text-sm text-gray-400">Przeszliśmy setki godzin szkoleń u autoryzowanych dealerów.</p>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
