"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import {
  BookOpen,
  Search,
  Check,
  Info,
  Box,
  Lock,
  Settings,
  Sparkles,
} from "lucide-react";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";


import {
  FaRobot,
  FaUsers,
  FaQuestionCircle,
  FaCertificate,
  FaHistory,
  FaGamepad,
  FaExclamationTriangle,
} from "react-icons/fa";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import ScrollAnimation from "./ScrollAnimation";
import { cn } from "@/lib/utils";
import { Typewriter } from "@/components/ui/typewriter-text";


const FeaturesSection = () => {
  const features = [
    {
      icon: <FaRobot className="h-10 w-10 text-terracotta" />,
      title: "AI Sewak",
      description:
        "AI-powered chatbot that provides easy-to-understand answers to queries related to the Constitution of India.",
    },
    {
      icon: <FaUsers className="h-10 w-10 text-terracotta" />,
      title: "Collaborative Learning",
      description:
        "Form teams to debate constitutional issues, fostering interactive discussions and deeper understanding.",
    },
    {
      icon: <FaQuestionCircle className="h-10 w-10 text-terracotta" />,
      title: "Daily Quiz - POTD",
      description:
        "Test your knowledge with a daily 'Problem of the Day' quiz on constitutional topics.",
    },
    // {
    //   icon: <FaCertificate className="h-10 w-10 text-terracotta" />,
    //   title: "Blockchain Certification",
    //   description:
    //     "Earn blockchain-verified certificates upon completing constitutional modules.",
    // },
    {
      icon: <FaCertificate className="h-10 w-10 text-terracotta" />,
      title: "interactive Learning Games",
      description:
        "Engage with fun and educational games designed to simplify constitutional concepts and make learning an enjoyable experience.",
    },
  ];

  const glowingFeatures = [
    {
      icon: <FaHistory className="h-4 w-4" />,
      title: "Constitution Time Machine",
      description:
        "Explore how constitutional articles have evolved over time with our interactive timeline.",
    },
    {
      icon: <FaExclamationTriangle className="h-4 w-4" />,
      title: "SOS Emergency Feature",
      description:
        "Quick-access emergency feature providing crucial legal information in urgent situations.",
    },
    {
      icon: <FaGamepad className="h-10 w-10 text-terracotta" />,
      title: "Interactive Learning Games",
      description:
        "Engage with fun and educational games designed to simplify constitutional concepts and make learning an enjoyable experience.",
    },
    {
      icon: <Search className="h-4 w-4" />,
      title: "Constitution Explorer",
      description:
        "Easily search and understand any article or chapter of the Indian Constitution.",
    },
    {
      icon: <Check className="h-4 w-4" />,
      title: "Knowledge Testing",
      description:
        "Test your constitutional knowledge through engaging quizzes.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <GradualSpacing
              className="font-display text-center text-4xl font-bold -tracking-widest text-orange-900 dark:text-white md:text-7xl md:leading-[5rem]"
              text="Our Features"
            />
            
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience our interactive and engaging tools for learning about
              the Constitution
            </p>
          </ScrollAnimation>
        </div>

        {/* Enhanced Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 px-4 md:px-0">
          {features?.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <a
                href={`#${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block h-full focus:outline-none"
              >
                <Card className="constitution-card h-full group relative overflow-hidden border border-gray-200 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-white">
                  {/* Gradient Border Effect - Reduced blur */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-transparent to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

                  <CardHeader className="relative z-10 p-4">
                    <div className="flex justify-between items-start">
                      {/* Icon Container */}
                      <div className="p-3 rounded-lg bg-orange-50 text-orange-500">
                        {feature.icon}
                      </div>

                      {/* Arrow Indicator */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>

                    {/* Title */}
                    <CardTitle className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>

                  {/* Description */}
                  <CardContent className="relative z-10 px-4 pb-4">
                    <p className="text-gray-600 text-sm leading-snug">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>

        {/* Glowing effect feature grid */}
        <div className="mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h3 className="text-3xl md:text-5xl font-bold mb-9 text-center text-orange-900">
              <Typewriter
                text={[
                  "Smart law tools",
                  "Learn differently",
                  "Legal tech",
                  "New learning ways",
                  "Advanced law tech",
                ]}
                speed={100}
                loop={true}
                className="text-5xl font-medium"
              />
            </h3>
          </ScrollAnimation>
          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            {glowingFeatures.map((feature, index) => {
              let area = "";
              if (index === 0)
                area = "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]";
              else if (index === 1)
                area = "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]";
              else if (index === 2)
                area = "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]";
              else if (index === 3)
                area = "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]";
              else if (index === 4)
                area = "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]";

              return (
                <li key={index} className={cn("min-h-[14rem] list-none", area)}>
                  <a href={""} className="block h-full group">
                    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 hover:shadow-xl transition-shadow duration-300">
                      <GlowingEffect
                        spread={40}
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                      />
                      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                          <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                            {feature.icon}
                          </div>
                          <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                              {feature.title}
                            </h3>
                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                              {feature.description}
                            </h2>
                          </div>
                        </div>
                        <div className="flex items-center justify-end">
                          <span className="text-orange-900 font-medium group-hover:underline">
                            Explore Now
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-2 h-5 w-5 text-orange-600 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
