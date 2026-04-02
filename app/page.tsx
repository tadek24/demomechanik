"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Wrench, ShieldCheck, Clock, Settings, Star, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/Card";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" as const }
  };

  return (
    <div className="overflow-hidden">
      {/* Framer Motion Animowany Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0 h-full w-full">
          <div className="absolute inset-0 bg-background/80 lg:bg-background/60 z-10 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          <motion.div 
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1520638575005-59fb95dc7c96?q=80&w=1500&auto=format&fit=crop"
              alt="Ekskluzywny warsztat i mechanik w Ptaszkowej"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
        
        <div className="container relative z-20 mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary uppercase tracking-widest text-xs font-bold mb-6">
              <Star className="w-3 h-3 fill-current" /> Najwyższa jakość napraw
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Twój zaufany <span className="text-primary">mechanik</span> w Ptaszkowej
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
              Oferujemy najwyższy standard diagnostyki i napraw. Szybki dojazd, auto zastępcze i 
              laweta dla klientów z okolicznych miejscowości (Grybów, Nowy Sącz).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rezerwacja">
                <Button size="lg" className="w-full sm:w-auto text-lg no-underline font-semibold h-14 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                  Zarezerwuj wizytę
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zaufaj profesjonalistom */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            {...fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Zaufaj profesjonalistom</h2>
            <p className="text-gray-400 text-lg">Ptaszkowa to nasze serce operacyjne, ale pomagamy kierowcom z całej południowej Małopolski.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Gwarancji Uczciwości", desc: "Najpierw dzwonimy z kosztorysem. Brak ukrytych opłat napraw, zero wymuszonych wymian sprawnych części." },
              { icon: Clock, title: "Zawsze na Czas", desc: "Precyzyjnie ustalamy termin odbioru auta. Jeśli potrzebujesz, udostępniamy zastępcze auto na czas dłuższego serwisu." },
              { icon: Settings, title: "Aparatura Premium", desc: "Sprzęt diagnostyczny najnowszej generacji. Kody błędów, adaptacje i kodowanie komponentów w cenie wizyty." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group"
              >
                <Card className="bg-card/40 backdrop-blur-sm border-border/60 hover:bg-card/80 hover:border-primary/50 transition-all duration-300 rounded-2xl h-full shadow-lg shadow-black/20">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <feature.icon size={26} />
                    </div>
                    <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-base leading-relaxed">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Efektowna sekcja o usługach z Unsplash Image */}
      <section className="py-24 bg-card/20 border-y border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              {...slideInRight}
              initial={{ opacity: 0, x: -60 }}
              className="lg:w-1/2 w-full relative"
            >
              <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden border border-border shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <Image 
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
                  alt="Precyzyjna mechanika i diagnostyka Ptaszkowa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 md:-right-10 bg-background border border-primary/30 p-6 rounded-2xl shadow-xl shadow-primary/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle2 fill="currentColor" className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-xl">Precyzja</p>
                    <p className="text-gray-400 text-sm">w każdym detalu</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              {...slideInRight}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Wjeżdżasz problemem, wyjeżdżasz <span className="text-primary">rozwiązaniem</span></h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Nasz warsztat w Ptaszkowej to owoc wielu lat pasji. Zapewniamy kompleksową mechanikę i diagnostykę. 
                Gwarantujemy wparcie - laweta, auto zastępcze czy odwiezienie klienta do pobliskiego Nowego Sącza lub Grybowa to dla nas żaden problem.
              </p>
              
              <ul className="space-y-5 mb-10">
                {[
                  "Kompleksowa mechanika pojazdowa i remonty silników",
                  "Geometria 3D, zawieszenie i układy hamulcowe",
                  "Elektro-mechanika, Chiptuning, DPF, EGR",
                  "Pełny serwis klimatyzacji najnowszym gazem"
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-card/60 p-4 rounded-xl border border-border/50"
                  >
                    <Wrench className="text-primary flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/uslugi">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-xl">Sprawdź pełny cennik</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
