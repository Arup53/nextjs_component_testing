// import Chart from "@/components/candlestickChartComponents/Chart";

import AllCoins from "@/components/Stastics/AllCoins/Allcoins";
import Stats from "@/components/Stastics/Statstics";

const Live = () => {
  return (
    <div className="h-screen bg-slate-100">
      <Stats />
      <AllCoins />
    </div>
  );
};

export default Live;
