"use client";

import { FaGamepad, FaBrain, FaChess, FaTrophy } from "react-icons/fa";
import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";
import { Typewriter } from "@/components/ui/typewriter-text";
import { cn } from "@/lib/utils";
import ScrollAnimation from "./ScrollAnimation";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const GamesSection = () => {
  const games = [
    {
      title: "Spin the Wheel",
      description:
        "Test your luck with this exciting wheel-spinning game. See what prize you can win!",
      icon: <FaGamepad className="h-8 w-8 text-orange-500" />,
      link: "https://spin-the-wheel-yimm.vercel.app/",
      color:
        "bg-orange-100 border-orange-300 hover:border-orange-500 text-orange-800",
    },
    {
      title: "Guess the Word",
      description:
        "Challenge your vocabulary skills in this fun word guessing game. Can you guess them all?",
      icon: <FaBrain className="h-8 w-8 text-blue-500" />,
      link: "https://guess-the-word-lime.vercel.app/",
      color: "bg-blue-100 border-blue-300 hover:border-blue-500 text-blue-800",
    },
    {
      title: "MCQ Challenge",
      description:
        "Test your knowledge with multiple choice questions. How high can you score?",
      icon: <FaChess className="h-8 w-8 text-green-500" />,
      link: "https://mcq-game-drab.vercel.app/",
      color:
        "bg-green-100 border-green-300 hover:border-green-500 text-green-800",
    },
  ];

  return (
    <section id="games" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimation animationClass="animate-fade-in">
            <h2 className="font-display text-center text-4xl font-bold tracking-tight text-orange-900 md:text-5xl">
              <TextShimmerWave className="font-mono text-sm" duration={1}>
                Interactive Learning Games
              </TextShimmerWave>
            </h2>
            <div className="mt-4">
              <Typewriter
                text={[
                  "Learn through play",
                  "Test your knowledge",
                  "Earn badges and rewards",
                  "Challenge your friends",
                ]}
                speed={80}
                loop={true}
                className="text-xl text-gray-600"
              />
            </div>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div
                  className={cn(
                    "h-full border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
                    game.color
                  )}
                >
                  <GlowingEffect
                    spread={20}
                    glow={true}
                    disabled={false}
                    proximity={40}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                        {game.icon}
                      </div>
                      <h3 className="text-xl font-bold">{game.title}</h3>
                    </div>

                    <p className="mb-6 text-gray-700">{game.description}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-medium group-hover:underline">
                        Play Now →
                      </span>
                      <div className="flex items-center">
                        <FaTrophy className="text-yellow-500 mr-1" />
                        <span className="text-sm">Leaderboard</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg">
            View All Games
          </button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
