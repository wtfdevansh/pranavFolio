import React from 'react';
import { Code, GitMerge, Database, Wind, Cog } from 'lucide-react';

const Sticker = ({ icon, text, className }: { icon: React.ReactNode, text: string, className?: string }) => {
  return (
    <div className={`absolute w-32 h-32 flex flex-col items-center justify-center gap-2 bg-secondary/80 backdrop-blur-sm border border-border rounded-2xl shadow-lg text-center p-2 text-foreground ${className}`}>
      {icon}
      <span className="text-xs font-semibold">{text}</span>
    </div>
  );
};

const Stickers = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-30">
      <Sticker
        icon={<Code className="w-8 h-8 text-accent" />}
        text="Clean Code"
        className="top-[10%] left-[5%] rotate-[-15deg] transform-gpu"
      />
      <Sticker
        icon={<GitMerge className="w-8 h-8 text-primary" />}
        text="Version Control"
        className="top-[15%] right-[8%] rotate-[20deg] transform-gpu"
      />
      <Sticker
        icon={<Database className="w-8 h-8 text-accent" />}
        text="Databases"
        className="bottom-[20%] left-[12%] rotate-[10deg] transform-gpu"
      />
      <Sticker
        icon={<Wind className="w-8 h-8 text-primary" />}
        text="Tailwind CSS"
        className="bottom-[15%] right-[15%] rotate-[-18deg] transform-gpu"
      />
       <Sticker
        icon={<Cog className="w-8 h-8 text-accent" />}
        text="Genkit AI"
        className="top-[50%] right-[2%] rotate-[5deg] transform-gpu"
      />
    </div>
  );
};

export default Stickers;
