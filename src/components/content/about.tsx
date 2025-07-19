import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6">
      <Avatar className="w-24 h-24">
        <AvatarImage src="/profile1.jpeg" alt="Devansh Goyal coding avatar" data-ai-hint="profile picture" />
        <AvatarFallback>PS</AvatarFallback>
      </Avatar>
      <div className="max-w-prose">
        <h2 className="text-2xl font-bold text-accent mb-2">About Pranav Kumar</h2>
        <p className="mb-4">
          Hello! I'm Pranav , I’m a tech enthusiast with a strong foundation in networking and cybersecurity, skilled in securing systems, analyzing threats, and ensuring safe digital environments.
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
