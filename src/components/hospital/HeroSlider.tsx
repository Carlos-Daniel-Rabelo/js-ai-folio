import { useEffect, useState } from "react";
import hospitalCare from "@/assets/hospital-care.jpg";
import hospitalSpecialties from "@/assets/hospital-specialties.jpg";
import hospitalTechnology from "@/assets/hospital-technology.jpg";
import hospitalTeam from "@/assets/hospital-team.jpg";
import hospitalSafety from "@/assets/hospital-safety.jpg";
import hospitalCertification from "@/assets/hospital-certification.jpg";

const slides = [
  {
    image: hospitalCare,
    title: "Cuidado Humanizado",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    image: hospitalSpecialties,
    title: "Especialidades Médicas",
    gradient: "from-primary/20 to-blue-500/20"
  },
  {
    image: hospitalTechnology,
    title: "Tecnologia Avançada",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    image: hospitalTeam,
    title: "Equipe Qualificada",
    gradient: "from-accent/20 to-green-600/20"
  },
  {
    image: hospitalSafety,
    title: "Segurança e Qualidade",
    gradient: "from-primary/20 to-indigo-500/20"
  },
  {
    image: hospitalCertification,
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

  return (
    <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden">
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-1000 ease-in-out`}
      />
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
      <div className="absolute bottom-16 left-0 right-0 px-6">
        <h3 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in text-center drop-shadow-lg">
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
