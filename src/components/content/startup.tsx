import React from 'react';
import { Rocket, Target, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Startup = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
        <Rocket className="w-6 h-6" /> My Startup: InnovateX
      </h2>
      <p className="mb-6 text-muted-foreground">
        InnovateX is a forward-thinking company dedicated to creating cutting-edge solutions that bridge the gap between human creativity and artificial intelligence. Our mission is to empower creators and developers with tools that are both powerful and intuitive.
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
              <Zap className="w-5 h-5" /> Core Product
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our flagship product, 'Synapse', is a collaborative AI development environment that accelerates the journey from concept to market-ready application.</p>
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
