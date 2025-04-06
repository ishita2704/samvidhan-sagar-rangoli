import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";
import { BookText, GraduationCap, Scale } from "lucide-react"; // Using Lucide icons for professionalism

const HeroSection = () => {
  const [showAgeGroups, setShowAgeGroups] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Unchanged */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/6b0a039a-afe1-4d16-9b74-85c798a67246.png"
          alt="Indian Parliament"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Unchanged heading */}
        <ScrollAnimation animationClass="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-gradient">
            Nagrik Aur Samvidhan
          </h1>
        </ScrollAnimation>

        {/* Unchanged description */}
        <ScrollAnimation animationClass="animate-fade-in" delay={300}>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Learn the Constitution in a way that's right for your age group
          </p>
        </ScrollAnimation>

        {!showAgeGroups ? (
          <ScrollAnimation animationClass="animate-fade-in" delay={600}>
            {/* Unchanged button */}
            <Button
              className="cta-button text-lg bg-[#b86b12] hover:bg-[#d17d1a]"
              onClick={() => setShowAgeGroups(true)}
            >
              Select Your Age Group
            </Button>
          </ScrollAnimation>
        ) : (
          <ScrollAnimation animationClass="animate-fade-in" delay={100}>
            {/* Modified age group cards - smaller and with professional icons */}
            <div className="max-w-3xl mx-auto grid gap-4 md:grid-cols-3">
              <AgeGroupCard
                title="Children (0-13)"
                description="Illustrated Stories"
                icon={<BookText className="h-8 w-8" />}
                href="/learning/children"
              />
              <AgeGroupCard
                title="Youth (14-30)"
                description="Interactive Learning"
                icon={<GraduationCap className="h-8 w-8" />}
                href="/learning/youth"
              />
              <AgeGroupCard
                title="Adults (30+)"
                description="In-Depth Analysis"
                icon={<Scale className="h-8 w-8" />}
                href="/learning/adults"
              />
            </div>
          </ScrollAnimation>
        )}

        {/* Unchanged scroll indicator */}
        <ScrollAnimation animationClass="animate-fade-in" delay={900}>
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <a
                href="#features"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/30 backdrop-blur hover:bg-white/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

// Updated AgeGroupCard with professional icons and smaller size
const AgeGroupCard = ({ title, description, icon, href }) => (
  <a
    href={href}
    className="group p-4 rounded-lg bg-[#f5f1e8]/90 backdrop-blur-sm border border-[#8b7d65] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-[#3a2c1a]"
  >
    <div className="flex justify-center text-[#8b5a2b] mb-2">{icon}</div>
    <h3 className="font-bold text-lg mb-1 font-serif">{title}</h3>
    <p className="text-sm text-[#5d4e3a] mb-3">{description}</p>
    <div className="text-xs text-[#8b5a2b] font-medium flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      Explore
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1 h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </a>
);

export default HeroSection;
