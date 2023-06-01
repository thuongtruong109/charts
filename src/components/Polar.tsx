import { ChartData } from "chart.js";
import React from "react";
import { PolarArea } from "react-chartjs-2";

const data: ChartData<any> = {
  datasets: [
    {
      data: [11, 16, 7, 3, 14],
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"],
      label: "My dataset",
    },
  ],
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
};

const PolarChart: React.FC = () => (
  <div>
    <h2>6. Polar Example</h2>
    <PolarArea data={data} width={400} height={400} />
  </div>
);

export default PolarChart;
