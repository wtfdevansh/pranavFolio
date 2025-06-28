import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const achievementsData = [
  {
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    title: "500+ problems on leetcode and high ranking",
    issuer: "Leetcode",
    description: "problem solving skills dsa and logical approach."
  },
  {
    icon: <Star className="w-5 h-5 text-blue-400" />,
    title: "postman API fundamental student expert",
    issuer: "Postman",
    description: "API fundamnetal practical knowledge."
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
