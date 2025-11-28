import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Upload, FileCheck, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function UploadM1() {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Por favor, selecione um arquivo");
      return;
    }

    // Simular upload
    setTimeout(() => {
      setUploaded(true);
      toast.success("Planilha M1 recebida com sucesso!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
      <div className="container-custom max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Envio da Planilha M1</h1>
          <p className="text-muted-foreground">
            Faça upload da planilha com dados dos trabalhadores
          </p>
        </div>

        {!uploaded ? (
          <Card>
            <CardHeader>
              <CardTitle>Upload do Arquivo</CardTitle>
              <CardDescription>
                A Planilha M1 é o primeiro passo para iniciar seu PGR e PCMSO. 
                Envie o arquivo em formato PDF, XLS ou XLSX.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="file">Selecione o arquivo</Label>
                  <div className="flex items-center gap-4">
                    <Input
                      id="file"
                      type="file"
                      accept=".pdf,.xls,.xlsx"
                      onChange={handleFileChange}
                      className="flex-1"
                    />
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                  {file && (
                    <p className="text-sm text-muted-foreground">
                      Arquivo selecionado: <span className="font-medium">{file.name}</span>
                    </p>
                  )}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Informações importantes:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Formato aceito: PDF, XLS ou XLSX</li>
                        <li>• Tamanho máximo: 20MB</li>
                        <li>• A planilha deve conter dados completos de todos os trabalhadores</li>
                        <li>• Após o envio, a visita técnica será agendada</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={!file}>
                  Enviar Planilha M1
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-green-100 p-4 rounded-full">
                    <FileCheck className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-green-900 mb-2">
                    M1 Recebida com Sucesso!
                  </h2>
                  <p className="text-green-700">
                    Sua planilha foi enviada e será processada em breve. 
                    A próxima etapa é o agendamento da visita técnica.
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/jornada")} variant="default">
                    Ver Jornada
                  </Button>
                  <Button onClick={() => navigate("/dashboard")} variant="outline">
                    Voltar ao Dashboard
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
