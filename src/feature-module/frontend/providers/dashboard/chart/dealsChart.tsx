import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

const DealsChart: React.FC = () => {
  const series = [
    {
      name: "Sales",
      data: [
        { x: "Inpipeline", y: 400 },
        { x: "Follow Up", y: 130 },
        { x: "Schedule", y: 248 },
        { x: "Conversation", y: 470 },
        { x: "Won", y: 470 },
        { x: "Lost", y: 180 },
      ],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 260,
    },
    colors: ["#00918E"],
    plotOptions: {
      bar: {
        borderRadius: 0,
        columnWidth: "35%",
        dataLabels: {
          position: "center", // 👈 inside bar
        },
      },
    },
    dataLabels: {
      enabled: true, // 👈 enable labels
      style: {
        colors: ["#fff"], // white text inside bar
        fontWeight: 600,
      },
      formatter: function (val) {
        return val.toString();
      },
    },
    xaxis: {
      type: "category",
      labels: {
        style: {
          fontSize: "10px",
          fontWeight: 700,
        },
      },
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={260}
    />
  );
};

export default DealsChart;