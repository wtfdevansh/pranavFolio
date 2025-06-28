import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://placehold.co/100x100.png" alt="Profile" data-ai-hint="profile picture" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="max-w-prose">
        <h2 className="text-2xl font-bold text-accent mb-2">About Me</h2>
        <p className="mb-4">
          Hello! I'm a passionate and creative software engineer with a knack for building beautiful, scalable, and user-friendly applications. With a strong foundation in modern web technologies, I specialize in bringing ideas to life from concept to deployment.
        </p>
        <p className="mb-4">
          My journey in tech started with a simple "Hello, World!" and has since evolved into a deep love for coding and problem-solving. I thrive in collaborative environments and am always eager to learn new skills and take on challenging projects.
        </p>
        <p>
          When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
        </p>
      </div>
    </div>
  );
};

export default About;
