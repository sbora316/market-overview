import Display from "./Display";
import { useContext } from "react";
import {
  StockDataContext,
  type StockData_Context_Type,
} from "./StockDataContext";

const Losers = () => {
  const { data, loading, error } = useContext(
    StockDataContext,
  ) as StockData_Context_Type;

  if (loading) {
    return <div>Loading today's winners...</div>;
  }

  if (error) {
    return <div>Error:Could not fetch stockdata.</div>;
  }

  const LoserStocks = data?.losers || [];

  return (
    <div>
      <h2 className="text-center border-collapse">Today's losers</h2>
      <Display stocks={LoserStocks} />
    </div>
  );
};

export default Losers;
