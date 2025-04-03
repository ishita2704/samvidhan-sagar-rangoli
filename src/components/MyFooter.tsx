import React from "react";
import { BookOpen } from "lucide-react";
import { Footerdemo } from "@/components/ui/footer-section";

const MyFooter = () => {
  return (
    <footer className="bg-cream dark:bg-gray-900 pt-16 pb-8 px-4 border-t dark:border-gray-800">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          {/* <span className="font-bold text-xl text-terracotta dark:text-terracotta-light">
            Citizens and Constitution
          </span> */}
        </div>
        <Footerdemo />
      </div>
    </footer>
  );
};

export default MyFooter;
