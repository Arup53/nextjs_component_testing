"use client";

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Define your symbol, interval, and limit as needed
      const symbol = "BTCUSDT";
      const interval = "1m"; // 1-minute candlesticks
      const limit = 50; // number of candles to fetch
      const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Transform Binance data into [timestamp, open, high, low, close] format
        const seriesData = data.map((d) => [
          d[0], // timestamp
          parseFloat(d[1]), // open
          parseFloat(d[2]), // high
          parseFloat(d[3]), // low
          parseFloat(d[4]), // close
        ]);

        setSeries([{ data: seriesData }]);
      } catch (error) {
        console.error("Error fetching Binance data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "BTC/USDT Candlestick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Chart;
