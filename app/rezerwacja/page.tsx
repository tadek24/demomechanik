import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Zarezerwuj Termin</h1>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Wybierz interesującą Cię usługę i dogodny termin, a następnie podaj swoje dane. Ekran działa jako demonstracyjny interfejs rezerwacji.
      </p>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Formularz Online</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Rodzaj usługi</label>
              <select className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Wymiana oleju i filtrów</option>
                <option>Diagnostyka komputerowa</option>
                <option>Serwis Klimatyzacji</option>
                <option>Wulkanizacja (Wymiana opon)</option>
                <option>Inna naprawa</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Preferowana data</label>
                <input type="date" className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Preferowana godzina</label>
                <input type="time" className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Imię i Nazwisko</label>
                <input type="text" placeholder="Jan Kowalski" className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">Telefon</label>
                <input type="tel" placeholder="+48 XXX XXX XXX" className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"/>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-200">Dodatkowe informacje (Marka, model, rocznik auta)</label>
              <textarea rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Np. BMW Seria 3, E90, 2010..."></textarea>
            </div>

            <Button size="lg" className="w-full text-lg h-14">
              Zatwierdź Rezerwację
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
