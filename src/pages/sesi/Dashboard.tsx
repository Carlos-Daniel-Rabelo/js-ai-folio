import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { AlertCircle, CheckCircle2, Clock, FileText, Users, BookOpen } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Bem-vindo, Indústria XPTO</h1>
          <p className="text-muted-foreground">Acompanhe o status dos seus serviços SESI</p>
        </div>

        {/* Alertas */}
        <div className="space-y-4 mb-8">
          <Alert className="border-destructive/50 bg-destructive/10">
            <AlertCircle className="h-4 w-4 text-destructive" />
            <AlertDescription className="text-destructive">
              <strong>Ação necessária:</strong> Planilha M1 não enviada — necessário para iniciar atendimento
            </AlertDescription>
          </Alert>
          <Alert className="border-primary/50 bg-primary/10">
            <Clock className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              Treinamento do InfoSesi não realizado. <Link to="/treinamentos" className="underline font-medium">Acesse aqui</Link>
            </AlertDescription>
          </Alert>
        </div>

        {/* Cards de Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PGR</CardTitle>
              <CardDescription>Programa de Gerenciamento de Riscos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={40} className="h-2" />
                <p className="text-2xl font-bold text-primary">40%</p>
                <p className="text-sm text-muted-foreground">Em elaboração</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PCMSO</CardTitle>
              <CardDescription>Programa de Controle Médico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={0} className="h-2" />
                <p className="text-2xl font-bold text-muted-foreground">0%</p>
                <p className="text-sm text-muted-foreground">Aguardando PGR</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Planilha M1</CardTitle>
              <CardDescription>Dados dos trabalhadores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <p className="text-sm font-medium text-destructive">Envio Pendente</p>
                <Link to="/upload-m1">
                  <Button size="sm" variant="destructive" className="w-full mt-2">
                    Enviar Agora
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Próximo Passo</CardTitle>
              <CardDescription>Ação recomendada</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Clock className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium">Agendar Visita Técnica</p>
                <p className="text-xs text-muted-foreground">Após envio da M1</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acesso Rápido */}
        <Card>
          <CardHeader>
            <CardTitle>Acesso Rápido</CardTitle>
            <CardDescription>Navegue rapidamente pelas principais áreas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/jornada">
                <Button variant="outline" className="w-full h-auto flex flex-col items-center gap-2 py-4">
                  <CheckCircle2 className="h-6 w-6" />
                  <span>Ver Jornada Completa</span>
                </Button>
              </Link>
              <Link to="/upload-m1">
                <Button variant="outline" className="w-full h-auto flex flex-col items-center gap-2 py-4">
                  <FileText className="h-6 w-6" />
                  <span>Enviar Planilha M1</span>
                </Button>
              </Link>
              <Link to="/treinamentos">
                <Button variant="outline" className="w-full h-auto flex flex-col items-center gap-2 py-4">
                  <BookOpen className="h-6 w-6" />
                  <span>Treinamentos InfoSesi</span>
                </Button>
              </Link>
              <Link to="/contatos">
                <Button variant="outline" className="w-full h-auto flex flex-col items-center gap-2 py-4">
                  <Users className="h-6 w-6" />
                  <span>Contatos SESI</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Barra de Progresso Geral */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Progresso Geral</CardTitle>
            <CardDescription>Acompanhamento de toda a jornada SESI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={25} className="h-3" />
              <p className="text-sm text-muted-foreground">25% concluído</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
