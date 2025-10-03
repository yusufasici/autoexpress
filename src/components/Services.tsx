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
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 whitespace-nowrap">
            Automotive • Residential • Commercial
          </h2>
          <p className="text-lg text-muted-foreground">
            Full‑service locksmithing for vehicles, homes, and businesses — available 24/7.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-shadow">
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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