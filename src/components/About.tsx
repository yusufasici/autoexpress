import { Award, Wrench, DollarSign, Clock, Zap, Star, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-6 bg-primary/10 px-12 py-5 rounded-full mb-6 justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-2xl md:text-3xl font-bold text-primary">About Us</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why AutoKey Express?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide fast, professional locksmith services across automotive, residential and commercial sectors. Our technicians are licensed, fully insured, and equipped with modern tools to deliver damage-free results anytime you need us.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center">Licensed & Certified</h3>
            <p className="text-sm text-muted-foreground text-center">Trained technicians with certifications and full insurance for peace of mind.</p>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Wrench className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center">Modern Tools</h3>
            <p className="text-sm text-muted-foreground text-center">We use the latest equipment for damage-free key extraction, programming and installations.</p>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <DollarSign className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-foreground text-center">Transparent Pricing</h3>
            <p className="text-sm text-muted-foreground text-center">Upfront pricing with honest estimates and no surprise fees.</p>
          </div>
        </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary">Experienced & Trusted</div>
            <div className="text-sm text-muted-foreground">Professional Locksmith</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary">&lt;60</div>
            <div className="text-sm text-muted-foreground">Min Response</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary">Mobile Service</div>
            <div className="text-sm text-muted-foreground">We come to you anywhere</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Star className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <ShieldCheck className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary">Licensed, Insured & Certified</div>
            <div className="text-sm text-muted-foreground">Your security is our priority</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Service Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;