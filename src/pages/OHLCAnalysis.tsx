
import React, { useState } from 'react';
import HomeLayout from '@/components/layout/HomeLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Clock, RefreshCw } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Define the interval types
type IntervalType = 'ONE_MINUTE' | 'FIVE_MINUTE';

// Define OHLC data type
interface OHLCData {
  [timestamp: string]: {
    open: number;
    high: number;
    low: number;
    close: number;
    atr: number;
    ha_color: string;
    volatility_bbw: number;
    Adx_slope: number;
  }
}

interface APIResponse {
  interval: IntervalType;
  ohlc_data: OHLCData;
}

// Demo data for testing and fallback
const demoData: OHLCData = {
  "2025-03-13 09:15:00": {
    open: 22541.5,
    high: 22556.0,
    low: 22475.6,
    close: 22484.7,
    atr: 32.19,
    ha_color: "red",
    volatility_bbw: 0.35,
    Adx_slope: 81.21
  },
  "2025-03-13 09:20:00": {
    open: 22485.0,
    high: 22489.95,
    low: 22460.45,
    close: 22486.9,
    atr: 31.66,
    ha_color: "red",
    volatility_bbw: 0.31,
    Adx_slope: 73.76
  },
  "2025-03-13 09:25:00": {
    open: 22486.85,
    high: 22498.1,
    low: 22470.0,
    close: 22490.3,
    atr: 30.0,
    ha_color: "green",
    volatility_bbw: 0.28,
    Adx_slope: 68.5
  }
};

// Function to fetch OHLC data with selected interval
const fetchOHLCData = async (interval: IntervalType): Promise<APIResponse> => {
  const response = await fetch(`http://54.221.81.212:5000/get_ohlc_data?interval=${interval}`);
  if (!response.ok) {
    throw new Error('Failed to fetch OHLC data');
  }
  return response.json();
};

const OHLCAnalysis: React.FC = () => {
  const [interval, setInterval] = useState<IntervalType>('FIVE_MINUTE');

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['ohlcData', interval],
    queryFn: () => fetchOHLCData(interval),
    refetchInterval: 300000, // Refresh every 5 minutes
    meta: {
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to load OHLC data. Using demo data instead.",
          variant: "destructive",
        });
      }
    }
  });

  // Process the data for display
  const processedData = React.useMemo(() => {
    if (!data) return demoData;
    return data.ohlc_data || demoData;
  }, [data]);

  // Convert the data object to array for easier mapping in the table
  const tableData = React.useMemo(() => {
    return Object.entries(processedData).map(([timestamp, values]) => ({
      timestamp,
      ...values
    }));
  }, [processedData]);

  const handleRefresh = () => {
    refetch();
    toast({
      title: "Refreshing",
      description: "Fetching latest OHLC data...",
    });
  };

  if (isLoading && !data) {
    return (
      <HomeLayout title="OHLC Analysis" subtitle="Loading market data...">
        <div className="flex items-center justify-center h-64 w-full">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-t-4 border-primary rounded-full animate-spin"></div>
            <p className="text-muted-foreground">Loading OHLC data...</p>
          </div>
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout 
      title="OHLC Analysis" 
      subtitle="Real-time market data"
    >
      {/* OHLC Data Table with Interval Selector */}
      <Card className="w-full max-w-7xl card-hover">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              OHLC Time Series Data
            </CardTitle>
            <CardDescription>
              Detailed OHLC and indicator values for each time period
            </CardDescription>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Interval:</span>
              <Select
                value={interval}
                onValueChange={(value) => setInterval(value as IntervalType)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ONE_MINUTE">1 Minute</SelectItem>
                  <SelectItem value="FIVE_MINUTE">5 Minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleRefresh}
              title="Refresh data"
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-2 text-left font-medium">Timestamp</th>
                  <th className="py-3 px-2 text-right font-medium">Open</th>
                  <th className="py-3 px-2 text-right font-medium">High</th>
                  <th className="py-3 px-2 text-right font-medium">Low</th>
                  <th className="py-3 px-2 text-right font-medium">Close</th>
                  <th className="py-3 px-2 text-right font-medium">ATR</th>
                  <th className="py-3 px-2 text-right font-medium">BB Width</th>
                  <th className="py-3 px-2 text-right font-medium">ADX Slope</th>
                  <th className="py-3 px-2 text-center font-medium">HA Color</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-2 px-2 font-medium">{row.timestamp}</td>
                    <td className="py-2 px-2 text-right">{row.open.toFixed(2)}</td>
                    <td className="py-2 px-2 text-right">{row.high.toFixed(2)}</td>
                    <td className="py-2 px-2 text-right">{row.low.toFixed(2)}</td>
                    <td className="py-2 px-2 text-right">{row.close.toFixed(2)}</td>
                    <td className="py-2 px-2 text-right">{row.atr.toFixed(2)}</td>
                    <td className="py-2 px-2 text-right">{row.volatility_bbw.toFixed(3)}</td>
                    <td className="py-2 px-2 text-right">{row.Adx_slope.toFixed(2)}</td>
                    <td className="py-2 px-2 text-center">
                      <div 
                        className={`w-4 h-4 rounded-full mx-auto ${row.ha_color === 'green' ? 'bg-green-500' : 'bg-red-500'}`}
                        title={`Heikin-Ashi: ${row.ha_color}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        
        <CardFooter className="border-t pt-4 justify-between">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Last update: {new Date().toLocaleTimeString()}
          </p>
          
          <p className="text-sm text-muted-foreground">
            Interval: {interval === 'ONE_MINUTE' ? '1 Minute' : '5 Minutes'}
          </p>
        </CardFooter>
      </Card>
    </HomeLayout>
  );
};

export default OHLCAnalysis;