import React from 'react';

const experienceData = [
  {
    role: "Teaching assistant intern",
    company: "Apna College.",
    period: "june 2024 - september 2024",
    description: "As a teaching assistant i solved student doubts related to dsa and web and help in solving the problems. this helps to increase my logical thinking and make me good in problem solving"
  }
  
];

const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-6">Work Experience</h2>
      <div className="relative border-l-2 border-border pl-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-accent rounded-full border-4 border-background"></div>
            <p className="text-sm text-muted-foreground">{exp.period}</p>
            <h3 className="text-lg font-semibold text-primary mt-1">{exp.role}</h3>
            <p className="text-md text-accent/80">{exp.company}</p>
            <p className="mt-2 text-foreground/90">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
