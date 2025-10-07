import { useState } from "react";
import { Menu, X, Phone, Instagram, Facebook, Twitter } from "lucide-react";
import { Home, Wrench, Info, Mail as MailIcon } from "lucide-react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Separate dropdown states for areas and services
  const [desktopAreasDropdownOpen, setDesktopAreasDropdownOpen] = useState(false);
  const [desktopServicesDropdownOpen, setDesktopServicesDropdownOpen] = useState(false);
  const [mobileAreasDropdownOpen, setMobileAreasDropdownOpen] = useState(false);
  const [mobileServicesDropdownOpen, setMobileServicesDropdownOpen] = useState(false);

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
            <a href="/" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-semibold">
              <Home className="h-5 w-5" /> Home
            </a>
            {/* Services Dropdown (Desktop) */}
            <div
              className="relative z-50"
              onMouseEnter={() => setDesktopServicesDropdownOpen(true)}
              onMouseLeave={() => setDesktopServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${desktopServicesDropdownOpen ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                aria-haspopup="true"
                aria-expanded={desktopServicesDropdownOpen}
                tabIndex={0}
                type="button"
              >
                <Wrench className="h-5 w-5" /> Services
              </button>
              <div className={`absolute left-0 mt-0 w-64 bg-background border border-border rounded shadow-lg transition-opacity z-50 ${desktopServicesDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <ul className="py-2">
                  <li className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase">Automotive</li>
                  <li><a href="/services/automotive#car-locked-out" className="block px-4 py-2 hover:bg-primary/10">Car Locked Out</a></li>
                  <li><a href="/services/automotive#car-all-key-lost" className="block px-4 py-2 hover:bg-primary/10">Car All Key Lost</a></li>
                  <li><a href="/services/automotive#car-key-copy" className="block px-4 py-2 hover:bg-primary/10">Car Key Copy</a></li>
                  <li><a href="/services/automotive#car-ignition-repair" className="block px-4 py-2 hover:bg-primary/10">Car Ignition Repair</a></li>
                  <li><a href="/services/automotive#car-key-replacement" className="block px-4 py-2 hover:bg-primary/10">Car Key Replacement</a></li>
                  <li><a href="/services/automotive#car-speare-key" className="block px-4 py-2 hover:bg-primary/10">Car Speare Key</a></li>
                  <li><a href="/services/automotive#motorcycle-locksmith" className="block px-4 py-2 hover:bg-primary/10">Motorcyle Locksmith</a></li>
                  <li className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase mt-2">Residential</li>
                  <li><a href="/services/residential#house-locked-out" className="block px-4 py-2 hover:bg-primary/10">House Locked Out</a></li>
                  <li><a href="/services/residential#lock-change" className="block px-4 py-2 hover:bg-primary/10">Lock Change</a></li>
                  <li><a href="/services/residential#lock-rekeying" className="block px-4 py-2 hover:bg-primary/10">Lock Rekeying</a></li>
                  <li><a href="/services/residential#lock-repair" className="block px-4 py-2 hover:bg-primary/10">Lock Repair</a></li>
                  <li><a href="/services/residential#lock-installation" className="block px-4 py-2 hover:bg-primary/10">Lock Installation</a></li>
                  <li><a href="/services/residential#mailbox-lock-change" className="block px-4 py-2 hover:bg-primary/10">Mailbox Lock Change</a></li>
                  <li><a href="/services/residential#spare-key" className="block px-4 py-2 hover:bg-primary/10">Spare Key</a></li>
                  <li className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase mt-2">Commercial</li>
                  <li><a href="/services/commercial#business-locked-out" className="block px-4 py-2 hover:bg-primary/10">Business Locked Out</a></li>
                  <li><a href="/services/commercial#master-key-system" className="block px-4 py-2 hover:bg-primary/10">Master Key System</a></li>
                  <li><a href="/services/commercial#lock-change" className="block px-4 py-2 hover:bg-primary/10">Lock Change</a></li>
                  <li><a href="/services/commercial#lock-rekeying" className="block px-4 py-2 hover:bg-primary/10">Lock Rekeying</a></li>
                  <li><a href="/services/commercial#lock-repair" className="block px-4 py-2 hover:bg-primary/10">Lock Repair</a></li>
                  <li><a href="/services/commercial#lock-installation" className="block px-4 py-2 hover:bg-primary/10">Lock Installation</a></li>
                  <li><a href="/services/commercial#storage-locked-out" className="block px-4 py-2 hover:bg-primary/10">Storage Locked Out</a></li>
                </ul>
              </div>
            </div>
            <a href="#about" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
              <Info className="h-5 w-5" /> About
            </a>
            <a href="#contact" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
              <MailIcon className="h-5 w-5" /> Contact
            </a>
            {/* Area Dropdown (Desktop) */}
            <div
              className="relative z-50"
              onMouseEnter={() => setDesktopAreasDropdownOpen(true)}
              onMouseLeave={() => setDesktopAreasDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${desktopAreasDropdownOpen ? 'text-primary' : 'text-foreground/80 hover:text-primary'}`}
                aria-haspopup="true"
                aria-expanded={desktopAreasDropdownOpen}
                tabIndex={0}
                type="button"
              >
                <MapPin className="h-5 w-5" /> Service Areas
              </button>
              <div className={`absolute left-0 mt-0 w-56 bg-background border border-border rounded shadow-lg transition-opacity z-50 ${desktopAreasDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <ul className="py-2">
                  <li><a href="/locksmith-toronto" className="block px-4 py-2 hover:bg-primary/10">Toronto</a></li>
                  <li><a href="/locksmith-aurora" className="block px-4 py-2 hover:bg-primary/10">Aurora</a></li>
                  <li><a href="/locksmith-bolton" className="block px-4 py-2 hover:bg-primary/10">Bolton</a></li>
                  <li><a href="/locksmith-concord" className="block px-4 py-2 hover:bg-primary/10">Concord</a></li>
                  <li><a href="/locksmith-etobicoke" className="block px-4 py-2 hover:bg-primary/10">Etobicoke</a></li>
                  <li><a href="/locksmith-maple" className="block px-4 py-2 hover:bg-primary/10">Maple</a></li>
                  <li><a href="/locksmith-markham" className="block px-4 py-2 hover:bg-primary/10">Markham</a></li>
                  <li><a href="/locksmith-mississauga" className="block px-4 py-2 hover:bg-primary/10">Mississauga</a></li>
                  <li><a href="/locksmith-northyork" className="block px-4 py-2 hover:bg-primary/10">North York</a></li>
                  <li><a href="/locksmith-oakville" className="block px-4 py-2 hover:bg-primary/10">Oakville</a></li>
                  <li><a href="/locksmith-richmondhill" className="block px-4 py-2 hover:bg-primary/10">Richmond Hill</a></li>
                  <li><a href="/locksmith-scarborough" className="block px-4 py-2 hover:bg-primary/10">Scarborough</a></li>
                  <li><a href="/locksmith-thornhill" className="block px-4 py-2 hover:bg-primary/10">Thornhill</a></li>
                  <li><a href="/locksmith-vaughan" className="block px-4 py-2 hover:bg-primary/10">Vaughan</a></li>
                  <li><a href="/locksmith-brampton" className="block px-4 py-2 hover:bg-primary/10">Brampton</a></li>
                </ul>
              </div>
            </div>
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
                href="https://www.facebook.com/profile.php?id=61581941300247" 
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
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold gap-2"
                asChild
              >
                <a
                  href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help%20with"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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
            <a href="/" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors py-2 font-semibold" onClick={() => setIsMenuOpen(false)}>
              <Home className="h-5 w-5" /> Home
            </a>
            {/* Services Dropdown (Mobile) */}
            <div className="relative">
              <button
                className="w-full flex items-center gap-2 text-left text-foreground/80 hover:text-primary transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-haspopup="true"
                aria-expanded={mobileServicesDropdownOpen}
                tabIndex={0}
                onClick={() => setMobileServicesDropdownOpen(v => !v)}
                type="button"
              >
                <Wrench className="h-5 w-5" /> Services
              </button>
              {mobileServicesDropdownOpen && (
                <div className="mt-2 w-full bg-background border border-border rounded shadow-lg z-50">
                  <ul className="py-2">
                    <li className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase">Automotive</li>
                    <li><a href="/services/automotive#car-locked-out" className="block px-4 py-2 hover:bg-primary/10">Car Locked Out</a></li>
                    <li><a href="/services/automotive#car-all-key-lost" className="block px-4 py-2 hover:bg-primary/10">Car All Key Lost</a></li>
                    <li><a href="/services/automotive#car-key-copy" className="block px-4 py-2 hover:bg-primary/10">Car Key Copy</a></li>
                    <li><a href="/services/automotive#car-ignition-repair" className="block px-4 py-2 hover:bg-primary/10">Car Ignition Repair</a></li>
                    <li><a href="/services/automotive#car-key-replacement" className="block px-4 py-2 hover:bg-primary/10">Car Key Replacement</a></li>
                    <li><a href="/services/automotive#car-speare-key" className="block px-4 py-2 hover:bg-primary/10">Car Speare Key</a></li>
                    <li><a href="/services/automotive#motorcycle-locksmith" className="block px-4 py-2 hover:bg-primary/10">Motorcyle Locksmith</a></li>
                    <li className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase mt-2">Residential</li>
                    <li><a href="/services/residential#house-locked-out" className="block px-4 py-2 hover:bg-primary/10">House Locked Out</a></li>
                    <li><a href="/services/residential#lock-cahange" className="block px-4 py-2 hover:bg-primary/10">Lock Cahange</a></li>
                    <li><a href="/services/residential#lock-rekeying" className="block px-4 py-2 hover:bg-primary/10">Lock Rekeying</a></li>
                    <li><a href="/services/residential#lock-repair" className="block px-4 py-2 hover:bg-primary/10">Lock Repair</a></li>
                    <li><a href="/services/residential#lock-installation" className="block px-4 py-2 hover:bg-primary/10">Lock Installation</a></li>
                    <li><a href="/services/residential#mailbox-lock-change" className="block px-4 py-2 hover:bg-primary/10">Mailbox Lock Change</a></li>
                    <li><a href="/services/residential#speare-key" className="block px-4 py-2 hover:bg-primary/10">Speare Key</a></li>
                    <li className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase mt-2">Commercial</li>
                    <li><a href="/services/commercial#businss-locked-out" className="block px-4 py-2 hover:bg-primary/10">Businss Locked Out</a></li>
                    <li><a href="/services/commercial#master-key-system" className="block px-4 py-2 hover:bg-primary/10">Master Key System</a></li>
                    <li><a href="/services/commercial#lock-cahange" className="block px-4 py-2 hover:bg-primary/10">Lock Cahange</a></li>
                    <li><a href="/services/commercial#lock-rekeying" className="block px-4 py-2 hover:bg-primary/10">Lock Rekeying</a></li>
                    <li><a href="/services/commercial#lock-repair" className="block px-4 py-2 hover:bg-primary/10">Lock Repair</a></li>
                    <li><a href="/services/commercial#lock-installation" className="block px-4 py-2 hover:bg-primary/10">Lock Installation</a></li>
                    <li><a href="/services/commercial#storage-locked-out" className="block px-4 py-2 hover:bg-primary/10">Storage Locked Out</a></li>
                  </ul>
                </div>
              )}
            </div>
            <a href="#about" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              <Info className="h-5 w-5" /> About
            </a>
            <a href="#contact" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              <MailIcon className="h-5 w-5" /> Contact
            </a>
            {/* Mobile Area Dropdown */}
            <div className="relative">
              <button
                className="w-full flex items-center gap-2 text-left text-foreground/80 hover:text-primary transition-colors font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-haspopup="true"
                aria-expanded={mobileAreasDropdownOpen}
                tabIndex={0}
                onClick={() => setMobileAreasDropdownOpen(v => !v)}
                type="button"
              >
                <MapPin className="h-5 w-5" /> Service Areas
              </button>
              {mobileAreasDropdownOpen && (
                <div className="mt-2 w-full bg-background border border-border rounded shadow-lg z-50">
                  <ul className="py-2">
                    <li><a href="/locksmith-toronto" className="block px-4 py-2 hover:bg-primary/10">Toronto</a></li>
                    <li><a href="/locksmith-aurora" className="block px-4 py-2 hover:bg-primary/10">Aurora</a></li>
                    <li><a href="/locksmith-bolton" className="block px-4 py-2 hover:bg-primary/10">Bolton</a></li>
                    <li><a href="/locksmith-concord" className="block px-4 py-2 hover:bg-primary/10">Concord</a></li>
                    <li><a href="/locksmith-etobicoke" className="block px-4 py-2 hover:bg-primary/10">Etobicoke</a></li>
                    <li><a href="/locksmith-maple" className="block px-4 py-2 hover:bg-primary/10">Maple</a></li>
                    <li><a href="/locksmith-markham" className="block px-4 py-2 hover:bg-primary/10">Markham</a></li>
                    <li><a href="/locksmith-mississauga" className="block px-4 py-2 hover:bg-primary/10">Mississauga</a></li>
                    <li><a href="/locksmith-northyork" className="block px-4 py-2 hover:bg-primary/10">North York</a></li>
                    <li><a href="/locksmith-oakville" className="block px-4 py-2 hover:bg-primary/10">Oakville</a></li>
                    <li><a href="/locksmith-richmondhill" className="block px-4 py-2 hover:bg-primary/10">Richmond Hill</a></li>
                    <li><a href="/locksmith-scarborough" className="block px-4 py-2 hover:bg-primary/10">Scarborough</a></li>
                    <li><a href="/locksmith-thornhill" className="block px-4 py-2 hover:bg-primary/10">Thornhill</a></li>
                    <li><a href="/locksmith-vaughan" className="block px-4 py-2 hover:bg-primary/10">Vaughan</a></li>
                    <li><a href="/locksmith-brampton" className="block px-4 py-2 hover:bg-primary/10">Brampton</a></li>
                  </ul>
                </div>
              )}
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com/expressautokey" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61581941300247" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-glow transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold gap-2" asChild>
                <a href="tel:+16479068124">
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>
              <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold gap-2" asChild>
                <a href="https://wa.me/16479068124?text=Hi%20AutoKey%20Express%2C%20I%20need%20help%20with" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
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