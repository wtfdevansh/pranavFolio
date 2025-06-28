import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const achievementsData = [
  {
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    title: "Innovator of the Year Award",
    issuer: "TechCrunch Disrupt 2023",
    description: "Awarded for developing a novel machine learning algorithm that significantly improves data processing speeds."
  },
  {
    icon: <Star className="w-5 h-5 text-blue-400" />,
    title: "Top 5% Contributor on GitHub",
    issuer: "Open Source Community",
    description: "Recognized for consistent and high-quality contributions to several major open-source projects, including React and TensorFlow."
  },
  {
    icon: <Award className="w-5 h-5 text-green-400" />,
    title: "Code-a-Thon Grand Champion",
    issuer: "Global Hack Week 2022",
    description: "Led a team to victory by building a prize-winning application for environmental sustainability in under 48 hours."
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
