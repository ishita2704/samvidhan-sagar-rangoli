// src/contexts/AgeContext.tsx
import React, { createContext, useContext, useState } from "react";

type AgeGroup = "children" | "youth" | "adults";

interface AgeContextType {
  ageGroup: AgeGroup;
  setAgeGroup: (group: AgeGroup) => void;
}

const AgeContext = createContext<AgeContextType | undefined>(undefined);

export const AgeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("children");
  return (
    <AgeContext.Provider value={{ ageGroup, setAgeGroup }}>
      {children}
    </AgeContext.Provider>
  );
};

export const useAgeContext = () => {
  const context = useContext(AgeContext);
  if (!context) {
    throw new Error("useAgeContext must be used within an AgeProvider");
  }
  return context;
};
