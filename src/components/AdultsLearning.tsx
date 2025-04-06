import React from "react";
import { Scale, Library, FileText, Bookmark } from "lucide-react";
import { useAgeContext } from "./context/AgeContext";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";
import { useNavigate } from "react-router-dom";

const AdultsLearning = () => {
  const { setAgeGroup } = useAgeContext();
 const navigate = useNavigate();
  const features = [
    // {
    //   icon: <Scale className="h-10 w-10 text-[#8b5a2b]" />,
    //   title: "Landmark Case Analysis",
    //   description: "In-depth examination of pivotal constitutional judgments",
    //   link: "/cases"
    // },
    // {
    //   icon: <Library className="h-10 w-10 text-[#8b5a2b]" />,
    //   title: "Amendment Tracker",
    //   description: "Detailed history of constitutional amendments",
    //   link: "/amendments"
    // },
    {
      icon: <FileText className="h-10 w-10 text-[#8b5a2b]" />,
      title: "Case Studies",
      description: "How constitutional principles apply to modern issues",
      link: "/current-affairs",
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#8b5a2b]" />,
      title: " Constitutional Case Explorer",
      description: "Scholarly articles and expert commentaries",
      link: "https://constitutional-scrolls-explorer.lovable.app",
    },
  ];

  return (
    <div className="bg-[#f5f1e8] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation animationClass="animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#3a2c1a] font-serif">
              Constitutional Learning for Adults
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={200}>
            <p className="text-lg text-[#5d4e3a] max-w-2xl mx-auto mb-8">
              Advanced resources for deeper understanding of India's
              Constitution
            </p>
          </ScrollAnimation>
          <ScrollAnimation animationClass="animate-fade-in" delay={400}>
            <Button
              className="bg-[#8b5a2b] hover:bg-[#6d4a2b] text-white"
              onClick={() => {
                setAgeGroup("youth");
                navigate("/learning/youth"); // Navigates to home
              }}
            >
              Switch to Youth Section
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#3a2c1a] font-serif">
              Learning Resources
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* Featured Analysis Section */}
      <section className="py-16 bg-[#f5f1e8]">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#3a2c1a] font-serif">
              Featured Analysis: Federalism in Modern India
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-[#d4c9b8]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 bg-[#e8e0d5] rounded-lg p-4 flex items-center justify-center">
                <FileText className="h-16 w-16 text-[#8b5a2b]" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-4 text-[#3a2c1a]">
                  Center-State Relations Post GST
                </h3>
                <p className="text-[#5d4e3a] mb-4">
                  This comprehensive analysis examines how the introduction of
                  GST has impacted the constitutional balance of power between
                  the Center and States, with particular focus on Articles 246A,
                  269A, and 279A.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#8b5a2b] hover:bg-[#6d4a2b] text-white">
                    Read Full Analysis
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#8b5a2b] text-[#8b5a2b] hover:bg-[#f5f1e8]"
                  >
                    View Related Cases
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#8b5a2b] text-[#8b5a2b] hover:bg-[#f5f1e8]"
                  >
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Commentary Section */}
      <section className="py-12 bg-white/50">
        <div className="container mx-auto px-4">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 text-center text-[#3a2c1a] font-serif">
              Expert Commentary
            </h2>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#f5f1e8] p-6 rounded-lg border border-[#d4c9b8]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e8e0d5] flex items-center justify-center">
                  <Scale className="h-8 w-8 text-[#8b5a2b]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#3a2c1a]">
                    "The Evolving Nature of Fundamental Rights"
                  </h3>
                  <p className="text-[#5d4e3a] mb-4 italic">
                    "Recent judgments have demonstrated the Constitution's
                    remarkable adaptability to modern challenges while
                    maintaining its core principles. The expansion of Article
                    21's interpretation exemplifies this dynamic
                    constitutionalism."
                  </p>
                  <p className="text-sm text-[#8b5a2b] font-medium">
                    - Dr. Legal Scholar, Constitutional Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdultsLearning;