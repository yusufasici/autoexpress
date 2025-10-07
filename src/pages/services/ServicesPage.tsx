import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import logomascot from "@/assets/logomascot2.png";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


interface ServicesPageProps {
  title: string;
  description: string;
  heroImage?: string;
  services?: string[];
  children?: React.ReactNode;
}


const ServiceCardGrid: React.FC<{ services: string[]; page: string }> = ({ services, page }) => (
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
    {services.map((service) => (
      <a
        key={service}
        href={page}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
        tabIndex={0}
        aria-label={service}
      >
        <Card className="group bg-card border border-primary/20 hover:border-primary/60 hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center text-center font-semibold text-lg text-primary cursor-pointer">
          {service}
        </Card>
      </a>
    ))}
  </div>
);


const ServicesPage: React.FC<ServicesPageProps> = ({ title, description, heroImage, services = [], children }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <Helmet>
      <title>{title} | Locksmith Services | AutoKey Express</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://autokeyexpress.ca/services/${title.toLowerCase().replace(/\s/g, "-")}`} />
      <meta property="og:title" content={`${title} | AutoKey Express`} />
      <meta property="og:description" content={description} />
    </Helmet>
    <Hero image={heroImage}>
      <div className="flex items-center justify-center">
        <img src={logomascot} className="h-56 w-auto opacity-50 object-contain" alt="AutoKey Express Mascot" />
      </div>
      
      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
        Automotive • Residential • Commercial • Locksmith Services<br />
      </p>

        {/* CTA Buttons - now inside card container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-[var(--shadow-glow)]" asChild>
            <a href="tel:+16479068124">
            <Phone className="h-6 w-6" />
            Call Now: (647) 906-8124
            </a>
        </Button>
        <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-[var(--shadow-glow)]" asChild>
            <a href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help%20with" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Send a WhatsApp Message
            </a>
        </Button>
        </div>
      {/* Main Card Container (like city pages) */}
      {services && services.length > 0 && (
        <div className="max-w-4xl mx-auto bg-card/80 border border-primary/40 rounded-2xl shadow-[var(--shadow-elegant)] p-8 mt-8 mb-10 backdrop-blur-md">
          {/* 24/7 Service Text Block - styled like city pages */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 text-center tracking-tight">24/7 Locksmith Service in the GTA</h2>
            <p className="mb-6 text-lg md:text-xl text-foreground text-center">
              Need a locksmith <span className="text-primary font-semibold">near you</span>? We offer <span className="font-bold">fast</span>, <span className="font-bold">reliable</span>, and <span className="font-bold">professional</span> locksmith services for vehicles, homes, and businesses across the <span className="text-primary font-semibold">GTA</span>. Whether you’re locked out or need a key replacement, our mobile team is ready to help <span className="text-primary font-bold">24/7</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <div className="flex items-center gap-2 bg-background/60 border border-primary/30 rounded-lg px-4 py-2 min-w-[180px]">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span className="font-semibold">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-primary/30 rounded-lg px-4 py-2 min-w-[180px]">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01"/><circle cx="12" cy="12" r="10"/></svg>
                <span className="font-semibold">Fast Response</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-primary/30 rounded-lg px-4 py-2 min-w-[180px]">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-primary/30 rounded-lg px-4 py-2 min-w-[180px]">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                <span className="font-semibold">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-primary/30 rounded-lg px-4 py-2 min-w-[180px]">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6"/><circle cx="11" cy="11" r="8"/></svg>
                <span className="font-semibold">Mobile Service</span>
              </div>
              <div className="flex items-center gap-2 bg-background/60 border border-primary/30 rounded-lg px-4 py-2 min-w-[180px]">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.75l-6.172-6.172a4 4 0 015.656-5.656 4 4 0 015.656 5.656L12 17.75z"/></svg>
                <span className="font-semibold">Highly Rated</span>
              </div>
            </div>
            <p className="text-base md:text-lg text-primary text-center font-semibold mt-2">Serving all neighborhoods in the GTA. Call us now for immediate assistance!</p>
          </div>
          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-3 mb-8">
            {services.map((service) => (
              <div
                key={service}
                className="group bg-card/60 backdrop-blur-sm border border-border rounded-lg py-4 px-3 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 min-h-0 cursor-pointer"
                tabIndex={0}
                aria-label={service}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight truncate whitespace-nowrap text-base text-center w-full">{service}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {children}
    </Hero>
    <About />
    <Contact />
    <Footer />
  </div>
);

export default ServicesPage;
