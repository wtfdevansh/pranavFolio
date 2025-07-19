import React from 'react';

const experienceData = [
  {
    role: "Backend Developer Intern",
    company: "Outworx solutions ",
    period: "june 2024 - august 2024",
    description: "Worked as a backend developer on ParkEngage, a US-based parking management solution, My responsibilities included database management using MySQL Workbench, creating,optimizing, and maintaining SQL queries. Additionally, I contributed to the development and enhancement of backend features using the Laravel PHP framework, ensuring smooth integration with the front-end systems"

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
