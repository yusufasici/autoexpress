import { useState } from "react";
import { Menu, X, Phone, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} className="h-24 w-auto object-cover" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com/expressautokey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold gap-2"
                asChild
              >
                <a href="tel:+16479068124">
                  <Phone className="h-4 w-4" />
                  Emergency Call
                </a>
              </Button>
              <Button
                className="bg-[#25D366] hover:bg-[#20bf5a] text-black font-semibold gap-2"
                asChild
              >
                <a
                  href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-4">
            <a 
              href="#services" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Social Media Icons - Mobile */}
            <div className="flex items-center justify-center gap-4 py-2">
              <a 
                href="https://instagram.com/expressautokey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold gap-2"
                asChild
              >
                <a href="tel:+16479068124">
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#20bf5a] text-black font-semibold gap-2"
                asChild
              >
                <a 
                  href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;