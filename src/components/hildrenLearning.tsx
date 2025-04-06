import React from "react";
import { BookText, BookOpen, Award, Play } from "lucide-react";
import { useAgeContext } from "../components/context/AgeContext";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";

const ChildrenLearning = () => {
  const { setAgeGroup } = useAgeContext();

  const features = [
    {
      icon: <BookText className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Chotu's Constitution Comics",
      description:
        "Fun comic stories explaining fundamental rights through Chotu's adventures",
      link: "http://chotu-learns-rights.lovable.app/",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Interactive Storybooks",
      description:
        "Digital books with click-to-learn elements about our Constitution",
      link: "https://kid-constitution-tales.lovable.app/",
    },
    {
      icon: <Award className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Spin the wheel",
      description: "Spin the wheel and check your knowledge",
      link: "https://spin-the-wheel-yimm.vercel.app/",
    },
    {
      icon: <Play className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Educational Videos",
      description: "Animated videos explaining constitutional concepts",
      link: "/articles",
    },
  ];

  return (
    <div className="bg-[#f5f1e8] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animationClass="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#3a2c1a] font-serif">
              Constitution Learning for Children
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-[#5d4e3a] max-w-2xl mx-auto mb-8">
              Fun and interactive ways to learn about India's Constitution
              designed specially for young minds
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={400}>
            <Button
              className="bg-[#8b5a2b] hover:bg-[#6d4a2b] text-white"
              onClick={() => setAgeGroup("youth")}
            >
              Not a child? Switch to Youth Section
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-12 text-center text-[#3a2c1a] font-serif">
              How You'll Learn
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={index}
                animationClass="animate-fade-in"
                delay={200 + index * 100}
              >
                <div className="bg-[#f5f1e8] p-6 rounded-lg border border-[#d4c9b8] hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center text-[#3a2c1a]">
                    {feature.title}
                  </h3>
                  <p className="text-[#5d4e3a] text-center mb-5 flex-grow">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <a
                      href={feature.link}
                      className="inline-block px-4 py-2 text-sm font-medium text-[#8b5a2b] hover:underline"
                    >
                      Explore Now →
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Comic Preview Section */}
      <section className="py-20 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-12 text-center text-[#3a2c1a] font-serif">
              Featured Comic: Chotu and the Right to Education
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-[#d4c9b8]">
            <div className="aspect-w-16 aspect-h-9 bg-[#e8e0d5] rounded flex items-center justify-center">
              <img
                src="/chotu.jpg"
                alt="Chotu"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chotu Banner Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollAnimation animationClass="animate-fade-in">
              <div className="bg-[#f5f1e8] p-6 rounded-lg border border-[#d4c9b8]">
                <img
                  src="/photo_2025-04-06_05-21-17.jpg"
                  alt="Chotu Right to Education"
                  className="mx-auto max-w-full h-auto object-contain"
                />
                <p className="mt-4 text-[#5d4e3a]">
                  Join Chotu in learning about your fundamental rights!
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildrenLearning;
