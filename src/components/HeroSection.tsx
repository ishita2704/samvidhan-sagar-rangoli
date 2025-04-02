
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/6b0a039a-afe1-4d16-9b74-85c798a67246.png" alt="Indian Parliament" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollAnimation animationClass="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Nagrik Aur Samvidhan
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animationClass="animate-fade-in" delay={300}>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Trouble understanding the constitution? We've got a fun and easy way to learn!
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation animationClass="animate-fade-in" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg">Start Learning</Button>
            <Button variant="outline" className="bg-white/20 backdrop-blur border-white/40 text-white hover:bg-white/30 text-lg">
              Explore Resources
            </Button>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationClass="animate-fade-in" delay={900}>
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <a href="#features" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur hover:bg-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
