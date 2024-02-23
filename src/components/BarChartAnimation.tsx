import { ChartData } from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const initialState: ChartData<"bar", number[], string> = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BarChartAnimation: React.FC = () => {
  const [data, setData] =
    useState<ChartData<"bar", number[], string>>(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      const oldDataSet = data.datasets[0];
      const newData: number[] = [];

      if (data.labels) {
        for (let x = 0; x < data.labels.length; x++) {
          newData.push(Math.floor(Math.random() * 100));
        }
      }

      const newDataSet = {
        ...oldDataSet,
        data: newData,
        backgroundColor: "red",
        borderColor: "blue",
        hoverBackgroundColor: "green",
        hoverBorderColor: "yellow",
      };

      const newState: ChartData<"bar", number[], string> = {
        ...initialState,
        datasets: [newDataSet],
      };

      setData(newState);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <>
      <h2>13. Bar chart (animation)</h2>
      <Bar data={data} />
    </>
  );
};

export default BarChartAnimation;
