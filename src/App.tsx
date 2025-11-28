import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SesiLayout from "./pages/sesi/SesiLayout";
import Dashboard from "./pages/sesi/Dashboard";
import Jornada from "./pages/sesi/Jornada";
import UploadM1 from "./pages/sesi/UploadM1";
import Contatos from "./pages/sesi/Contatos";
import Treinamentos from "./pages/sesi/Treinamentos";
import Mensagens from "./pages/sesi/Mensagens";
import Login from "./pages/hospital/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<SesiLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jornada" element={<Jornada />} />
            <Route path="/upload-m1" element={<UploadM1 />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/treinamentos" element={<Treinamentos />} />
            <Route path="/mensagens" element={<Mensagens />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
