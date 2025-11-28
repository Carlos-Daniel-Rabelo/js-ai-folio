import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, AlertCircle, Circle } from "lucide-react";

type StepStatus = "completed" | "in-progress" | "pending" | "delayed";

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  status: StepStatus;
  progress?: number;
  date?: string;
}

const steps: JourneyStep[] = [
  {
    id: 1,
    title: "Envio da Planilha M1",
    description: "Dados dos trabalhadores da empresa",
    status: "pending",
  },
  {
    id: 2,
    title: "Visita Técnica Agendada",
    description: "Análise presencial das instalações",
    status: "pending",
    date: "12/04/2025",
  },
  {
    id: 3,
    title: "Elaboração do PGR",
    description: "Programa de Gerenciamento de Riscos",
    status: "in-progress",
    progress: 40,
  },
  {
    id: 4,
    title: "PGR Entregue",
    description: "Documento finalizado e enviado",
    status: "pending",
  },
  {
    id: 5,
    title: "Validação do Cliente",
    description: "Aprovação do PGR pelo cliente",
    status: "pending",
  },
  {
    id: 6,
    title: "Elaboração do PCMSO",
    description: "Programa de Controle Médico de Saúde Ocupacional",
    status: "pending",
  },
  {
    id: 7,
    title: "PCMSO Entregue",
    description: "Documento finalizado e enviado",
    status: "pending",
  },
  {
    id: 8,
    title: "Treinamento InfoSesi",
    description: "Capacitação para uso da plataforma",
    status: "pending",
  },
  {
    id: 9,
    title: "Agendamentos Liberados",
    description: "Sistema pronto para agendamento de exames",
    status: "pending",
  },
];

const getStatusIcon = (status: StepStatus) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-6 w-6 text-green-600" />;
    case "in-progress":
      return <Clock className="h-6 w-6 text-primary" />;
    case "delayed":
      return <AlertCircle className="h-6 w-6 text-destructive" />;
    default:
      return <Circle className="h-6 w-6 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: StepStatus) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-600">Concluído</Badge>;
    case "in-progress":
      return <Badge className="bg-primary">Em Andamento</Badge>;
    case "delayed":
      return <Badge variant="destructive">Atrasado</Badge>;
    default:
      return <Badge variant="outline">Pendente</Badge>;
  }
};

export default function Jornada() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
      <div className="container-custom max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Jornada do seu Atendimento SESI</h1>
          <p className="text-muted-foreground">
            Acompanhe todas as etapas do processo em tempo real
          </p>
        </div>

        {/* Progresso Geral */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Progresso Geral</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={25} className="h-3" />
              <p className="text-sm text-muted-foreground">25% concluído - 2 de 9 etapas</p>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="relative space-y-6">
          {/* Linha vertical */}
          <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />

          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="flex gap-6">
                {/* Ícone de status */}
                <div className="relative z-10 flex-shrink-0">
                  {getStatusIcon(step.status)}
                </div>

                {/* Conteúdo do card */}
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{step.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {getStatusBadge(step.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {step.progress !== undefined && (
                      <div className="space-y-2">
                        <Progress value={step.progress} className="h-2" />
                        <p className="text-sm font-medium">{step.progress}% concluído</p>
                      </div>
                    )}
                    {step.date && (
                      <p className="text-sm font-medium">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Agendado para {step.date}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
