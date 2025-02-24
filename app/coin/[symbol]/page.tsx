"use client";

import Chart from "@/components/candlestickChartComponents/Chart";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

const CoinInfo = () => {
  const { symbol } = useParams(); // Get dynamic route params
  const searchParams = useSearchParams();
  const symbolWithSuffix = symbol + "usdt";
  const search = searchParams.get("data");

  const parsedData = search ? JSON.parse(decodeURIComponent(search)) : null; // Decode & Parse

  console.log(parsedData); // Should log: { message: "some data" }

  return (
    <div>
      <Chart symbol={symbolWithSuffix} />
    </div>
  );
};

export default CoinInfo;
