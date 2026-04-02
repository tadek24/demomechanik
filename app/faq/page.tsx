"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqPage() {
  const faqs = [
    {
      question: "Czy oferujecie naprawy bez wcześniejszego umówienia wizyty?",
      answer: "Jeśli sprawa jest bardzo pilna (np. awaria na drodze), robimy wszystko by pomóc od ręki. Zalecamy jednak rezerwację telefoniczną, by oszczędzić Twój czas."
    },
    {
      question: "Czy mogę otrzymać samochód zastępczy?",
      answer: "Tak, dysponujemy flotą 3 pojazdów zastępczych. Poinformuj nas przy rezerwacji, jeśli będziesz potrzebować auta na czas naprawy."
    },
    {
      question: "Z jakich części zamiennych korzystacie?",
      answer: "Domyślnie proponujemy oryginalne części OEM lub certyfikowane zamienniki najwyższej jakości (np. Bosch, Lemforder). Możemy również użyć tańszych zamienników, jednak zawsze na życzenie i ryzyko klienta."
    },
    {
      question: "Ile zazwyczaj trwa pełna diagnostyka komputerowa?",
      answer: "Samo podpięcie do komputera i sczytanie błędów to około 15-30 minut. Dogłębna analiza parametrów rzeczywistych w czasie jazdy może potrwać do 1 godziny."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="container mx-auto px-4 py-16 lg:px-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Często Zadawane Pytania (FAQ)</h1>
      <p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto">
        Zebraliśmy odpowiedzi na pytania najczęściej zadawane przez naszych klientów.
      </p>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="mb-4 border border-border rounded-lg bg-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <span className="font-semibold text-lg text-white">{faq.question}</span>
                <span className="text-primary flex-shrink-0 ml-4">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {isOpen && (
                <div className="p-6 pt-0 border-t border-border/50 text-gray-400 bg-background/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
