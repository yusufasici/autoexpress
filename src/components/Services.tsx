import { Key, Lock, Home, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import lockoutImage from "@/assets/lockout-service.jpg";
import residentialLockImage from "@/assets/residential-lock.jpg";
import commercialAccessImage from "@/assets/commercial-access.jpg";

const Services = () => {
  const services = [
    {
      icon: Lock,
      title: "Automotive Locksmithing",
      description: "On-site car key services and emergency help to get you back on the road fast.",
      image: lockoutImage,
      features: [
        "Car lockout service (damage-free)",
        "Key replacement & key fob programming",
        "Ignition repair & key extraction",
        "Smart keys • Transponders • Remotes"
      ]
    },
    {
      icon: Home,
      title: "Residential Locksmithing",
      description: "Complete home lock & security solutions for peace of mind.",
      image: residentialLockImage,
      features: [
        "House lockouts • Rekeying",
        "Lock installation & repair",
        "Smart locks & keypad deadbolts",
        "Door hardware upgrades"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Locksmithing",
      description: "Professional security and access systems for offices, stores, and facilities.",
      image: commercialAccessImage,
      features: [
        "Master key systems",
        "High-security & restricted keys",
        "Panic bars • Door closers • Hardware",
        "Access control & keypad systems"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Professional Locksmith Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6">
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border">
              <Lock className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Automotive</span>
            </div>
            <div className="text-2xl text-primary">•</div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border">
              <Home className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Residential</span>
            </div>
            <div className="text-2xl text-primary">•</div>
            <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Commercial</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full‑service locksmithing for vehicles, homes, and businesses — available 24/7.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group bg-card border-border overflow-hidden hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 transition-all duration-300 relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {service.image && (
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </div>
                )}
                
                <CardContent className="p-6 space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2 group-hover:text-foreground/80 transition-colors duration-300">
                        <span className="text-primary mt-1 group-hover:scale-110 transition-transform duration-300">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;