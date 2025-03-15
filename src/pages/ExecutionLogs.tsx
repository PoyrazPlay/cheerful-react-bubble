
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExecutionLogs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Execution Logs</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>System Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md text-sm font-mono h-[400px] overflow-y-auto">
            <p className="py-1">[INFO] System initialized</p>
            <p className="py-1">[INFO] Waiting for trading signals...</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Error Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md text-sm font-mono h-[200px] overflow-y-auto">
            <p className="text-muted-foreground">No errors recorded.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExecutionLogs;
