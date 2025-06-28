import React from 'react';

const experienceData = [
  {
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    period: "Jan 2021 - Present",
    description: "Led the development of a high-traffic e-commerce platform, mentored junior developers, and architected scalable microservices. Improved application performance by 40% through code optimization and infrastructure upgrades."
  },
  {
    role: "Mid-Level Software Engineer",
    company: "Innovate Co.",
    period: "Jun 2018 - Dec 2020",
    description: "Developed and maintained features for a SaaS application using React and Ruby on Rails. Collaborated with cross-functional teams to deliver high-quality software on schedule."
  },
  {
    role: "Junior Software Developer",
    company: "Startup Hub",
    period: "May 2017 - May 2018",
    description: "Assisted in the development of a mobile-first social media application. Gained hands-on experience with agile methodologies, version control, and full-stack development."
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
