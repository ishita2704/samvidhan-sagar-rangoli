
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="flex items-center gap-2">
          <BookOpen className="text-terracotta" size={28} />
          <span className="font-bold text-xl text-terracotta">नागरिक और संविधान</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="font-medium hover:text-terracotta transition-colors">मुख्य पृष्ठ</a>
          <a href="#features" className="font-medium hover:text-terracotta transition-colors">विशेषताएं</a>
          <a href="#principles" className="font-medium hover:text-terracotta transition-colors">संवैधानिक सिद्धांत</a>
          <a href="#explore" className="font-medium hover:text-terracotta transition-colors">खोजें</a>
          <Button className="bg-terracotta hover:bg-terracotta/90">प्रारंभ करें</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-terracotta"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-cream shadow-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#home" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>मुख्य पृष्ठ</a>
          <a href="#features" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>विशेषताएं</a>
          <a href="#principles" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>संवैधानिक सिद्धांत</a>
          <a href="#explore" className="font-medium hover:text-terracotta transition-colors" onClick={() => setMobileMenuOpen(false)}>खोजें</a>
          <Button className="bg-terracotta hover:bg-terracotta/90 w-full" onClick={() => setMobileMenuOpen(false)}>प्रारंभ करें</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
