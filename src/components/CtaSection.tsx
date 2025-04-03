import React from "react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";
import { Spotlight } from "@/components/ui/spotlight";

const CtaSection = () => {
  return (
    <section className="relative bg-terracotta text-white py-24 px-4 overflow-hidden">
      {/* Spotlight with Grid Pattern */}
      <Spotlight
        className="absolute top-0 left-0 md:left-60 md:-top-20 from-orange-600 via-orange-400 to-orange-600"
        size={600}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="grid-pattern"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 8H8M8 8V0M8 8H16M8 8V16"
                stroke="currentColor"
                strokeOpacity="0.15"
                className="stroke-white"
              />
              <rect
                x="6"
                y="6"
                width="4"
                height="4"
                fill="currentColor"
                fillOpacity="0.1"
                className="fill-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Begin Your Constitutional Journey Today
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animationClass="animate-fade-in" delay={300}>
            <p className="text-xl mb-10 text-white/90">
              Learn about the Constitution through interactive courses, quizzes,
              and case studies. Enhance your knowledge and become a better
              citizen.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animationClass="animate-fade-in" delay={600}>
            <Button
              className="bg-white text-terracotta hover:bg-white/90 text-lg font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              size="lg"
            >
              Get Started Now
            </Button>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
