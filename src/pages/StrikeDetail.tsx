
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StrikeDetail = () => {
  const { symbol, expiry, strikePrice } = useParams();
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Strike Detail</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Strike Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Symbol</p>
              <p className="text-xl font-bold">{symbol || 'N/A'}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Expiry</p>
              <p className="text-xl font-bold">{expiry || 'N/A'}</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">Strike Price</p>
              <p className="text-xl font-bold">{strikePrice || 'N/A'}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Call Option</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Call option details will appear here.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Put Option</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Put option details will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StrikeDetail;
