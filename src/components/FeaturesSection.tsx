
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Search, Check, Info } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-terracotta" />,
      title: "इंटरैक्टिव पाठ्यक्रम",
      description: "संविधान के मूलभूत सिद्धांतों को इंटरैक्टिव और आसान पाठ्यक्रम के माध्यम से सीखें।"
    },
    {
      icon: <Search className="h-10 w-10 text-terracotta" />,
      title: "संविधान खोज",
      description: "भारतीय संविधान के किसी भी अनुच्छेद या अध्याय को आसानी से खोजें और समझें।"
    },
    {
      icon: <Check className="h-10 w-10 text-terracotta" />,
      title: "ज्ञान परीक्षण",
      description: "रोचक क्विज और प्रश्नोत्तरी के माध्यम से अपने संवैधानिक ज्ञान का परीक्षण करें।"
    },
    {
      icon: <Info className="h-10 w-10 text-terracotta" />,
      title: "केस स्टडी",
      description: "महत्वपूर्ण संवैधानिक मामलों के अध्ययन से संविधान के व्यावहारिक पहलुओं को समझें।"
    }
  ];

  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">हमारी विशेषताएं</h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              संविधान के बारे में सीखने के लिए हमारे इंटरैक्टिव और मनोरंजक टूल्स का अनुभव लें।
            </p>
          </ScrollAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollAnimation 
              key={index} 
              animationClass="animate-fade-in" 
              delay={300 + index * 150}
            >
              <Card className="constitution-card h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
