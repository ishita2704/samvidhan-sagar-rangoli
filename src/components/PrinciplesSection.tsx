
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollAnimation from './ScrollAnimation';

const PrinciplesSection = () => {
  const principles = [
    {
      id: "justice",
      title: "न्याय",
      content: "सामाजिक, आर्थिक और राजनीतिक न्याय भारतीय संविधान का एक मूलभूत सिद्धांत है। यह हर नागरिक को समान अवसर और अधिकार सुनिश्चित करता है।",
      icon: "⚖️"
    },
    {
      id: "liberty",
      title: "स्वतंत्रता",
      content: "भारतीय संविधान हर नागरिक को अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता प्रदान करता है। ये स्वतंत्रताएं लोकतंत्र की आधारशिला हैं।",
      icon: "🕊️"
    },
    {
      id: "equality",
      title: "समानता",
      content: "कानून के समक्ष समानता और अवसर की समानता भारतीय संविधान के मुख्य लक्ष्य हैं। संविधान जाति, धर्म, लिंग या जन्म स्थान के आधार पर भेदभाव को प्रतिबंधित करता है।",
      icon: "🤝"
    },
    {
      id: "fraternity",
      title: "बंधुत्व",
      content: "राष्ट्र की एकता और अखंडता सुनिश्चित करने के लिए बंधुत्व की भावना आवश्यक है। संविधान व्यक्ति की गरिमा और राष्ट्र की एकता को बढ़ावा देता है।",
      icon: "🫶"
    }
  ];
  
  const [activeTab, setActiveTab] = useState("justice");

  return (
    <section id="principles" className="section-padding bg-sandstone/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">संवैधानिक सिद्धांत</h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              भारतीय संविधान की प्रस्तावना में वर्णित मूल सिद्धांत जो हमारे लोकतांत्रिक गणराज्य की नींव हैं।
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
