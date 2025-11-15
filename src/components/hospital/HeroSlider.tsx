import { useEffect, useState } from "react";
import { Heart, Stethoscope, Activity, Users, Shield, Award } from "lucide-react";

const slides = [
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: Stethoscope,
    title: "Especialidades Médicas",
    gradient: "from-primary/20 to-blue-500/20"
  },
  {
    icon: Activity,
    title: "Tecnologia Avançada",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    gradient: "from-accent/20 to-green-600/20"
  },
  {
    icon: Shield,
    title: "Segurança e Qualidade",
    gradient: "from-primary/20 to-indigo-500/20"
  },
  {
    icon: Award,
    title: "Certificação Internacional",
    gradient: "from-yellow-500/20 to-orange-500/20"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-2xl transition-all duration-1000 ease-in-out`}
      />
      <div className="absolute inset-4 bg-background/95 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center gap-6 overflow-hidden">
        <div className="relative">
          <CurrentIcon 
            className="h-32 w-32 text-primary animate-fade-in" 
            strokeWidth={1.5}
          />
          <div className="absolute inset-0 h-32 w-32 text-primary/30 blur-xl animate-pulse" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground animate-fade-in text-center px-4">
          {slides[currentSlide].title}
        </h3>
      </div>
      
      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-primary" 
                : "w-2 bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
