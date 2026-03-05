import Display from "./Display";
import { useContext } from "react";
import {
  StockDataContext,
  type StockData_Context_Type,
} from "./StockDataContext";

const Winners = () => {
  const { data, loading, error } = useContext(
    StockDataContext,
  ) as StockData_Context_Type;

  if (loading) {
    return <div>Loading today's winners...</div>;
  }

  if (error) {
    return <div>Error:Could not fetch stockdata.</div>;
  }

  const WinningStocks = data?.gainers || [];

  return (
    <div>
      <h2 className="text-center border-collapse">Today's winners</h2>
      <Display stocks={WinningStocks} />
    </div>
  );
};

export default Winners;
