
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocksmithToronto from "./pages/LocksmithToronto";
import LocksmithAurora from "./pages/LocksmithAurora";
import LocksmithBolton from "./pages/LocksmithBolton";
import LocksmithConcord from "./pages/LocksmithConcord";
import LocksmithEtobicoke from "./pages/LocksmithEtobicoke";
import LocksmithMaple from "./pages/LocksmithMaple";
import LocksmithMarkham from "./pages/LocksmithMarkham";
import LocksmithMississauga from "./pages/LocksmithMississauga";
import LocksmithNorthYork from "./pages/LocksmithNorthYork";
import LocksmithOakville from "./pages/LocksmithOakville";
import LocksmithRichmondHill from "./pages/LocksmithRichmondHill";
import LocksmithScarborough from "./pages/LocksmithScarborough";
import LocksmithThornhill from "./pages/LocksmithThornhill";
import LocksmithVaughan from "./pages/LocksmithVaughan";
import LocksmithBrampton from "./pages/LocksmithBrampton";

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
