import React from "react";
import { Phone, Mail, MapPin, Clock, EthernetPort } from "lucide-react";
import logo from "@/assets/logo2.png";

const Footer = () => {
  // Add top padding to main content to prevent footer/header overlap
  React.useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.style.paddingTop = '6rem'; // header height (h-24 = 6rem)
    }
  }, []);
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-2">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} className="h-24 w-auto object-cover" />
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
                <a href="#automotive" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Automotive Locsmiting
                </a>
              </li>
              <li>
                <a href="#residential" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Residential Locksmithing
                </a>
              </li>
              <li>
                <a href="#commercial" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Commercial Locksmithing
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="currentColor" className="text-primary mt-0.5 flex-shrink-0"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4.062 28.25a1 1 0 0 0 1.312 1.312l6.88-2.174A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-4.687-1.188 1 1 0 0 0-.75-.062l-5.062 1.6 1.6-5.062a1 1 0 0 0-.062-.75A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm-4.5 6a1 1 0 0 0-.969 1.25c.188.75.594 2.188 1.406 3.406.812 1.219 2.031 2.594 4.031 3.594 2 .999 2.938.812 3.406.719a1 1 0 0 0 .75-.719c.094-.375.406-1.5.531-1.969a1 1 0 0 0-.25-.969l-1.25-1.25a1 1 0 0 0-1.406 0l-.406.406c-.25.25-.656.25-.906 0l-1.25-1.25a.642.642 0 0 1 0-.906l.406-.406a1 1 0 0 0 0-1.406l-1.25-1.25A1 1 0 0 0 11.5 11z"/></svg>
                <a href="https://wa.me/16479068124" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp Message
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
                <div className="font-medium text-foreground">Standard Hours </div>
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