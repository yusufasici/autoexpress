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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Clock className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">24/7</div>
            <div className="text-xs text-muted-foreground">Service Available</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Zap className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">&lt;60</div>
            <div className="text-xs text-muted-foreground">Min Response</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <MapPin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-base md:text-lg font-bold text-primary">Mobile Service</div>
            <div className="text-xs text-muted-foreground">We come to you anywhere</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Star className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-lg md:text-xl font-bold text-primary">500+</div>
            <div className="text-xs text-muted-foreground">Happy Customers</div>
          </div>

          <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
              <Award className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-base md:text-lg font-bold text-primary">Experienced & Trusted</div>
            <div className="text-xs text-muted-foreground">Professional Locksmith</div>
          </div>
        </div>
        {/* Service Areas Card */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-card border border-primary/30 rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center flex items-center justify-center gap-2">
              <MapPin className="h-7 w-7 text-primary" />
              Our Service Areas
            </h3>
            <div className="grid grid-cols-3 grid-rows-5 gap-4">
              <a href="/locksmith-toronto" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Toronto</a>
              <a href="/locksmith-aurora" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Aurora</a>
              <a href="/locksmith-bolton" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Bolton</a>
              <a href="/locksmith-brampton" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Brampton</a>
              <a href="/locksmith-concord" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Concord</a>
              <a href="/locksmith-etobicoke" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Etobicoke</a>
              <a href="/locksmith-maple" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Maple</a>
              <a href="/locksmith-markham" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Markham</a>
              <a href="/locksmith-mississauga" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Mississauga</a>
              <a href="/locksmith-northyork" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith North York</a>
              <a href="/locksmith-oakville" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Oakville</a>
              <a href="/locksmith-richmondhill" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Richmond Hill</a>
              <a href="/locksmith-scarborough" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Scarborough</a>
              <a href="/locksmith-thornhill" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Thornhill</a>
              <a href="/locksmith-vaughan" className="block bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-center font-semibold text-primary hover:bg-primary/20 transition-all shadow hover:scale-105">Locksmith Vaughan</a>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4">Click your city to view local locksmith services.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;