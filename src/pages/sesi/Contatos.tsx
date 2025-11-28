import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";

interface Contact {
  name: string;
  role: string;
  area: string;
  email: string;
  phone: string;
  hours: string;
}

const contacts: Contact[] = [
  {
    name: "Ana Souza",
    role: "Técnica em Segurança do Trabalho",
    area: "Segurança do Trabalho",
    email: "ana.souza@sesi.org.br",
    phone: "(75) 98765-4321",
    hours: "Segunda a Sexta: 8h às 18h",
  },
  {
    name: "João Silva",
    role: "Coordenador de Saúde Ocupacional",
    area: "Saúde Ocupacional",
    email: "joao.silva@sesi.org.br",
    phone: "(75) 98765-1234",
    hours: "Segunda a Sexta: 8h às 18h",
  },
  {
    name: "Maria Santos",
    role: "Suporte Técnico",
    area: "Suporte InfoSesi",
    email: "suporte@sesi.org.br",
    phone: "(75) 3221-5500",
    hours: "Segunda a Sexta: 8h às 20h",
  },
  {
    name: "Carlos Oliveira",
    role: "Gerente de Atendimento",
    area: "Atendimento ao Cliente",
    email: "atendimento@sesi.org.br",
    phone: "(75) 3221-5555",
    hours: "Segunda a Sexta: 8h às 18h",
  },
];

export default function Contatos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12">
      <div className="container-custom max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Seus Pontos Focais no SESI</h1>
          <p className="text-muted-foreground">
            Entre em contato diretamente com os responsáveis por cada área
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{contact.name}</CardTitle>
                    <CardDescription className="text-base">{contact.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-primary/10 px-3 py-1.5 rounded-md inline-block">
                  <p className="text-sm font-medium text-primary">{contact.area}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-sm hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <a 
                      href={`https://wa.me/55${contact.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{contact.hours}</p>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="default" 
                    className="flex-1"
                    onClick={() => window.open(`https://wa.me/55${contact.phone.replace(/\D/g, '')}`, '_blank')}
                  >
                    WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.location.href = `mailto:${contact.email}`}
                  >
                    E-mail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Precisa de mais ajuda?</CardTitle>
            <CardDescription>
              Entre em contato com nossa Central de Atendimento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
              <div>
                <p className="font-medium">Central SESI Feira de Santana</p>
                <p className="text-sm text-muted-foreground">
                  Av. Exemplo, 1234 - Centro, Feira de Santana - BA
                </p>
              </div>
              <Button size="lg">Acessar Central de Mensagens</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
