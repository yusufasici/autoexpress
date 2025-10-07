import { Phone, Clock, Award, DollarSign, Zap, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-locksmith.jpg";
import heroImage4 from "@/assets/hero-locksmith4.jpg";
import heroImage6 from "@/assets/hero-locksmith6.jpg";
import heroImage8 from "@/assets/hero-locksmith8.jpg";
// Note: Additional hero images can be added above as needed
import logomascot from "@/assets/logomascot2.png";

import React from "react";

interface HeroProps {
  children?: React.ReactNode;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({ children, image }) => {
  // If image is provided, use it as the only hero image. Otherwise, use carousel.
  const heroImages = image ? [image] : [heroImage1, heroImage8, heroImage6, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (image) return; // No carousel if a single image is provided
    const intervalMs = 5000;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalMs);
    return () => clearInterval(interval);
  }, [heroImages.length, image]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image or Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          {children ? (
            <>{children}</>
          ) : (
            <>
              {/* Logo Mascot*/}
              <div className="flex items-center justify-center">
                <img src={logomascot} className="h-56 w-auto opacity-50 object-contain" />
              </div>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
                Automotive • Residential • Commercial • Locksmith Services
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

              {/* Feature Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Clock className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">24/7 Emergency</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Available around the clock for urgent lockouts</p>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Zap className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Fast Response</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">&lt;60 min average arrival time</p>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Award className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Licensed & Insured</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Certified professional locksmiths</p>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <DollarSign className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Upfront Pricing</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">No hidden fees or surprises</p>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <MapPin className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Mobile Service</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">We come to you anywhere in Ontario</p>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <Star className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">5-Star Rated</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">Trusted by thousands of customers</p>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;