

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
      <a href={`tel:${phone.replace(/[^\u0000-9+]/g, "")}`} className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
        Call {phone}
      </a>
    </Hero>
    <Services />
    <About />
    <Contact />
    <Footer />
  </div>
);

export default AreaPage;
