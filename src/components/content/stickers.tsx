import React, { useState, useEffect } from 'react';
import { Code, GitMerge, Database, Wind, Cog } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sticker = ({ icon, text, className, isFocused, index }: { icon: React.ReactNode, text: string, className?: string, isFocused: boolean, index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered animation effect for entry
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150 + 500); // 500ms base delay, 150ms stagger
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={cn(
      'absolute w-32 h-32 p-1 transition-all duration-500 ease-out transform-gpu group',
      className,
      // Entry animation, and exit when terminal is focused
      (isFocused || !isVisible) ? 'opacity-0 scale-90 -rotate-[30deg]' : 'opacity-100 scale-100',
    )}>
      {/* Background light glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-lg" />
      
      {/* Main sticker content with 3D hover effect */}
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 bg-secondary/40 backdrop-blur-lg border border-border/50 rounded-2xl shadow-lg text-center p-2 text-foreground transition-transform duration-300 group-hover:scale-110">
        {icon}
        <span className="text-xs font-semibold">{text}</span>
      </div>
    </div>
  );
};

const stickerData = [
    { icon: <Code className="w-8 h-8 text-accent" />, text: "Clean Code", className: "top-[10%] left-[5%] rotate-[-15deg]" },
    { icon: <GitMerge className="w-8 h-8 text-primary" />, text: "Version Control", className: "top-[15%] right-[8%] rotate-[20deg]" },
    { icon: <Database className="w-8 h-8 text-accent" />, text: "Databases", className: "bottom-[20%] left-[12%] rotate-[10deg]" },
    { icon: <Wind className="w-8 h-8 text-primary" />, text: "Tailwind CSS", className: "bottom-[15%] right-[15%] rotate-[-18deg]" },
    { icon: <Cog className="w-8 h-8 text-accent" />, text: "Genkit AI", className: "top-[50%] right-[2%] rotate-[5deg]" }
];


const Stickers = ({ isTerminalFocused }: { isTerminalFocused: boolean }) => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-30">
        {stickerData.map((sticker, index) => (
            <Sticker
                key={sticker.text}
                isFocused={isTerminalFocused}
                icon={sticker.icon}
                text={sticker.text}
                className={sticker.className}
                index={index}
            />
        ))}
    </div>
  );
};

export default Stickers;
