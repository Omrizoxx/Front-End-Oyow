import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DestinationsPage from "./pages/Destinations";
import ExperiencesPage from "./pages/Experiences";
import AboutPage from "./pages/About";
import BookingsPage from "./pages/BookingsPage";
import SecurityServicesPage from "./pages/SecurityServices";
import SecurityBookingPage from "./pages/SecurityBooking";
import SecurityCheckoutPage from "./pages/SecurityCheckout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Html/Destinations.html" element={<DestinationsPage />} />
          <Route path="/Html/Experiences.html" element={<ExperiencesPage />} />
          <Route path="/Html/about.html" element={<AboutPage />} />
          <Route path="/Html/contact.html" element={<ContactPage />} />
          <Route path="/Html/bookings.html" element={<BookingsPage />} />
          <Route path="/Html/security.html" element={<SecurityServicesPage />} />
          <Route path="/Html/security-booking.html" element={<SecurityBookingPage />} />
          <Route path="/Html/security-checkout.html" element={<SecurityCheckoutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
