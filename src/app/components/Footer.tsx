import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-blue-300" />
              <span className="font-bold text-xl tracking-tight text-white leading-tight">
                Certifi<span className="text-blue-300">.in Advisers</span><br />
                <span className="text-sm font-normal text-blue-100">Private Limited</span>
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner for all BIS certification needs. We ensure compliance, quality, and speed for your business success in the Indian market.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Enquiry', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-blue-100 hover:text-white hover:pl-2 transition-all duration-300 block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-6">Services</h3>
            <ul className="space-y-4">
              {['ISI Mark Certification', 'FMCS Consulting', 'Lab Testing', 'Renewals'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-blue-100 hover:text-white transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-blue-300" />
                </div>
                <span className="text-sm text-blue-100">E-63, Naraina vihar , New delhi -110028</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-blue-300" />
                </div>
                <a href="tel:9910057011" className="text-sm text-blue-100 hover:text-white transition-colors">9910057011</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <a href="mailto:certifi.inadvisers@gmail.com" className="text-sm text-blue-100 hover:text-white transition-colors">certifi.inadvisers@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-800 text-center text-sm text-blue-200">
          &copy; {new Date().getFullYear()} Certifi.in Advisers Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
