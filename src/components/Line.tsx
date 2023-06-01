import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

// Register the necessary chart scale
Chart.register(...registerables);

const data: ChartData<"line", number[], string> = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      //   lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options: ChartOptions<"line"> = {
  scales: {
    x: {
      type: "category", // Specify the scale type as "category"
    },
  },
};

const LineChart: React.FC = () => (
  <div>
    <h2>3. Line Example</h2>
    <Line data={data} options={options} width={400} height={400} />
  </div>
);

export default LineChart;
