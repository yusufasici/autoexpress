import { Key, Wrench, Lock, Home, Building2, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import lockoutImage from "@/assets/lockout-service.jpg";
import keyReplacementImage from "@/assets/key-replacement.jpg";
import residentialLockImage from "@/assets/residential-lock.jpg";
import commercialAccessImage from "@/assets/commercial-access.jpg";
import safeVaultImage from "@/assets/safe-vault.jpg";

const Services = () => {
  const services = [
    {
      icon: Lock,
      title: "Car Lockout Assistance",
      description: "Locked out of your car? Our expert locksmiths can safely unlock your vehicle without damage.",
      image: lockoutImage,
      features: [
        "All car makes and models",
        "No damage guarantee",
        "24/7 availability",
        "Insurance claim assistance"
      ]
    },
    {
      icon: Key,
      title: "Key Replacement & Programming",
      description: "Lost or damaged keys? We create and program new keys for all vehicle types on-site.",
      image: keyReplacementImage,
      features: [
        "Transponder key programming",
        "Smart key replacement",
        "Key fob programming",
        "Immediate service"
      ]
    },
    {
      icon: Wrench,
      title: "Ignition Repair & Replacement",
      description: "Ignition problems? We repair and replace faulty ignition systems to get you driving again.",
      image: null,
      features: [
        "Ignition cylinder replacement",
        "Key stuck in ignition",
        "Ignition switch repair",
        "Same-day service"
      ]
    },
    {
      icon: Home,
      title: "Residential Locksmith Services",
      description: "Complete home security solutions including lock installation, rekeying, and emergency lockouts.",
      image: residentialLockImage,
      features: [
        "Home lockout service",
        "Lock installation & repair",
        "Rekeying services",
        "Security upgrades"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Security Systems",
      description: "Professional commercial locksmith services for businesses, offices, and industrial facilities.",
      image: commercialAccessImage,
      features: [
        "Master key systems",
        "Access control installation",
        "High-security locks",
        "Office lockout service"
      ]
    },
    {
      icon: Shield,
      title: "Safe & Vault Services",
      description: "Expert safe opening, installation, and combination changes for residential and commercial safes.",
      image: safeVaultImage,
      features: [
        "Safe opening & repair",
        "Combination changes",
        "New safe installation",
        "Emergency access"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide comprehensive locksmith services for automotive, residential, and commercial needs - available 24/7.
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