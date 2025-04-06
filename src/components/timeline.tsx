import * as React from "react";

const Timeline = () => {
  const events = [
    {
      year: "1946",
      title: "Cabinet Mission Plan",
      description:
        "Proposed the framework for the Constitution and constituent assembly.",
    },
    {
      year: "1947",
      title: "Indian Independence Act",
      description:
        "Established the Dominion of India and provided for the Constituent Assembly.",
    },
    {
      year: "1949",
      title: "Constitution Adopted",
      description:
        "The Constituent Assembly adopted the Constitution on November 26.",
    },
    {
      year: "1950",
      title: "Constitution Came into Effect",
      description:
        "India became a republic on January 26, marking the full implementation.",
    },
    {
      year: "1951",
      title: "First Amendment",
      description:
        "Added restrictions on freedom of speech and introduced special provisions for backward classes.",
    },
  ];

  return (
    <div className="py-12 bg-[#f5f1e8] dark:bg-[#2c2218] text-[#3a3327] dark:text-[#e8e0d5]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center font-serif">
          Constitutional Timeline
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Key milestones in the development of India's Constitution
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-[#8b7d65] dark:bg-[#5d4e3a] transform -translate-x-1/2"></div>

          {/* Timeline events */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
              >
                {/* Year marker */}
                <div className="w-1/2 px-4 py-2">
                  <div
                    className={`text-right ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <span className="inline-block px-4 py-2 bg-[#8b7d65] dark:bg-[#5d4e3a] text-[#f5f1e8] rounded-lg font-bold">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Event card */}
                <div className="w-1/2 px-4">
                  <div className="relative p-6 bg-[#e8e0d5] dark:bg-[#3a3327] rounded-lg shadow-md border border-[#d4c9b8] dark:border-[#4d4435]">
                    <div
                      className={`absolute top-6 w-4 h-4 transform rotate-45 ${
                        index % 2 === 0
                          ? "-right-2 bg-[#e8e0d5] dark:bg-[#3a3327] border-r border-t border-[#d4c9b8] dark:border-[#4d4435]"
                          : "-left-2 bg-[#e8e0d5] dark:bg-[#3a3327] border-l border-t border-[#d4c9b8] dark:border-[#4d4435]"
                      }`}
                    ></div>
                    <h3 className="text-xl font-bold mb-2 font-serif">
                      {event.title}
                    </h3>
                    <p className="text-[#5d5346] dark:text-[#c8beb1]">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
