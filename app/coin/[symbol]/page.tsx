"use client";

import { useParams } from "next/navigation";

const CoinInfo = () => {
  const { symbol } = useParams(); // Get dynamic route params
  console.log(symbol);
  return <div>This is individual coin</div>;
};

export default CoinInfo;
