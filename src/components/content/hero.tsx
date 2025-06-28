import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Stickers from '@/components/content/stickers';

interface HeroProps {
  showStickers: boolean;
}

const Hero: React.FC<HeroProps> = ({ showStickers }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative z-10 overflow-hidden">
      {/* Animated Stickers overlay */}
      <div
        className={`absolute inset-0 w-full h-full pointer-events-none z-50 transition-opacity duration-700 ${showStickers ? 'opacity-100' : 'opacity-0'}`}
      >
        <Stickers isTerminalFocused={false} />
      </div>
      <div className="max-w-3xl relative z-40">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Devansh Goyal
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm a creative developer and tech enthusiast, passionate about building modern web applications and exploring new technologies.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://github.com/wtfdevansh/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/devansh-goyal-3b558121b/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:mrdivu7@gmail.com">
            <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce z-40">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
