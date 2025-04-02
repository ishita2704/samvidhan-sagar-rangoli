
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollAnimation from './ScrollAnimation';

const PrinciplesSection = () => {
  const principles = [
    {
      id: "justice",
      title: "Justice",
      content: "Social, economic, and political justice is a fundamental principle of the Indian Constitution. It ensures equal opportunities and rights for every citizen.",
      icon: "⚖️"
    },
    {
      id: "liberty",
      title: "Liberty",
      content: "The Indian Constitution provides every citizen with liberty of expression, belief, faith, and worship. These liberties are the cornerstone of democracy.",
      icon: "🕊️"
    },
    {
      id: "equality",
      title: "Equality",
      content: "Equality before law and equality of opportunity are the main goals of the Indian Constitution. The Constitution prohibits discrimination based on caste, religion, gender, or place of birth.",
      icon: "🤝"
    },
    {
      id: "fraternity",
      title: "Fraternity",
      content: "The spirit of brotherhood is essential to ensure the unity and integrity of the nation. The Constitution promotes the dignity of the individual and the unity of the nation.",
      icon: "🫶"
    }
  ];
  
  const [activeTab, setActiveTab] = useState("justice");

  return (
    <section id="principles" className="section-padding bg-sandstone/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Constitutional Principles</h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Core principles described in the Preamble of the Indian Constitution that form the foundation of our democratic republic.
            </p>
          </ScrollAnimation>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animationClass="animate-fade-in" delay={400}>
            <Tabs defaultValue="justice" value={activeTab} onValueChange={setActiveTab}>
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
                      <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{principle.content}</p>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
