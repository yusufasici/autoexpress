

import React from "react";
import { Clock, Zap, Award, DollarSign, MapPin, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

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
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Locksmith {city} – 24/7 Local Locksmith Services
      </h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Need a locksmith in {city}? AutoKey Express offers fast, reliable, and professional locksmith services for vehicles, homes, and businesses across {city}. Whether you’re locked out, need a key replacement, or want to upgrade your security, our mobile team is ready to help 24/7.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Car, home, and business lockouts</li>
        <li>Key replacement & duplication</li>
        <li>Lock rekeying & installation</li>
        <li>Ignition repair</li>
        <li>Emergency locksmith service</li>
      </ul>
      <p className="mb-4">
        Serving all neighborhoods in {city}. Call us now for immediate assistance!
      </p>
      <a href={`tel:${phone.replace(/[^\u0000-9+]/g, "")}`} className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition mb-8">
        Call {phone}
      </a>
      {/* City-Specific Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <Clock className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{city} 24/7 Emergency</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Locked out in {city}? We respond any time, day or night.</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <Zap className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Fast Arrival in {city}</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Average arrival time under 60 minutes anywhere in {city}.</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <Award className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Licensed & Insured</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Certified locksmiths serving {city} with full insurance.</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <DollarSign className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Upfront Pricing</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">No hidden fees for {city} residents or businesses.</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <MapPin className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Mobile Service in {city}</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">We come to you anywhere in {city} and nearby areas.</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <Star className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">5-Star Rated in {city}</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Trusted by hundreds of customers in {city} and beyond.</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </Hero>
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default AreaPage;
