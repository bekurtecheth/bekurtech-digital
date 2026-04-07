import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <span className="text-xl font-bold dark:text-white">Bekur Tech</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs">
              Empowering individuals and businesses through technology tutorials, IT guidance, and professional services.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Youtube, color: 'hover:text-red-600', href: '#' },
                { icon: Instagram, color: 'hover:text-pink-600', href: '#' },
                { icon: Facebook, color: 'hover:text-blue-600', href: '#' },
                { icon: MessageCircle, color: 'hover:text-green-500', href: '#' }
              ].map((social, i) => (
                <a key={i} href={social.href} className={`text-slate-400 transition-colors ${social.color}`}>
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Blog', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 dark:text-white">Services</h3>
            <ul className="space-y-3">
              {['IT Support', 'Tech Tutorials', 'Excel Training', 'Web Development', 'Canva Design'].map(link => (
                <li key={link}>
                  <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 dark:text-white">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail size={18} className="text-blue-600" />
                <span>hello@bekurtech.com</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Phone size={18} className="text-blue-600" />
                <span>+251 900 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin size={18} className="text-blue-600" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} Bekur Tech. All rights reserved. Designed with passion for technology.
          </p>
        </div>
      </div>
    </footer>
  );
}