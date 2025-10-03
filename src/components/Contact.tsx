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
          <div className="flex flex-col gap-6">
            <div className="bg-card/80 border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground text-base mb-1">Emergency Hotline</div>
                <div className="text-sm text-muted-foreground mb-1">Available 24/7 for emergencies</div>
                <a href="tel:+16479068124" className="text-primary font-semibold text-base">(647) 906-8124</a>
              </div>
            </div>
            <div className="bg-card/80 border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                <MapPin className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground text-base mb-1">Service Area</div>
                <div className="text-sm text-muted-foreground">Serving all over Ontario<br />Mobile service - We come to you!</div>
              </div>
            </div>
            <div className="bg-card/80 border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                <Clock className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground text-base mb-1">Business Hours</div>
                <div className="text-sm text-muted-foreground">24/7 Emergency Service<br />Standard Hours: Mon-Sat 8AM-6PM</div>
              </div>
            </div>
            <div className="bg-card/80 border border-border rounded-xl p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mt-1">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground text-base mb-1">Email Us</div>
                <div className="text-sm text-muted-foreground mb-1">Get a response within 24 hours</div>
                <a href="mailto:info@autokeyexpress.ca" className="text-primary font-semibold text-base">info@autokeyexpress.ca</a>
              </div>
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