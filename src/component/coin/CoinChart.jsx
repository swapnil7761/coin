import React from "react";
import { LineChart, Line, YAxis } from "recharts";

const CoinChart = ({ sparklineData }) => {
  const prices = sparklineData.price;

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Prepare the chart data
  const chartData = prices.map((price, index) => ({
    time: index, // x-axis as index
    price: price,
  }));

  return (
    <LineChart width={200} height={50} data={chartData}>
      <YAxis
        domain={[minPrice, maxPrice]}
        hide={true} // Hides the y-axis, but keeps the range effect
      />
      <Line
        type="linear"
        dataKey="price"
        stroke={prices[0] < prices[prices.length - 1] ? "#00FD00" : "#FF3B3B"}
        dot={false}
        strokeWidth={1.2}
      />
    </LineChart>
  );
};

export default CoinChart;
