import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Contact', href: '#contact' }
  ];

  const destinations = [
    'Oyow Safari',
    'Mt Longonot Expedition',
    'Beaches and Relaxation',
    'Lake Nakuru Adventure',
    'Culture and Heritage',
    'Mountain and  Trekking'
  ];

  return (
    <footer className="bg-forest-green text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="gradient-text">Oyow</span> Adventures
            </h3>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Creating extraordinary luxury travel experiences that inspire, 
              connect, and transform lives through authentic adventures.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream/80 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Destinations</h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a 
                    href="#" 
                    className="text-cream/80 hover:text-gold transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-cream/80">
                  <p>Ronald Ngala street</p>
                  <p>Nairobi City, Kenya</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-cream/80 hover:text-gold transition-colors">
                  +254 712 245 123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:hello@wanderlustadventures.com" className="text-cream/80 hover:text-gold transition-colors">
                  hello@Oyowadventures@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © Oyow Adventures. All rights reserved 2025.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;