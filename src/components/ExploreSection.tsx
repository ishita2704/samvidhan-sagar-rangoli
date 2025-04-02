
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
    setIsCorrect(answer === "42");
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  return (
    <section id="explore" className="section-padding relative">
      <div className="absolute inset-0 opacity-10 z-0">
        <img 
          src="/lovable-uploads/fef6d2c0-08f6-4935-8003-d3205e824b29.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">संविधान का अन्वेषण करें</h2>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              इंटरैक्टिव गतिविधियों के माध्यम से भारतीय संविधान के बारे में अपना ज्ञान बढ़ाएं।
            </p>
          </ScrollAnimation>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animationClass="animate-slide-in-left" delay={300}>
            <div className="bg-white/90 backdrop-blur rounded-lg p-6 md:p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">क्या आप जानते हैं?</h3>
              
              <div className="mb-8">
                <p className="text-lg mb-6">भारतीय संविधान में कितने अनुच्छेद हैं?</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["395", "350", "42", "470"].map((option) => (
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
                        ? "सही जवाब! भारतीय संविधान में वर्तमान में 395 अनुच्छेद हैं।" 
                        : "गलत जवाब। सही उत्तर 395 है।"}
                    </p>
                    <Button 
                      onClick={resetQuiz}
                      className="bg-royalblue hover:bg-royalblue/90"
                    >
                      पुनः प्रयास करें
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animationClass="animate-slide-in-right" delay={500}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">संवैधानिक तथ्य</h3>
              
              <Card className="constitution-card">
                <p className="text-lg font-medium mb-2">क्या आप जानते हैं?</p>
                <p className="text-gray-700">भारतीय संविधान दुनिया का सबसे लंबा लिखित संविधान है।</p>
              </Card>
              
              <Card className="constitution-card">
                <p className="text-lg font-medium mb-2">नवंबर 26</p>
                <p className="text-gray-700">26 नवंबर को हम 'संविधान दिवस' के रूप में मनाते हैं, क्योंकि इसी दिन 1949 में संविधान को अपनाया गया था।</p>
              </Card>
              
              <Card className="constitution-card">
                <p className="text-lg font-medium mb-2">डॉ. बी.आर. अम्बेडकर</p>
                <p className="text-gray-700">डॉ. बी.आर. अम्बेडकर को 'भारतीय संविधान का जनक' माना जाता है।</p>
              </Card>
              
              <div className="mt-8">
                <Button className="cta-button">और तथ्य जानें</Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
