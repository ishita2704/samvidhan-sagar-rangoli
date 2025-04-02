
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Search, Check, Info } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-terracotta" />,
      title: "Interactive Courses",
      description: "Learn the fundamental principles of the constitution through interactive and easy-to-follow courses."
    },
    {
      icon: <Search className="h-10 w-10 text-terracotta" />,
      title: "Constitution Explorer",
      description: "Easily search and understand any article or chapter of the Indian Constitution."
    },
    {
      icon: <Check className="h-10 w-10 text-terracotta" />,
      title: "Knowledge Testing",
      description: "Test your constitutional knowledge through engaging quizzes and questionnaires."
    },
    {
      icon: <Info className="h-10 w-10 text-terracotta" />,
      title: "Case Studies",
      description: "Understand the practical aspects of the Constitution through important constitutional case studies."
    }
  ];

  return (
    <section id="features" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experience our interactive and engaging tools for learning about the Constitution.
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
