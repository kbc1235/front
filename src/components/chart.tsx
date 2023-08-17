import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CustomDougnutChart() {
  const LABELS = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  const DATAS = [12, 19, 3, 5, 2, 3];

  const chartData = [
    { label: "Red", value: 12 },
    { label: "Blue", value: 19 },
    { label: "Yellow", value: 3 },
    { label: "Green", value: 5 },
    { label: "Purple", value: 2 },
    { label: "Orange", value: 3 },
  ];

  return (
    <div style={{ width: 200 }}>
      <Doughnut
        options={{
          layout: {
            padding: 2,
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: LABELS,
          datasets: [
            {
              data: DATAS,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}
