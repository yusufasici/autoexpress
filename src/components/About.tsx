import { Award, Wrench, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Why Choose AutoKey Express?
            </h2>
            
            <p className="text-lg text-muted-foreground">
              With over 10 years of experience in automotive locksmith services, we're your trusted partner for all car key emergencies. Our certified technicians use the latest technology to provide fast, reliable, and affordable solutions.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Licensed & Certified & Insured
                  </h3>
                  <p className="text-muted-foreground">
                    All our technicians are fully licensed and certified locksmiths.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Modern Equipment
                  </h3>
                  <p className="text-muted-foreground">
                    We use the latest tools and technology for precise, damage-free service.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-muted-foreground">
                    Upfront quotes with no hidden fees or surprise charges.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Column: Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-card border-border text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-5xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-5xl font-bold text-primary">&lt;20</div>
                <div className="text-sm text-muted-foreground">Minute Response</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-5xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center p-6">
              <CardContent className="p-0 space-y-2">
                <div className="text-5xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Service Available</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;