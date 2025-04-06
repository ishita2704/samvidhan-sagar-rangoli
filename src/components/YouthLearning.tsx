import React from "react";
import { Gavel, Landmark, Scale, BookMarked, Laugh } from "lucide-react";
import { useAgeContext } from "../components/context/AgeContext";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";
import { useNavigate } from "react-router-dom";

const YouthLearning = () => {
  const { setAgeGroup } = useAgeContext();
  const navigate = useNavigate();

  const features = [
    {
      icon: <Landmark className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Spin the wheel",
      description: "Spin the wheel and check your knowledge",
      link: "https://spin-the-wheel-yimm.vercel.app/",
    },
    {
      icon: <Scale className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Rights Debate Platform",
      description: "Practice arguing constitutional positions",
      link: "https://preview--india-law-arena.lovable.app/",
    },
    {
      icon: <BookMarked className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Constitutional Challenges",
      description: "Test your knowledge with timed quizzes",
      link: "https://mcq-game-drab.vercel.app/",
    },
    {
      icon: <Laugh className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Constitutional Memes Game",
      description:
        "Learn through viral meme formats - match, guess and create!",
      link: "http://meme-constitution-mania.lovable.app",
    },
  ];

  return (
    <div className="bg-[#f5f1e8] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animationClass="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#3a2c1a] font-serif">
              Constitutional Learning for Youth
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-[#5d4e3a] max-w-2xl mx-auto mb-8">
              Engaging, interactive tools to deeply understand India's
              Constitution
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={400}>
            <div className="flex gap-4 justify-center">
              <a href="learning/youth"></a>
              <Button
                className="bg-[#8b5a2b] hover:bg-[#6d4a2b] text-white"
                onClick={() => {
                  setAgeGroup("children");
                  navigate("/learning/children");
                }}
              >
                Switch to Children's Section
              </Button>
              <Button
                className="bg-[#8b5a2b] hover:bg-[#6d4a2b] text-white"
                onClick={() => {
                  setAgeGroup("adults");
                  navigate("/learning/adults");
                }}
              >
                Switch to Adults Section
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#3a2c1a] font-serif">
              Interactive Learning Tools
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={index}
                animationClass="animate-fade-in"
                delay={200 + index * 100}
              >
                <div className="bg-[#f5f1e8] p-6 rounded-lg border border-[#d4c9b8] hover:shadow-md transition-shadow h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#3a2c1a]">
                        {feature.title}
                      </h3>
                      <p className="text-[#5d4e3a] mb-4">
                        {feature.description}
                      </p>
                      <a
                        href={feature.link}
                        className="inline-flex items-center text-sm font-medium text-[#8b5a2b] hover:underline"
                      >
                        Explore Now
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#3a2c1a] font-serif">
              Featured Case Study: Right to Privacy
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-[#d4c9b8]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 bg-[#e8e0d5] rounded-lg p-4 flex items-center justify-center">
                <Landmark className="h-16 w-16 text-[#8b5a2b]" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-[#3a2c1a]">
                  Justice K.S. Puttaswamy vs Union of India
                </h3>
                <p className="text-[#5d4e3a] mb-4">
                  Explore how this landmark 2017 judgment established the right
                  to privacy as a fundamental right under Articles 14, 19 and 21
                  of the Constitution.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#8b5a2b] hover:bg-[#6d4a2b] text-white">
                    Analyze the Case
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#8b5a2b] text-[#8b5a2b] hover:bg-[#f5f1e8]"
                  >
                    View Related Cases
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YouthLearning;
