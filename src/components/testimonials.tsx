"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";


interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

const testimonials = [
  {
    author: {
      name: "Sreedevi Moham",
      handle: "LLB, Kerala High Court",
      avatar: "/sridevi.jpg", // Corrected path
    },
    text: "Cultivation of mind should be the ultimate aim of human existence.",
  },
  {
    author: {
      name: "Soumya Srivastava",
      handle: "Clinical Psychologist, IIT-BHU",
      avatar: "/soumya.jpg", // Add your actual image
    },
    text: "Everyday we see the need for citizens of our country to better understand the Constitution, and respect it. This website is definitely a step in the right direction to ensure the uplifting of the average person of our country.",
  },
  {
    author: {
      name: "USS Uppuluri",
      handle: "Entrepreneur, CMD of Edvenswa Enterprises Limited",
      avatar: "/uss.jpg", // Add your actual image
    },
    text: "The platform simplifies constitutional literacy with engaging tools. It's invaluable for understanding institutional functions, which is crucial for corporate governance and business leaders like me.",
  },
  {
    author: {
      name: "Ajith Prasad",
      handle: "Executive Manager, Private Firm",
      avatar: "/ajit.jpg", // Add your actual image
    },
    text: "Being a resident of Kerala, I know many of my elder relatives and friends who find English government websites very hard to navigate. Having the language feature is very inclusive and gives a regional touch to the website.",
  },
  {
    author: {
      name: "Rajesh Gupta",
      handle: "IIT(BHU) Alumnus, Co-Founder @ DricPro",
      avatar: "/rajesh.jpg", // Add your actual image
    },
    text: "Aspirational and foresightful entrepreneurs like myself are always looking for quick and effective ways to understand and appreciate the Indian Governance, as well as the Political and Governmental Structure. This makes reading up the Constitution vital. This website would cater to a powerful audience among us.",
  },
  {
    author: {
      name: "Dr. Anupama Boinepalli",
      handle: "Chief Doctor at Snigdha Ayurvedic Hospitals",
      avatar: "/anupama.jpg", // Add your actual image
    },
    text: "Understanding constitutional roles is crucial for healthcare policies. This platform makes it accessible and interactive for professionals navigating legal frameworks in healthcare.",
  },
  {
    author: {
      name: " Gayathri govind",
      handle: "student at Snigdha Ayurvedic Hospitals",
      avatar: "/gayathri.jpg", // Add your actual image
    },
    text: "Everyone should be accessed to such a great constituitional literacy platform!it's great.",
  },
];

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
  speed = 40,
  pauseOnHover = true,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-terracotta mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="relative">
          {/* Gradient overlays */}.
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-900" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-900" />

          {/* Marquee animation */}
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: ["0%", `-${50 + 100 / testimonials.length}%`],
            }}
            transition={{
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={`${i}-${testimonial.author.name}`}
                className="flex-shrink-0 w-80"
              >
                <TestimonialCard
                  author={{
                    ...testimonial.author,
                    avatar: testimonial.author.avatar || "/default-avatar.jpg", // Fallback if empty
                  }}
                  text={testimonial.text}
                  href={testimonial.href}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function TestimonialsPageSection() {
  return (
    <TestimonialsSection
      title="Trusted by Experts & Citizens"
      description="See what professionals and users say about our platform"
      testimonials={testimonials}
      speed={30}
      pauseOnHover={true}
    />
  );
}
