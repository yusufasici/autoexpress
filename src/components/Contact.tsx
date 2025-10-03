import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Need immediate assistance? Call us now or request a free quote below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Emergency Hotline</h3>
                  <p className="text-muted-foreground mb-2">Available 24/7 for emergencies</p>
                  <a href="tel:+16479068124" className="text-primary hover:text-primary-glow font-semibold">
                    (647) 906-8124
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Service Area</h3>
                  <p className="text-muted-foreground">
                    Serving all over Ontario<br />
                    Mobile service - We come to you!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground">
                    24/7 Emergency Service<br />
                    Standard Hours: Mon-Sat 8AM-6PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-2">Get a response within 24 hours</p>
                  <a href="mailto:info@autokeyexpress.ca" className="text-primary hover:text-primary-glow">
                    info@autokeyexpress.ca
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Quote Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input 
                    id="name"
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
                    placeholder="Tell us about your situation..."
                    rows={4}
                    className="bg-input border-border text-foreground resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold"
                  size="lg"
                >
                  Get Free Quote
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