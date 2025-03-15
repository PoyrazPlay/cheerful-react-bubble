
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PCR = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Put/Call Ratio Analysis</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current PCR</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Nifty PCR</p>
              <p className="text-2xl font-bold">0.00</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Bank Nifty PCR</p>
              <p className="text-2xl font-bold">0.00</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Overall Market PCR</p>
              <p className="text-2xl font-bold">0.00</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>PCR Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">PCR trend chart will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PCR;
