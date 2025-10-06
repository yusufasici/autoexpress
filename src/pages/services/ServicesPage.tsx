import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Contact from "@/components/Contact";
import logomascot from "@/assets/logomascot2.png";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicesPageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ title, description, children }) => (
  <div className="min-h-screen bg-background">
    <Header />
    <Helmet>
      <title>{title} | Locksmith Services | AutoKey Express</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://autokeyexpress.ca/services/${title.toLowerCase().replace(/\s/g, "-")}`} />
      <meta property="og:title" content={`${title} | AutoKey Express`} />
      <meta property="og:description" content={description} />
    </Helmet>
    <section className="container mx-auto py-12 px-4">
      <div className="flex items-center justify-center">
        <img src={logomascot} className="h-56 w-auto opacity-50 object-contain" alt="AutoKey Express Mascot" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3 flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h1>
      <p className="mb-6 text-lg md:text-xl text-muted-foreground text-center max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
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
      {children}
    </section>
    <About />
    <Contact />
    <Footer />
  </div>
);

export default ServicesPage;
