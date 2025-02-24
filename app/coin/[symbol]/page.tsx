"use client";

import Chart from "@/components/candlestickChartComponents/Chart";
import { useParams } from "next/navigation";

const CoinInfo = () => {
  const { symbol } = useParams(); // Get dynamic route params
  console.log(symbol);
  const binanceSymbol = symbol + "usdt";
  console.log(binanceSymbol.toUpperCase());

  return (
    <div>
      <Chart symbol={binanceSymbol} />
    </div>
  );
};

export default CoinInfo;
