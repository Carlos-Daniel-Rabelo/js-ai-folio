import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Activity, Users, Shield, Award } from "lucide-react";
import HeroSlider from "@/components/hospital/HeroSlider";

export default function Home() {
  const features = [
    {
      icon: Stethoscope,
      title: "Especialidades Médicas",
      description: "Mais de 30 especialidades médicas com profissionais altamente qualificados.",
    },
    {
      icon: Activity,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para diagnósticos precisos e tratamentos eficazes.",
    },
    {
      icon: Shield,
      title: "Segurança e Qualidade",
      description: "Protocolos rigorosos de segurança e qualidade certificados internacionalmente.",
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Equipe dedicada ao acolhimento e cuidado personalizado de cada paciente.",
    },
  ];

  const stats = [
    { value: "30+", label: "Especialidades" },
    { value: "200+", label: "Médicos" },
    { value: "50k+", label: "Pacientes/Ano" },
    { value: "25+", label: "Anos de Experiência" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 section-padding">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Certificação Internacional de Qualidade</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Cuidando da sua saúde com{" "}
                <span className="text-primary">excelência</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Hospital de referência em atendimento médico, com tecnologia de ponta e equipe especializada. Sua saúde e bem-estar são nossa prioridade.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/servicos">
                  <Button size="lg" className="w-full sm:w-auto">
                    Nossos Serviços
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Por que escolher nosso hospital?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos cuidados médicos de excelência com infraestrutura moderna e equipe altamente capacitada.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Agende sua consulta hoje mesmo
            </h2>
            <p className="text-lg text-muted-foreground">
              Nossa equipe está pronta para atendê-lo com excelência e dedicação. Entre em contato e cuide da sua saúde.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/contato">
                <Button size="lg" className="w-full sm:w-auto">
                  Entrar em Contato
                </Button>
              </Link>
              <Link to="/produtos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Conheça Nossos Planos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
