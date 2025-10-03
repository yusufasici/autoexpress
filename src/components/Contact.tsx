import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget as HTMLFormElement & {
      name: { value: string };
      phone: { value: string };
      email: { value: string };
      service: { value: string };
      message: { value: string };
    };

    try {
      const response = await fetch("https://formspree.io/f/xdkwzyov", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.value,
          phone: form.phone.value,
          email: form.email.value,
          service: form.service.value,
          message: form.message.value,
        }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-6 bg-primary/10 px-12 py-5 rounded-full mb-6 justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="text-2xl md:text-3xl font-bold text-primary">Get In Touch</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-lg text-muted-foreground">
            Need immediate assistance? Call/Text us now or request a free quote below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-base font-semibold text-foreground">Emergency Hotline</div>
              <div className="text-xs text-muted-foreground">Available 24/7 for emergencies</div>
              <a href="tel:+16479068124" className="text-primary hover:text-primary-glow font-semibold text-sm block mt-1">(647) 906-8124</a>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-base font-semibold text-foreground">Service Area</div>
              <div className="text-xs text-muted-foreground">Serving all over Ontario<br />Mobile service - We come to you!</div>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <Clock className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-base font-semibold text-foreground">Business Hours</div>
              <div className="text-xs text-muted-foreground">24/7 Emergency Service<br />Standard Hours: Mon-Sat 8AM-6PM</div>
            </div>
            <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 space-y-1 relative overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] hover:border-primary/50 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-1">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-base font-semibold text-foreground">Email Us</div>
              <div className="text-xs text-muted-foreground">Get a response within 24 hours</div>
              <a href="mailto:info@autokeyexpress.ca" className="text-primary hover:text-primary-glow font-semibold text-sm block mt-1">info@autokeyexpress.ca</a>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="John Doe" 
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(647) 906-8124" 
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Needed *
                  </label>
                  <select 
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="lockout">Car Lockout</option>
                    <option value="lockout">House Lockout</option>
                    <option value="key-replacement">Key Replacement</option>
                    <option value="ignition">Ignition Repair</option>
                    <option value="lockout">Car All Key Lost</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Tell us about your situation..."
                    rows={4}
                    className="bg-input border-border text-foreground resize-none"
                  />
                </div>

                {status === 'success' && (
                  <p className="text-sm text-emerald-400">Thanks! Your message has been sent.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                )}

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold"
                  size="lg"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Get Free Quote'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;