import React from 'react';

const DottedCartoon = () => {
  return (
    <div className="absolute bottom-4 right-4 opacity-30 pointer-events-none">
      <svg width="80" height="80" viewBox="0 0 100 100">
        <style>
          {`
            .orb {
              animation: float 8s ease-in-out infinite, pulse 4s ease-in-out infinite;
            }
            .orb:nth-child(2) { animation-delay: -2s; }
            .orb:nth-child(3) { animation-delay: -4s; }
            .orb:nth-child(4) { animation-delay: -6s; }

            @keyframes float {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              25% { transform: translateY(-5px) translateX(5px); }
              50% { transform: translateY(5px) translateX(-5px); }
              75% { transform: translateY(-5px) translateX(-5px); }
            }
            @keyframes pulse {
              0%, 100% { r: 3; }
              50% { r: 4; }
            }
        `}
        </style>
        <g>
          <circle className="orb" cx="50" cy="50" r="3" fill="hsl(var(--accent))" />
          <circle className="orb" cx="40" cy="40" r="3" fill="hsl(var(--primary))" />
          <circle className="orb" cx="60" cy="40" r="3" fill="hsl(var(--accent))" />
          <circle className="orb" cx="50" cy="60" r="3" fill="hsl(var(--primary))" />
        </g>
      </svg>
    </div>
  );
};

export default DottedCartoon;
