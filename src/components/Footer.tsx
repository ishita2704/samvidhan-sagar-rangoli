
import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-terracotta" size={28} />
              <span className="font-bold text-xl text-terracotta">Citizens and Constitution</span>
            </div>
            <p className="text-gray-600">
              A fun and interactive way to learn about the Constitution.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-terracotta transition-colors">Features</a></li>
              <li><a href="#principles" className="text-gray-600 hover:text-terracotta transition-colors">Constitutional Principles</a></li>
              <li><a href="#explore" className="text-gray-600 hover:text-terracotta transition-colors">Explore</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@citizensandconstitution.org</li>
              <li className="text-gray-600">Delhi, India</li>
              <li className="text-gray-600">+91-123-456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Citizens and Constitution. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
