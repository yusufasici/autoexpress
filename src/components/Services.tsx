import { Key, Car, Home, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import carkeys from "@/assets/carkeys.jpg";
import residential from "@/assets/residential.jpg";
import commercialAccessImage from "@/assets/commercial-access.jpg";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Automotive Locksmithing",
      description: "On-site car key services and emergency help to get you back on the road fast.",
      image: carkeys,
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
      image: residential,
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
          <div className="inline-flex items-center gap-6 bg-primary/10 px-12 py-5 rounded-full mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-2xl md:text-3xl font-bold text-primary">Our Services</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6">
            <div id="automotive" className="group relative flex items-center gap-3 bg-card/50 px-6 py-3 rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Car className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Automotive</span>
            </div>
            <div className="text-3xl text-primary">•</div>
            <div id="residential" className="group relative flex items-center gap-3 bg-card/50 px-6 py-3 rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Home className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Residential</span>
            </div>
            <div className="text-3xl text-primary">•</div>
            <div id="commercial" className="group relative flex items-center gap-3 bg-card/50 px-6 py-3 rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Building2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Commercial</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            24/7 mobile locksmiths for cars, homes, and commercial properties.          
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Map index to service page path
            const serviceLinks = [
              "/services/automotive",
              "/services/residential",
              "/services/commercial"
            ];
            return (
              <a
                key={index}
                href={serviceLinks[index]}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                tabIndex={0}
                aria-label={service.title}
              >
                <Card className="group bg-card border-border overflow-hidden hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 transition-all duration-300 relative cursor-pointer">
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;