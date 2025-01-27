import React, { useState, useEffect } from 'react';
import { Film, Menu, X, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8" />
              <span className="text-xl font-bold">Ferris Wheels Films</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#Glimpse" className="hover-slide-text font-medium">
                Glimpse
              </a>
              <a href="#Highlights" className="hover-slide-text font-medium">
                Highlights
              </a>
              <a href="#featured" className="hover-slide-text font-medium">
                Featured
              </a>
              <a href="#collections" className="hover-slide-text font-medium">
                Collections
              </a>
              <a href="#about" className="hover-slide-text font-medium">
                About
              </a>
              <a href="#contact" className="hover-slide-text font-medium">
                Contact
              </a>
              <a href="#Our Client" className="hover-slide-text font-medium">
                Our Client
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Search className="w-6 h-6 cursor-pointer hover:text-gray-600" />
              <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gray-600" />
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="p-4 space-y-6">
            <a href="#featured" className="block text-2xl font-bold">
              Featured
            </a>
            <a href="#collections" className="block text-2xl font-bold">
              Collections
            </a>
            <a href="#about" className="block text-2xl font-bold">
              About
            </a>
            <a href="#contact" className="block text-2xl font-bold">
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
