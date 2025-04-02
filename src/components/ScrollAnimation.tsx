
import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animationClass: string;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, animationClass, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`animated-element ${animationClass}`} style={{animationDelay: `${delay}ms`}}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
