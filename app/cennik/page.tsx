"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import Link from "next/link";

export default function PricingCalculatorPage() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [service, setService] = useState("");
  
  const [isCalculated, setIsCalculated] = useState(false);
  const [priceRange, setPriceRange] = useState("");

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand || !model || !year || !service) return;
    
    // Prosta symulacja wyceny
    let min = 200;
    let max = 450;
    
    if (service.includes("Rozrząd")) { min = 1200; max = 2500; }
    if (service.includes("Klimatyzacja")) { min = 150; max = 300; }
    if (brand === "BMW" || brand === "Audi") { min += 150; max += 300; }
    
    setPriceRange(`${min} - ${max} zł`);
    setIsCalculated(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-black mb-6 text-white text-center">Kalkulator Wyceny</h1>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Skorzystaj z naszego inteligentnego interfejsu by poznać szacunkowe koszty naprawy. Szanujemy transparentność cenową.
      </p>

      <div className="max-w-xl mx-auto">
        <Card className="bg-card shadow-2xl border-border/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          
          <CardHeader className="border-b border-border/50 pb-6">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Calculator className="text-primary"/> Parametry pojazdu
            </CardTitle>
          </CardHeader>
          
          <CardContent className="pt-8">
            <form onSubmit={handleCalculate} className="space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Marka</label>
                  <select 
                    value={brand} 
                    onChange={(e) => {setBrand(e.target.value); setIsCalculated(false)}}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  >
                    <option value="" disabled>Wybierz...</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Skoda">Skoda</option>
                    <option value="Inna">Inna</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Model</label>
                  <input 
                    type="text" 
                    value={model} 
                    onChange={(e) => {setModel(e.target.value); setIsCalculated(false)}}
                    placeholder="Np. A4, E90..." 
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Rocznik</label>
                  <select 
                    value={year} 
                    onChange={(e) => {setYear(e.target.value); setIsCalculated(false)}}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  >
                    <option value="" disabled>Wybierz...</option>
                    {Array.from({length: 15}, (_, i) => 2024 - i).map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Rodzaj usługi</label>
                  <select 
                    value={service} 
                    onChange={(e) => {setService(e.target.value); setIsCalculated(false)}}
                    className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                  >
                    <option value="" disabled>Wybierz...</option>
                    <option value="Wymiana oleju i filtrów">Wymiana oleju i filtrów</option>
                    <option value="Wymiana Klocków/Tarcz">Wymiana Klocków/Tarcz</option>
                    <option value="Serwis Klimatyzacji">Serwis Klimatyzacji</option>
                    <option value="Wymiana Rozrządu">Wymiana Rozrządu</option>
                  </select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg mt-4">
                Sprawdź szacunkową cenę
              </Button>
            </form>

            <AnimatePresence>
              {isCalculated && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -20, height: 0 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                  className="mt-8 pt-8 border-t border-border/50 text-center"
                >
                  <div className="inline-flex items-center justify-center gap-2 text-primary font-bold tracking-widest text-sm uppercase mb-2">
                    <CheckCircle2 size={16} /> Wycena wygenerowana
                  </div>
                  <div className="text-5xl font-black text-white mb-6 tracking-tight">
                    {priceRange}
                  </div>
                  <p className="text-sm text-gray-500 bg-background/50 border border-border/40 rounded-lg p-4 mb-8">
                    * Cena jest orientacyjna i opiera się na uśrednionych stawkach pojazdów z tej grupy. <strong>Dokładna wycena następuje po darmowych oględzinach na miejscu w Ptaszkowej</strong>.
                  </p>
                  
                  <Link href="/rezerwacja">
                    <Button size="lg" className="w-full h-16 text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                      Zarezerwuj ten termin
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
