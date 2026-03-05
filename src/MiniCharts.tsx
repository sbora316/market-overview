import { useState, useEffect } from "react";
import { LineChart, Line, YAxis } from "recharts";

interface MiniChartProps {
  symbol: string;
}

const MiniChart = ({ symbol }: MiniChartProps) => {
  // Our blueprint expects a high and low number
  const [chartData, setChartData] = useState<{ high: number; low: number }[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate exactly 10 random data points with high and low prices
    const fakeData = [];

    for (let i = 0; i < 10; i++) {
      const basePrice = Math.floor(Math.random() * 100) + 100;
      fakeData.push({
        high: basePrice + Math.floor(Math.random() * 15),
        low: basePrice - Math.floor(Math.random() * 15),
      });
    }

    // Save the data to our state and turn off the loading sign
    setChartData(fakeData);
    setLoading(false);
  }, [symbol]);

  if (loading) return <span>Loading...</span>;
  if (chartData.length === 0) return <span>No data</span>;

  return (
    <LineChart width={120} height={40} data={chartData}>
      <YAxis domain={["auto", "auto"]} hide={true} />

      {/* Green line for the high price */}
      <Line
        type="monotone"
        dataKey="high"
        stroke="#4ade80"
        strokeWidth={2}
        dot={false}
      />

      {/* Red line for the low price */}
      <Line
        type="monotone"
        dataKey="low"
        stroke="#f87171"
        strokeWidth={2}
        dot={false}
      />
    </LineChart>
  );
};

export default MiniChart;
