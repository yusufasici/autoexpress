

import React from "react";
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
      {/* Feature Cards (same as Hero) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <svg className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">24/7 Emergency</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Available around the clock for urgent lockouts</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <svg className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><bolt /><path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z"/></svg>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Fast Response</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">&lt;60 min average arrival time</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <svg className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Licensed & Insured</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Certified professional locksmiths</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <svg className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Upfront Pricing</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">No hidden fees or surprises</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <svg className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Mobile Service</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">We come to you anywhere in Ontario</p>
          <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <svg className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"/></svg>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">5-Star Rated</h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Trusted by thousands of customers</p>
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
