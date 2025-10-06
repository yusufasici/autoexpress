
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocksmithToronto from "./pages/service-areas/LocksmithToronto";
import LocksmithAurora from "./pages/service-areas/LocksmithAurora";
import LocksmithBolton from "./pages/service-areas/LocksmithBolton";
import LocksmithConcord from "./pages/service-areas/LocksmithConcord";
import LocksmithEtobicoke from "./pages/service-areas/LocksmithEtobicoke";
import LocksmithMaple from "./pages/service-areas/LocksmithMaple";
import LocksmithMarkham from "./pages/service-areas/LocksmithMarkham";
import LocksmithMississauga from "./pages/service-areas/LocksmithMississauga";
import LocksmithNorthYork from "./pages/service-areas/LocksmithNorthYork";
import LocksmithOakville from "./pages/service-areas/LocksmithOakville";
import LocksmithRichmondHill from "./pages/service-areas/LocksmithRichmondHill";
import LocksmithScarborough from "./pages/service-areas/LocksmithScarborough";
import LocksmithThornhill from "./pages/service-areas/LocksmithThornhill";
import LocksmithVaughan from "./pages/service-areas/LocksmithVaughan";
import LocksmithBrampton from "./pages/service-areas/LocksmithBrampton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/locksmith-toronto" element={<LocksmithToronto />} />
          <Route path="/locksmith-aurora" element={<LocksmithAurora />} />
          <Route path="/locksmith-bolton" element={<LocksmithBolton />} />
          <Route path="/locksmith-concord" element={<LocksmithConcord />} />
          <Route path="/locksmith-etobicoke" element={<LocksmithEtobicoke />} />
          <Route path="/locksmith-maple" element={<LocksmithMaple />} />
          <Route path="/locksmith-markham" element={<LocksmithMarkham />} />
          <Route path="/locksmith-mississauga" element={<LocksmithMississauga />} />
          <Route path="/locksmith-northyork" element={<LocksmithNorthYork />} />
          <Route path="/locksmith-oakville" element={<LocksmithOakville />} />
          <Route path="/locksmith-richmondhill" element={<LocksmithRichmondHill />} />
          <Route path="/locksmith-scarborough" element={<LocksmithScarborough />} />
          <Route path="/locksmith-thornhill" element={<LocksmithThornhill />} />
          <Route path="/locksmith-vaughan" element={<LocksmithVaughan />} />
          <Route path="/locksmith-brampton" element={<LocksmithBrampton />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
