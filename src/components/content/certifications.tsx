import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';
import Image from 'next/image';

const achievementsData = [

  {
    icon: "/aws.png",
    title: "aws cloud practitioner",
    issuer: "AWS",
    description: "Fundamental knowledge of AWS cloud services and architecture."
  },
  {
    icon: "/ceh.jpeg",
    title: "certified ethical hacker ",
    issuer: "the International Council of Electronic Commerce Consultants",
    description: "Proficient in identifying and addressing security vulnerabilities in systems."
  },
  {
    icon: "/comptia.png",
    title: "comptia security+",
    issuer: "CompTIA",
    description: "Demonstrated expertise in cybersecurity principles and practices."
  },
   {
    icon: "/cfe.png",
    title: "certified fraud examiner",
    issuer: "ACFE",
    description: "Specialized in fraud prevention, detection, and investigation techniques."
  },

   {
    icon: "/isc2.png",
    title: "Isc2 certified in cybersecurity",
    issuer: "ISC2",
    description: "Foundational knowledge in cybersecurity principles and practices."
  },
];

const Certifications = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-6">My Certifications</h2>
      <div className="space-y-6">
        {achievementsData.map((ach, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0">  <Image src={ach.icon} alt={ach.title} width={100}  height={100}   /></div>
            <div className="flex-shrink-0 mt-8">
              <h3 className="text-lg font-semibold text-primary">{ach.title}</h3>
              <p className="text-sm text-muted-foreground">{ach.issuer}</p>
              <p className="mt-1 text-foreground/90">{ach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
