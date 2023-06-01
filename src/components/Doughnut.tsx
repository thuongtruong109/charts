import { ChartData } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const data: ChartData<any> = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

const DoughnutChart: React.FC = () => (
  <div>
    <h2>10. Doughnut Example</h2>
    <Doughnut data={data} width={400} height={400} />
  </div>
);

export default DoughnutChart;
