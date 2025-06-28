import React from 'react';
import { Rocket, Target, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Startup = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
        <Rocket className="w-6 h-6" /> My Startup: Techinity
      </h2>
      <p className="mb-6 text-muted-foreground">
        Techinity is a forward-thinking company dedicated to creating cutting-edge solutions that bridge the gap between human creativity and artificial intelligence. Our mission is to empower creators and developers with tools that are both powerful and intuitive.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-secondary/50 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Target className="w-5 h-5" /> Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>To be the leading platform for AI-driven innovation, fostering a community where ideas can flourish and transform into reality.</p>
          </CardContent>
        </Card>
        <Card className="bg-secondary/50 border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Zap className="w-5 h-5" /> service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our flagship service, <a href="https://enigma-labs.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Enigma Labs</a>, is a platform where we devlop solution for our clients we provide service related to web, mobile and ai .</p>
            
          </CardContent>
        </Card>
      </div>
       <p className="mt-6">
        We are passionate about the future and are constantly exploring new frontiers in technology. Stay tuned for what's next!
      </p>
    </div>
  );
};

export default Startup;
