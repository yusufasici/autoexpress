import { Phone, Mail, MapPin, Clock, EthernetPort } from "lucide-react";
import logo from "@/assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between h-24">
          {/* Company Info */}
          <div className="space-y-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} className="h-32 w-auto object-cover" />
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted 24/7 automotive locksmith service. Fast, reliable, and professional.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Car Lockout
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Key Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ignition Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Key Programming
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+16479068124" className="hover:text-primary transition-colors">
                  (647) 906-8124
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@autokeyexpress.ca" className="hover:text-primary transition-colors">
                  info@autokeyexpress.ca
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Ontario, Canada</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span>24/7 Emergency Service</span>
              </li>
              <li className="mt-4">
                <div className="font-medium text-foreground">Standard Hours:</div>
                <div>Monday - Saturday</div>
                <div>8:00 AM - 6:00 PM</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AutoKey Express. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;