
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TestimonialsComponent from '@/components/testimonials';
import FeaturesSection from '@/components/FeaturesSection';
import PrinciplesSection from '@/components/PrinciplesSection';
import ExploreSection from '@/components/ExploreSection';
import CtaSection from '@/components/CtaSection';
import MyFooter from '@/components/myfooter';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for animation elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    document.querySelectorAll('.animated-element').forEach(element => {
      observer.observe(element);
    });

    return () => {
      // Clean up the observer
      document.querySelectorAll('.animated-element').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />

        <PrinciplesSection />
        <TestimonialsComponent />
        <ExploreSection />
        <CtaSection />
      </main>
      <MyFooter />
    </div>
  );
};

export default Index;
