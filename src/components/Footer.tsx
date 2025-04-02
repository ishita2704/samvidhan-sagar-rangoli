
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
              <span className="font-bold text-xl text-terracotta">नागरिक और संविधान</span>
            </div>
            <p className="text-gray-600">
              संविधान के बारे में जानने का मज़ेदार और इंटरैक्टिव तरीका।
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">उपयोगी लिंक</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">मुख्य पृष्ठ</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-terracotta transition-colors">विशेषताएं</a></li>
              <li><a href="#principles" className="text-gray-600 hover:text-terracotta transition-colors">संवैधानिक सिद्धांत</a></li>
              <li><a href="#explore" className="text-gray-600 hover:text-terracotta transition-colors">अन्वेषण</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">जानकारी</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">हमारे बारे में</a></li>
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">प्राइवेसी पॉलिसी</a></li>
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">संपर्क करें</a></li>
              <li><a href="#" className="text-gray-600 hover:text-terracotta transition-colors">अक्सर पूछे जाने वाले प्रश्न</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">संपर्क</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@nagrikaursamvidhan.org</li>
              <li className="text-gray-600">दिल्ली, भारत</li>
              <li className="text-gray-600">+91-123-456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} नागरिक और संविधान। सभी अधिकार सुरक्षित हैं।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
