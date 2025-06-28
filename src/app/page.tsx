"use client";

import React, { useRef, useState, useEffect } from 'react';
import Termfolio from "@/components/termfolio";
import Hero from "@/components/content/hero";
import Stickers from "@/components/content/stickers";

export default function Home() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [showStickers, setShowStickers] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickers(!entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -30% 0px",
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
    <main className="relative w-full">
      <Hero showStickers={showStickers} />
      <section
        ref={terminalRef}
        className="flex min-h-[90vh] w-full items-center justify-center p-4"
        style={{ perspective: '2000px' }}
      >
        <div className="h-full w-full flex justify-center">
          <Termfolio />
        </div>
      </section>
    </main>
  );
}
