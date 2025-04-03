import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

 const ExploreSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === "395");
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

return (
    <section id="explore" className="section-padding relative">
      <div className="absolute inset-0 opacity-10 z-0">
        <img 
          src="/lovable-uploads/6b0a039a-afe1-4d16-9b74-85c798a67246.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore the Constitution</h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enhance your knowledge about the Indian Constitution through interactive activities.
            </p>
          </ScrollAnimation>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animationClass="animate-slide-in-left" delay={300}>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Did You Know?</h3>
              
              <div className="mb-8">
                <p className="text-lg mb-6">How many articles are there in the Indian Constitution?</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["395", "350", "420", "470"].map((option) => (
                    <Button
                      key={option}
                      variant="outline"
                      className={`p-4 h-auto text-lg ${
                        selectedAnswer === option 
                          ? isCorrect 
                            ? "bg-green-100 border-green-500 text-green-700" 
                            : "bg-red-100 border-red-500 text-red-700"
                          : "hover:bg-terracotta/10"
                      }`}
                      onClick={() => handleAnswerClick(option)}
                      disabled={selectedAnswer !== null}
                    >
                      {option}
                      {selectedAnswer === option && isCorrect && (
                        <Check className="ml-2 h-5 w-5 text-green-600" />
                      )}
                    </Button>
                  ))}
                </div>
                
                {selectedAnswer !== null && (
                  <div className="mt-6">
                    <p className={`mb-4 ${isCorrect ? "text-green-600" : "text-red-600"} font-medium`}>
                      {isCorrect 
                        ? "Correct answer! The Indian Constitution currently has 395 articles." 
                        : "Incorrect answer. The correct answer is 395."}
                    </p>
                    <Button 
                      onClick={resetQuiz}
                      className="bg-royalblue hover:bg-royalblue/90"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animationClass="animate-slide-in-right" delay={500}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Constitutional Facts</h3>
              
              <Card className="constitution-card">
                <p className="text-lg font-medium mb-2">Did You Know?</p>
                <p className="text-gray-700">The Indian Constitution is the longest written constitution in the world.</p>
              </Card>
              
              <Card className="constitution-card">
                <p className="text-lg font-medium mb-2">November 26</p>
                <p className="text-gray-700">We celebrate 'Constitution Day' on November 26, as the Constitution was adopted on this day in 1949.</p>
              </Card>
              
              <Card className="constitution-card">
                <p className="text-lg font-medium mb-2">Dr. B.R. Ambedkar</p>
                <p className="text-gray-700">Dr. B.R. Ambedkar is known as the 'Father of the Indian Constitution'.</p>
              </Card>
              
              <div className="mt-8">
                <Button className="cta-button">Learn More Facts</Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
