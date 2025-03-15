
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OIDetailed = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Option Chain - Detailed</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Symbol: NIFTY</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Detailed option chain data will appear here.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Open Interest Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Open interest analysis will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default OIDetailed;
