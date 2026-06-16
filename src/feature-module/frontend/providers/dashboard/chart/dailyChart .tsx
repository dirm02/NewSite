import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const DailyChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar", // ✅ Now correctly typed
      height: 140,
    },
    colors: ["#FF008A"],
    plotOptions: {
      bar: {
        borderRadius: 5,
           columnWidth: "65%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F"],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 140,
          },
          plotOptions: {
            bar: {
              borderRadius: 3,
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Tasks",
      data: [12, 19, 15, 20, 14],
    },
  ];

  return (
    <Chart options={options} series={series} type="bar" height={140} />
  );
};

export default DailyChart;