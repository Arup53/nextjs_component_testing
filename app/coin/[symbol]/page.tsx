"use client";

import Chart from "@/components/candlestickChartComponents/Chart";
import { useParams } from "next/navigation";

const CoinInfo = () => {
  const { symbol } = useParams(); // Get dynamic route params
  console.log(symbol);

  return (
    <div>
      <Chart symbol={symbol} />
    </div>
  );
};

export default CoinInfo;
