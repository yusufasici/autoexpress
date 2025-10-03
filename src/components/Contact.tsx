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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="currentColor" className="text-green-600"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4.062 28.25a1 1 0 0 0 1.312 1.312l6.88-2.174A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-4.687-1.188 1 1 0 0 0-.75-.062l-5.062 1.6 1.6-5.062a1 1 0 0 0-.062-.75A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.5 6a1 1 0 0 0-.969 1.25c.188.75.594 2.188 1.406 3.406.812 1.219 2.031 2.594 4.031 3.594 2 .999 2.938.812 3.406.719a1 1 0 0 0 .75-.719c.094-.375.406-1.5.531-1.969a1 1 0 0 0-.25-.969l-1.25-1.25a1 1 0 0 0-1.406 0l-.406.406c-.25.25-.656.25-.906 0l-1.25-1.25a.642.642 0 0 1 0-.906l.406-.406a1 1 0 0 0 0-1.406l-1.25-1.25A1 1 0 0 0 11.5 11z"/></svg>
              </div>
              <div>
                <div className="font-bold text-foreground text-base mb-1">WhatsApp Message</div>
                <div className="text-sm text-muted-foreground mb-1">Chat with us instantly on WhatsApp</div>
                <a
                  href="https://wa.me/16479068124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold text-base"
                >
                  Send a WhatsApp Message
                </a>
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