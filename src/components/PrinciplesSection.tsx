import { TextRevealByWord } from "@/components/ui/text-reveal";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollAnimation from "./ScrollAnimation";
import { TextEffect } from "@/components/ui/text-effect";
const PrinciplesSection = () => {
  const principles = [
    {
      id: "justice",
      title: "Justice",
      content:
        "Social, economic, and political justice is a fundamental principle of the Indian Constitution. It ensures equal opportunities and rights for every citizen.",
      icon: "⚖️",
    },
    {
      id: "liberty",
      title: "Liberty",
      content:
        "The Indian Constitution provides every citizen with liberty of expression, belief, faith, and worship. These liberties are the cornerstone of democracy.",
      icon: "🕊️",
    },
    {
      id: "equality",
      title: "Equality",
      content:
        "Equality before law and equality of opportunity are the main goals of the Indian Constitution. The Constitution prohibits discrimination based on caste, religion, gender, or place of birth.",
      icon: "🤝",
    },
    {
      id: "fraternity",
      title: "Fraternity",
      content:
        "The spirit of brotherhood is essential to ensure the unity and integrity of the nation. The Constitution promotes the dignity of the individual and the unity of the nation.",
      icon: "🫶",
    },
  ];

  const [activeTab, setActiveTab] = useState("justice");

  return (
    <section id="principles" className="section-padding bg-sandstone/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              <TextRevealByWord text="80% of civil cases occur because people don't know their rights. Don't be one of them - learn your Constitution today." />{" "}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              <TextEffect per="char" preset="fade">
                Core principles described in the Preamble of the IndianConstitution that form the foundation of our democratic
                republic.
              </TextEffect>
            </p>
          </ScrollAnimation>
        </div>

        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animationClass="animate-fade-in" delay={400}>
            <Tabs
              defaultValue="justice"
              value={activeTab}
              onValueChange={setActiveTab}
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 bg-white/50 backdrop-blur p-1 rounded-lg mb-8">
                {principles.map((principle) => (
                  <TabsTrigger
                    key={principle.id}
                    value={principle.id}
                    className="data-[state=active]:bg-terracotta data-[state=active]:text-white"
                  >
                    <span className="mr-2">{principle.icon}</span>
                    {principle.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {principles.map((principle) => (
                <TabsContent
                  key={principle.id}
                  value={principle.id}
                  className="bg-white/80 backdrop-blur rounded-lg p-8 shadow-lg transition-all duration-500"
                >
                  <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
                    <div className="shrink-0 flex items-center justify-center bg-terracotta/10 rounded-full w-24 h-24 text-6xl">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">
                        {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {principle.content}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </ScrollAnimation>
        </div>
      </div>
      <div>
        <div className="mt-24 mb-16 px-4 md:px-0">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-terracotta/10 to-terracotta/5 p-8 md:p-12 rounded-2xl border border-terracotta/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-terracotta/10 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-terracotta/5 blur-xl"></div>

            {/* Quote */}
            <blockquote className="relative z-10">
              <svg
                className="h-8 w-8 text-terracotta mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14 6.8a3.4 3.4 0 0 0-4.8 0 3.4 3.4 0 0 0 0 4.8L12 16l2.8-2.8a3.4 3.4 0 0 0 0-4.8z" />
                <path d="M10 17.2a3.4 3.4 0 0 0 4.8 0 3.4 3.4 0 0 0 0-4.8L12 12l-2.8 2.8a3.4 3.4 0 0 0 0 4.8z" />
              </svg>

              <p className="text-2xl md:text-3xl font-serif font-medium leading-tight text-gray-800 dark:text-white mb-6">
                "The Constitution is not an instrument for the government to
                restrain the people, it is an instrument for the people to
                restrain the government."
              </p>
              <footer className="text-lg text-terracotta font-medium">
                — Patrick Henry
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
