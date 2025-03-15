
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OISummary = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Open Interest Summary</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Call OI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Call open interest data will appear here.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Put OI</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Put open interest data will appear here.</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>OI Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Open interest trend chart will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OISummary;
