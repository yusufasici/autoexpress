import { Phone, Clock, Award, DollarSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-locksmith.jpg";
import heroImage2 from "@/assets/hero-locksmith2.jpg";
import heroImage3 from "@/assets/hero-locksmith3.jpg";
import heroImage4 from "@/assets/hero-locksmith4.jpg";
import heroImage5 from "@/assets/hero-locksmith5.jpg";
import heroImage6 from "@/assets/hero-locksmith6.jpg";
import logomascot from "@/assets/logomascot2.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    heroImage1,
    heroImage3,
    heroImage6,
    heroImage4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          
          {/* Logo Mascot*/}
          <div className="flex items-center justify-center">
            <img src={logomascot} className="h-88 w-88 opacity-50 object-contain" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Automotive • Residential • Commercial • Locksmith Services
            Fast • Reliable • Licenced • Insured • Certified
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glwo text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-[var(--shadow-glow)]"
              asChild
            >
              <a href="tel:+16479068124">
                <Phone className="h-6 w-6" />
                Call Now: (647) 906-8124
              </a>
            </Button>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glwo text-primary-foreground font-bold text-lg px-8 py-6 gap-3 shadow-[var(--shadow-glow)]"
              asChild
            >
              <a 
                href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help%20with"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
                Send a WhatsApp Message
              </a>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
              <Clock className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Fast Response</h3>
              <p className="text-sm text-muted-foreground">&lt;30 min average arrival time</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
              <Award className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">Certified locksmiths</p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
              <DollarSign className="h-8 w-8 text-primary mx-auto" />
              <h3 className="font-semibold text-foreground">Upfront Pricing</h3>
              <p className="text-sm text-muted-foreground">No hidden fees or surprises</p>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 pt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;