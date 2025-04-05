import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import DecorationServices from "@/pages/DecorationServices";
import WeddingVenueServices from "@/pages/WeddingVenueServices";
import PhotographyServices from "@/pages/PhotographyServices";
import FoodBeveragesServices from "@/pages/FoodBeveragesServices";
import EntertainmentServices from "@/pages/EntertainmentServices";
import HospitalityServices from "@/pages/HospitalityServices";
import TransportationServices from "@/pages/TransportationServices";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/decoration" element={<DecorationServices />} />
          <Route path="/services/wedding&venue" element={<WeddingVenueServices />} />
          <Route path="/services/photography" element={<PhotographyServices />} />
          <Route path="/services/Food&Beverages" element={<FoodBeveragesServices />} />
          <Route path="/services/entertainment" element={<EntertainmentServices />} />
          <Route path="/services/hospitality" element={<HospitalityServices />} />
          <Route path="/services/transportation" element={<TransportationServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
