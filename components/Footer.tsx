import React from 'react';
import { NHSLogo, BrandLogo } from './Logo';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002f5c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <BrandLogo light />
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              MyDigitalGP works in partnership with the NHS to provide secure, accessible NHS primary care online.
            </p>
            <Button variant="primary" className="!bg-[#8c4d9f] hover:!bg-[#7a3d8c]">
              Register Now
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meet the Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Locations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Complaints</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Contact Us</h4>
            <div className="space-y-6 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">0333 332 0445</p>
                <p>tpplc.mydigitalgp@nhs.net</p>
              </div>
              
              <div>
                <p className="font-semibold text-white mb-2">Opening Hours</p>
                <div className="flex justify-between max-w-[200px]">
                  <span>Monday - Friday</span>
                  <span>9am - 5pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* NHS Badge */}
          <div className="flex flex-col items-start lg:items-end">
             <NHSLogo className="text-4xl px-4 py-2" />
             <span className="text-white font-semibold text-lg mt-2">Providing NHS services</span>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>Copyright Notice: © 2025 MyDigitalGP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Patient Confidentiality</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;