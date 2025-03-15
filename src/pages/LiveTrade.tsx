
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LiveTrade = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Live Trade</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No active trades at the moment.</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Live market data will appear here.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Trading Signals</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Trading signals will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveTrade;
