import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './Logo';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Our Locations', href: '#' },
    { name: 'The Team', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Feedback', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#002f5c] text-white shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <BrandLogo light />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="primary" className="!py-2 !px-4 !text-sm !bg-[#8c4d9f]" withArrow>
              Register Now
            </Button>
            <Button variant="secondary" className="!py-2 !px-4 !text-sm !bg-white/90 text-[#002f5c]" withArrow>
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#002f5c] border-t border-white/10 p-4 pb-8">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-200 hover:text-white font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button variant="primary" className="w-full justify-center">Register Now</Button>
              <Button variant="secondary" className="w-full justify-center">Login</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;