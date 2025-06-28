"use client";

import React, { useRef, useState, useEffect } from 'react';
import Termfolio from "@/components/termfolio";
import Hero from "@/components/content/hero";
import Stickers from "@/components/content/stickers";

export default function Home() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTerminalVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px", // Animate when the bottom 30% of the screen is reached
        threshold: 0,
      }
    );

    const currentRef = terminalRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <main className="relative w-full bg-background">
        <Stickers />
        <Hero />
        <section
            ref={terminalRef}
            className="flex min-h-[90vh] w-full items-center justify-center p-4"
            style={{ perspective: '2000px' }}
        >
            <div
            className={`w-full max-w-5xl transition-all duration-1000 ease-out 
                ${isTerminalVisible
                    ? 'opacity-100 [transform:scale(1)_rotateX(5deg)_rotateY(-6deg)]'
                    : 'opacity-0 [transform:scale(0.8)_rotateX(15deg)_rotateY(-15deg)]'
                }`}
            >
                <div className="h-full w-full transition-transform duration-500 ease-out hover:[transform:rotateX(0deg)_rotateY(0deg)_scale(1.02)]">
                    <Termfolio />
                </div>
            </div>
        </section>
    </main>
  );
}
