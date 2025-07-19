import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const achievementsData = [
  {
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    title: "Global Rank under top 10% on TryHackMe",
    issuer: "TryHackMe",
    description: "Achieved a global rank under the top 10% on TryHackMe, showcasing exceptional skills in cybersecurity challenges."
  },
  {
    icon: <Star className="w-5 h-5 text-blue-400" />,
    title: "Technovate finalist 2025",
    issuer: "Technovate",
    description: "Finalist in Technovate 2025, recognized for innovative solutions in technology and cybersecurity."
  },
  {
    icon: <Award className="w-5 h-5 text-green-400" />,
    title: "Research paper",
    issuer: "ICETM (IEEE 2025)",
    description: "Published research paper on steganography real time data transmission."
  },
];

const Achievements = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-6">My Achievements</h2>
      <div className="space-y-6">
        {achievementsData.map((ach, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">{ach.icon}</div>
            <div>
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

export default Achievements;
