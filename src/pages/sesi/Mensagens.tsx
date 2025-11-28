import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const messageSchema = z.object({
  subject: z.string().min(5, "Assunto deve ter no mínimo 5 caracteres").max(100),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres").max(1000),
});

type MessageFormData = z.infer<typeof messageSchema>;

export default function Mensagens() {
  const [sent, setSent] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = (data: MessageFormData) => {
    console.log("Mensagem:", data);
    setSent(true);
    toast.success("📨 Sua mensagem foi registrada!");
    reset();
    
    // Reset sent state after 5 seconds
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
      <div className="container-custom max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Fale com o SESI</h1>
          <p className="text-muted-foreground">
            Envie sua mensagem e nossa equipe retornará em breve
          </p>
        </div>

        {sent && (
          <Card className="mb-6 border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-900">Mensagem enviada com sucesso!</p>
                  <p className="text-sm text-green-700">
                    Recebemos sua mensagem. Retornaremos em breve.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Envie sua Mensagem
            </CardTitle>
            <CardDescription>
              Preencha o formulário abaixo com suas dúvidas ou solicitações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  placeholder="Ex: Dúvida sobre PGR"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva sua dúvida ou solicitação..."
                  rows={6}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p className="text-sm font-medium">Dicas para um melhor atendimento:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Seja claro e objetivo em sua mensagem</li>
                  <li>• Informe o número do seu contrato, se aplicável</li>
                  <li>• Para questões urgentes, utilize os contatos diretos disponíveis</li>
                  <li>• Tempo de resposta estimado: até 24 horas úteis</li>
                </ul>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Precisa de atendimento mais rápido?</CardTitle>
            <CardDescription>
              Acesse nossa página de contatos para falar diretamente com os responsáveis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full md:w-auto" asChild>
              <a href="/contatos">Ver Contatos SESI</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
