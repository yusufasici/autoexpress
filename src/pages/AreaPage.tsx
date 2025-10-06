

import React from "react";
import { Clock, Zap, Award, DollarSign, MapPin, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import logomascot from "@/assets/logomascot2.png";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AreaPageProps {
  city: string;
  phone?: string;
}

const AreaPage: React.FC<AreaPageProps> = ({ city, phone = "(647) 906-8124" }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <Helmet>
      <title>Locksmith {city} | 24/7 Local Locksmith Services | AutoKey Express</title>
      <meta name="description" content={`Need a locksmith in ${city}? AutoKey Express offers fast, reliable, and professional locksmith services for vehicles, homes, and businesses across ${city}. 24/7 emergency service.`} />
      <link rel="canonical" href={`https://autokeyexpress.ca/locksmith-${city.toLowerCase().replace(/\s/g, "")}`} />
      <meta property="og:title" content={`Locksmith ${city} | AutoKey Express`} />
      <meta property="og:description" content={`24/7 Locksmith in ${city}. Car, home, and business lockouts, key replacement, rekeying, and more. Call now!`} />
    </Helmet>
    {/* Hero Section for City Page (city-specific content injected) */}
    <Hero>
      {/* Logo Mascot*/}
      <div className="flex items-center justify-center">
        <img src={logomascot} className="h-56 w-auto opacity-50 object-contain" alt="AutoKey Express Mascot" />
      </div>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
        Automotive • Residential • Commercial • Locksmith Services<br />
        Fast • Reliable • Licenced • Insured • Certified
      </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-[var(--shadow-glow)]"
            asChild
        >
            <a href="tel:+16479068124">
            <Phone className="h-6 w-6" />
            Call Now: (647) 906-8124
            </a>
        </Button>
        <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-[var(--shadow-glow)]"
            asChild
        >
            <a 
            href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help%20with"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            Send a WhatsApp Message
            </a>
        </Button>
        </div>

      {/* City-based Info (visually enhanced, 3x2 grid, card style) */}
      <div className="max-w-4xl mx-auto bg-card/80 border border-primary/40 rounded-2xl shadow-[var(--shadow-elegant)] p-10 mt-10 mb-10 backdrop-blur-md">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-2">
          <MapPin className="inline-block h-8 w-8 text-primary" />
          24/7 Locksmith Services in {city}
        </h1>
        <p className="mb-6 text-lg md:text-xl text-muted-foreground text-center">
          Need a locksmith in <span className="font-semibold text-primary">{city}</span>? AutoKey Express offers <span className="font-semibold">fast, reliable, and professional</span> locksmith services for vehicles, homes, and businesses across {city}. Whether you’re locked out or need a key replacement, our mobile team is ready to help <span className="font-semibold text-primary">24/7</span>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
          {/* Card 1 */}
          <div className="group bg-card/60 backdrop-blur-sm border border-border rounded-lg p-3 flex items-start gap-2 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 min-h-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Clock className="h-7 w-7 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">24/7 Emergency</h3>
              <p className="text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-snug">Service for Lockouts</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group bg-card/60 backdrop-blur-sm border border-border rounded-lg p-3 flex items-start gap-2 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 min-h-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Award className="h-7 w-7 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">Licenced & Insured</h3>
              <p className="text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-snug">Certified & Trusted</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group bg-card/60 backdrop-blur-sm border border-border rounded-lg p-3 flex items-start gap-2 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 min-h-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <DollarSign className="h-7 w-7 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">Upfront Pricing</h3>
              <p className="text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-snug">No Hidden Fees</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="group bg-card/60 backdrop-blur-sm border border-border rounded-lg p-3 flex items-start gap-2 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 min-h-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <MapPin className="h-7 w-7 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">Mobile Service</h3>
              <p className="text-xs text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 leading-snug">Throughout {city}</p>
            </div>
          </div>
        </div>
        <p className="mb-0 text-center text-muted-foreground">
          <span className="font-semibold text-primary">Serving all neighborhoods in {city}.</span> Call us now for immediate assistance!
        </p>
      </div>
    </Hero>
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default AreaPage;
