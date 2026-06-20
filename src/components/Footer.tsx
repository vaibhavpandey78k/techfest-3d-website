import { Zap, Mail, MapPin, Phone, Instagram, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'AI Innovation', href: '#ai-innovation' },
    { name: 'Robotics', href: '#robotics' },
    { name: 'Future Tech', href: '#future-tech' },
    { name: 'Experience', href: '#experience' },
  ];

  const events = [
    { name: 'Competitions', href: '#' },
    { name: 'Exhibitions', href: '#' },
    { name: 'Workshops', href: '#' },
    { name: 'Lectures', href: '#' },
    { name: 'Concerts', href: '#' },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="relative bg-[#080810] border-t border-cyan-500/10">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-8 h-8 text-cyan-400" />
              <span className="font-cyber text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TECHFEST
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Asia's Largest Science and Technology Festival.
              Inspiring innovation and shaping the future since 1998.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-[#12121a] border border-cyan-500/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cyber text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-cyber text-lg font-bold text-white mb-6">Events</h3>
            <ul className="space-y-3">
              {events.map((event, index) => (
                <li key={index}>
                  <a
                    href={event.href}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {event.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cyber text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span>IIT Bombay, Powai, Mumbai, Maharashtra 400076</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+912225767800" className="hover:text-cyan-400 transition-colors">
                  +91 22 2576 7800
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href="mailto:contact@techfest.org" className="hover:text-cyan-400 transition-colors">
                  contact@techfest.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-cyan-500/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              2026 Techfest, IIT Bombay. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-cyan-400 transition-colors">
                Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-32 bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;
