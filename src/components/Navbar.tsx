import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur shadow-md py-2' : 'bg-black/30 backdrop-blur-md py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="flex items-center gap-2">
          <BookOpen size={28} className="text-terracotta bg-transparent" />
          <span className="font-bold text-xl text-terracotta">Nagrik Aur Samvidhan</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="font-medium text-white hover:text-terracotta transition-colors">Home</a>
          <a href="#features" className="font-medium text-white hover:text-terracotta transition-colors">Features</a>
          <a href="#principles" className="font-medium text-white hover:text-terracotta transition-colors">Constitutional Principles</a>
          <a href="#explore" className="font-medium text-white hover:text-terracotta transition-colors">Explore</a>
          <Button className="bg-terracotta hover:bg-terracotta/90">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-terracotta" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-cream shadow-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#home" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#features" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#principles" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>Constitutional Principles</a>
          <a href="#explore" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>Explore</a>
          <Button className="bg-terracotta hover:bg-terracotta/90 w-full" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;