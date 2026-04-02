"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Info, Calendar as CalIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Mocked calendar state: day numbers. (gray logic: some are taken like 14, 15, 20)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const takenDays = [1, 2, 4, 10, 11, 14, 15, 17, 24, 25];

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-black mb-6 text-white text-center">Zarezerwuj Termin Oględzin</h1>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Jesteśmy dumni z naszej punktualności. Wybierz dogodny dla Ciebie termin, abyśmy mogli od razu zabrać się za Twoje auto. 
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Calendar Mockup UI */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ duration: 0.5 }}
          >
            <Card className="bg-card shadow-xl border-border/80 h-full">
              <CardHeader className="bg-background/50 border-b border-border/50 pb-6 rounded-t-xl">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CalIcon className="text-primary"/> Październik 2026
                  </CardTitle>
                  <div className="flex gap-2 text-gray-400">
                    <button className="p-1 hover:text-white transition-colors bg-neutral-800 rounded-md">
                      <ChevronLeft size={20} />
                    </button>
                    <button className="p-1 hover:text-white transition-colors bg-neutral-800 rounded-md">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <div>Pon</div><div>Wto</div><div>Śro</div><div>Czw</div><div>Pią</div><div>Sob</div><div>Nie</div>
                </div>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {/* Empty cells for offset */}
                  <div className="h-10"></div>
                  <div className="h-10"></div>
                  
                  {daysInMonth.map(day => {
                    const isTaken = takenDays.includes(day);
                    const isSelected = selectedDay === day;
                    return (
                       <button
                         key={day}
                         disabled={isTaken}
                         onClick={() => setSelectedDay(day)}
                         className={`h-11 rounded-md text-sm font-medium transition-all duration-200 border
                          ${isTaken 
                            ? 'bg-neutral-900 border-neutral-900 text-neutral-700 cursor-not-allowed line-through decoration-neutral-800' 
                            : isSelected
                               ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 transform scale-110 z-10'
                               : 'bg-card border-border hover:border-emerald-500/50 hover:bg-emerald-500/10 text-gray-300'
                          } 
                         `}
                       >
                         {day}
                       </button>
                    )
                  })}
                </div>

                <div className="flex gap-4 text-xs mt-8 pb-2 border-b border-border/40">
                   <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-700"></span> Zajęte
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-card border border-emerald-500/50"></span> Wolne
                   </div>
                   <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-primary shadow-sm shadow-primary/40"></span> Wybrane
                   </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Form & Info */}
          <motion.div
             initial={{ opacity: 0, x: 30 }} 
             animate={{ opacity: 1, x: 0 }} 
             transition={{ duration: 0.5, delay: 0.1 }}
             className="flex flex-col h-full gap-6"
          >
             <Card className="flex-1 bg-card shadow-xl border-border/80">
                <CardHeader>
                   <CardTitle className="text-xl">Szczegóły wizyty</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Wybrany dzień</label>
                      <div className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-white font-mono">
                         {selectedDay ? `${selectedDay} Październik 2026, godzina ustalana telefonicznie` : "Wybierz datę z kalendarza po lewej..."}
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Numer kontaktowy</label>
                      <input type="tel" placeholder="+48 --- --- ---" className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"/>
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Opis problemu (opcjonalnie)</label>
                      <textarea rows={3} placeholder="Stuka w prawym kole podczas skrętu..." className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                   </div>
                   
                   <Button size="lg" className="w-full text-lg h-14 mt-4" disabled={!selectedDay}>
                      Rezerwuję Termin
                   </Button>
                </CardContent>
             </Card>

             {/* SEO & Trust message below calendar */}
             <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 flex gap-4 items-start shadow-sm shadow-primary/5">
                <Info className="text-primary mt-1 flex-shrink-0" size={24}/>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  <strong>Każda rezerwacja jest bezwzględnie potwierdzana wiadomością SMS</strong> oraz wpisywana do naszego systemu. 
                  Gdy uruchomimy pełną platformę dla warsztatu, system zarejestruje integrację i zsynchronizujemy kalendarz wizyt prosto z Twoim Kalendarzem Google!
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
