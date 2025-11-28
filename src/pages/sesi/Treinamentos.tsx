import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, BookOpen } from "lucide-react";

export default function Treinamentos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
      <div className="container-custom max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Treinamentos e Materiais de Apoio</h1>
          <p className="text-muted-foreground">
            Aprenda a usar a plataforma InfoSesi e tire suas dúvidas
          </p>
        </div>

        {/* Vídeos */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold">Vídeos Tutoriais</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                Como usar o InfoSesi
              </CardTitle>
              <CardDescription>
                Tutorial completo sobre navegação e funcionalidades principais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <PlayCircle className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground">Vídeo tutorial do InfoSesi</p>
                  <Button>Assistir Vídeo</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlayCircle className="h-5 w-5 text-primary" />
                Como agendar exames
              </CardTitle>
              <CardDescription>
                Passo a passo para realizar agendamentos de exames ocupacionais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <PlayCircle className="h-16 w-16 text-muted-foreground mx-auto" />
                  <p className="text-sm text-muted-foreground">Tutorial de agendamento</p>
                  <Button>Assistir Vídeo</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mini Tutoriais */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-semibold">Guias Rápidos</h2>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Como validar documentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside text-sm">
                <li>Acesse a área "Minha Jornada" no menu principal</li>
                <li>Localize o documento que deseja validar (PGR ou PCMSO)</li>
                <li>Clique em "Visualizar Documento" para fazer o download</li>
                <li>Revise o conteúdo e, se estiver de acordo, clique em "Aprovar"</li>
                <li>Caso identifique alguma correção, utilize o botão "Solicitar Ajustes"</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Como enviar a Planilha M1
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside text-sm">
                <li>Prepare sua planilha com dados completos de todos os trabalhadores</li>
                <li>Acesse a opção "Enviar Planilha M1" no dashboard</li>
                <li>Clique em "Selecionar Arquivo" e escolha a planilha (PDF, XLS ou XLSX)</li>
                <li>Verifique o nome do arquivo e clique em "Enviar"</li>
                <li>Aguarde a confirmação de recebimento</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Como acompanhar prazos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 list-decimal list-inside text-sm">
                <li>Acesse a timeline na página "Minha Jornada"</li>
                <li>Visualize todas as etapas e seus respectivos status</li>
                <li>Etapas com datas agendadas aparecem com ícone de relógio</li>
                <li>Receba notificações automáticas sobre mudanças de status</li>
                <li>Use o dashboard para ver um resumo rápido do progresso</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Downloads */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Materiais para Download</h2>

          <Card>
            <CardHeader>
              <CardTitle>Manual Completo do InfoSesi</CardTitle>
              <CardDescription>
                Documento em PDF com todas as instruções detalhadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full md:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Baixar Manual (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modelo de Planilha M1</CardTitle>
              <CardDescription>
                Template padrão para preenchimento dos dados dos trabalhadores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full md:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Baixar Modelo (XLSX)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
