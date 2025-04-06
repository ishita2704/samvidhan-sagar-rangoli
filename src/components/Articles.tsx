import React from "react";
import { fundamentalDuties, fundamentalRights } from "../data";

const Articles = () => {
  // Directive Principles data
  const principles = [
    {
      title:
        "State to secure a social order for the promotion of welfare of the people",
      description:
        "The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life.",
    },
    {
      title: "Certain principles of policy to be followed by the State",
      description:
        "The State shall, in particular, direct its policy towards securing: (a) that the citizens, men and women equally, have the right to an adequate means of livelihood; (b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good; (c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment; (d) that there is equal pay for equal work for both men and women; (e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength; (f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment.",
    },
    {
      title:
        "Right to work, to education and to public assistance in certain cases",
      description:
        "The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want.",
    },
  ];

  return (
    <main className="bg-[#f5f5dc] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#8b5a2b] text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Constitution of India
        </h1>
        <p className="text-xl font-light max-w-2xl mx-auto">
          Fundamental Rights, Duties, and Directive Principles
        </p>
      </section>

      {/* Tabs Navigation */}
      <nav className="bg-[#d2b48c] sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex overflow-x-auto">
          <a
            href="#rights"
            className="px-6 py-4 font-medium text-[#5c3a21] hover:bg-[#c4a484] whitespace-nowrap"
          >
            Fundamental Rights
          </a>
          <a
            href="#duties"
            className="px-6 py-4 font-medium text-[#5c3a21] hover:bg-[#c4a484] whitespace-nowrap"
          >
            Fundamental Duties
          </a>
          <a
            href="#principles"
            className="px-6 py-4 font-medium text-[#5c3a21] hover:bg-[#c4a484] whitespace-nowrap"
          >
            Directive Principles
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Fundamental Rights Section */}
        <section id="rights" className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-[#5c3a21] mb-8 pb-2 border-b-2 border-[#8b5a2b]">
            Fundamental Rights
          </h2>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl pt-[56.25%] rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/12wlTMNoFmu8N8Cz-qvlVlaG8diby2DK3/preview"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="autoplay"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {fundamentalRights.map((right) => (
              <div
                key={right.article_number}
                className="bg-[#fff8e1] border border-[#d2b48c] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-serif text-[#8b5a2b] mb-2">
                  {right.article_number}
                </h3>
                <h4 className="text-lg font-medium text-[#5c3a21] mb-3">
                  {right.title}
                </h4>
                <p className="text-[#5c3a21]">{right.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fundamental Duties Section */}
        <section id="duties" className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-[#5c3a21] mb-8 pb-2 border-b-2 border-[#8b5a2b]">
            Fundamental Duties
          </h2>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl pt-[56.25%] rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1XL6JSDO-QwUoVx78RlyUc14wArt626Xe/preview"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="autoplay"
              />
            </div>
          </div>

          <div className="space-y-6">
            {fundamentalDuties.map((duty) => (
              <div
                key={duty.id}
                className="bg-[#fff8e1] border border-[#d2b48c] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-[#5c3a21]">{duty.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Directive Principles Section */}
        <section id="principles">
          <h2 className="text-3xl font-serif font-bold text-[#5c3a21] mb-8 pb-2 border-b-2 border-[#8b5a2b]">
            Directive Principles of State Policy
          </h2>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-4xl pt-[56.25%] rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/127gcZ_-FEmlmjeXW0autEkHq0tA0epyl/preview"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="autoplay"
              />
            </div>
          </div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-[#fff8e1] border border-[#d2b48c] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-serif text-[#8b5a2b] mb-3">
                  {principle.title}
                </h3>
                <p className="text-[#5c3a21]">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Articles;
