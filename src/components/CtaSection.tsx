
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';

const CtaSection = () => {
  return (
    <section className="bg-terracotta text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Begin Your Constitutional Journey Today
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationClass="animate-fade-in" delay={300}>
            <p className="text-xl mb-8 text-white/90">
              Learn about the Constitution through interactive courses, quizzes, and case studies. Enhance your knowledge and become a better citizen.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animationClass="animate-fade-in" delay={600}>
            <Button className="bg-white text-terracotta hover:bg-white/90 text-lg font-bold px-8 py-6">
              Get Started Now
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
