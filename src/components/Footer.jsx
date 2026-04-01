import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube, MousePointer2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Footer Top - CTA Section */}
      <div className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] py-20 px-4 lg:px-12 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed font-semibold">
            Join thousands of professionals who are already using DigiTools to work smarter. <br className="hidden sm:block" /> Start your free trial today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-white text-primary px-8 h-14 rounded-full font-bold text-lg hover:bg-white/90 transition-all shadow-xl shadow-black/10">
              Explore Products
            </button>
            <button className="border-2 border-white/40 text-white px-8 h-14 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              View Pricing
            </button>
          </div>
          
          <p className="text-sm text-white/70 font-medium tracking-wide">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      {/* Main Footer - Dark Section */}
      <div className="bg-[#0B1120] pt-24 pb-12 px-4 lg:px-12 text-white/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            
            {/* Logo & Info */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-extrabold text-white mb-8">DigiTools</h2>
              <p className="text-lg leading-relaxed max-w-sm">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12">
              {/* Product */}
              <div>
                <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Product</h4>
                <ul className="space-y-4 font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Templates</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Integrations</li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Company</h4>
                <ul className="space-y-4 font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">About</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Press</li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Resources</h4>
                <ul className="space-y-4 font-medium">
                  <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Community</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-sm">Social Links</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                  <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                  <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                  <Twitter className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8 text-sm font-semibold">
            <p>© 2026 DigiTools. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
