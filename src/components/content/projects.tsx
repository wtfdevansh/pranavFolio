import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Credi Guide",
    description: "An AI agent help you to suggest credit card based on your usage.",
    image: "https://placehold.co/600x400.png",
    hint: "team collaboration",
    tags: ["Streamlit", "python", "Langchain", "Pydantic"],
    link: "https://github.com/wtfdevansh/CrediGuide",
  },
  {
    title: "KhataBook",
    description: "A application which help users to store the transactins of clients. all debit and credit data with backup",
    image: "https://placehold.co/600x400.png",
    hint: "finance",
    tags: ["Next.js", "MYSQL", "Tailwind CSS"],
    link: "https://github.com/wtfdevansh/KhataBook",
  },
  {
    title: "UPSC nagar",
    description: "An E-commerce website for buying books related to UPSC.",
    image: "https://placehold.co/600x400.png",
    hint: "E-commerce",
    tags: ["Wordpress", "plugins", "Figma"],
    link: "https://upscnagar.com/?srsltid=AfmBOoqohGgs5573djyT9g0L957rXJwS7TRGVmYjIlFliTXSl3xVxi4d",
  },
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a href={project.link} key={index} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform duration-300">
            <Card className="bg-secondary border-border h-full flex flex-col">
              <CardHeader>
                <div className="aspect-video relative w-full mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint={project.hint}
                  />
                </div>
                <CardTitle className="text-accent">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground flex-grow">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-foreground">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
