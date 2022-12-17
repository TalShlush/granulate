import moment from "moment";
import chartStreamer from "chartjs-plugin-streaming";
import { Chart } from "react-chartjs-2";
import "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js/auto";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ScatterDataPoint,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
const momentAdapter = require("chartjs-adapter-moment");

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  chartStreamer,
  momentAdapter
);

export const GraphData = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"line">>({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState<ChartOptions<"line">>({});

  const [data, setData] = useState<ChartOptions<"line">>({});

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    setTimeout(() => {}, 2000);

    setChartData({
      datasets: [
        {
          label: "Dataset 1 (linear interpolation)",
          fill: false,
          type: "line",
          borderDash: [8, 4],
          data: [
            { x: Date.now(), y: 10 },
            { x: Date.now(), y: 11 },
            { x: Date.now() - 100000, y: 10 },
            { x: Date.now(), y: 11 },
            { x: Date.now() - 100000, y: 10 },
            { x: Date.now(), y: 11 },
          ],
        },
      ],
    });

    const options: ChartOptions<"line"> = {
      scales: {
        x: {
          type: "timeseries",
        },
      },
    };

    setChartOptions(options);
  }, []);

  return (
    <Chart type="line" ref={chartRef} data={chartData} options={chartOptions} />
  );
};
