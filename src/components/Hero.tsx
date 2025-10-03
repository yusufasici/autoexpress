import { Phone, Clock, Award, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-locksmith.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            AutoKey Express
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Fast, Reliable 24/7 Car Key & Locksmith Services. We Come To You!
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Clock className="h-4 w-4" />
              <span>24/7 Emergency Service</span>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;