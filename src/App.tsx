import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GamesSection from "./components/GameSection";
import Timeline from "./components/timeline";
import { AgeProvider } from "./components/context/AgeContext";
import ChildrenLearning from "./components/hildrenLearning"; // Fixed typo in import 
import YouthLearning from "./components/YouthLearning";
import AdultsLearning from "./components/AdultsLearning";
import Articles from "./components/Articles";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AgeProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/games" element={<GamesSection />} />
            <Route path="/learning/children" element={<ChildrenLearning />} />
            <Route path="/learning/youth" element={<YouthLearning />} />{" "}
            {/* Fixed missing closing bracket */}
            <Route path="/learning/adults" element={<AdultsLearning />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/articles" element={<Articles />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AgeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
