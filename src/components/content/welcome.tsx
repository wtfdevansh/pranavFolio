import React from 'react';

const Welcome = () => {
  return (
    <div>
      <pre className="text-primary text-sm md:text-base">
{`
 _____                   __   _         _ 
|_   _|__ _ __ _ __ ___ / /_ | |__   __| |
  | |/ _ \\ '__| '_ \` _ \\ '_ \\| '_ \\ / _\` |
  | |  __/ |  | | | | | | (_) | | | | (_| |
  |_|\\___|_|  |_| |_| |_|\\___/|_| |_|\\__,_|
                                         
`}
      </pre>
      <p className="mt-4">Welcome! I'm Devansh Goyal. This is my interactive terminal portfolio.</p>
      <p>Type 'help' to see the list of available commands.</p>
    </div>
  );
};

export default Welcome;
