import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-4 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Devansh Goyal
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm a creative developer and tech enthusiast, passionate about building modern web applications and exploring new technologies.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:devanshgoyal@example.com">
            <Button variant="outline" size="icon" className="bg-background/50 backdrop-blur-sm">
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
