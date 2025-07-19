import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Real-Time Steganographic Tool for Secure Data Transmission in Live Video",
    description: "A tool that allows users to securely transmit data by hiding it within live video streams, ensuring confidentiality and integrity.",
    image: "/stegno.jpeg",
    hint: "team collaboration",
    tags: ["OpenCV", "python", "LSB", "WEB"],
    link: "https://github.com/Pranav2244",
  },
  {
    title: "OWASP Risk Calculator",
    description: "Developed an OWASP-based risk calculator to assess and score risks related to web vulnerabilities, following the OWASP top 10 guidelines. This tool helps users identify and prioritize security threats effectively.",
    image: "/owasp.jpeg",
    hint: "finance",
    tags: ["OWASP", "Python", "Flask"],
    link: "https://github.com/Pranav2244",
  },
  {
    title: "Assisting Cyber Police in Financial Fraud Investigation ",
    description: "Collaborated with the Cybercrime division of Noida Police to assist in a ₹23.9 Lakh financial fraud case involving forged documents and and fake investment schemes. With the permission and knowledge of the cyber police conducted social engineering analysis, phishing detection, and email forensic to gather critical intelligence. Tried making real time, honey pot, and sandbox analysis for malicious link to identify Scammar methods and trace their digital footprints",
    image: "/police.jpeg",
    hint: "E-commerce",
    tags: ["Cybersecurity", "Investigation", "Social Engineering"],
    link: "https://github.com/Pranav2244",
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
