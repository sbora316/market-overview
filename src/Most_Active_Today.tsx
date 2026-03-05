import Display from "./Display";
import { useContext } from "react";
import {
  StockDataContext,
  type StockData_Context_Type,
} from "./StockDataContext";

const Most_Active_Today = () => {
  const { data, loading, error } = useContext(
    StockDataContext,
  ) as StockData_Context_Type;

  if (loading) {
    return <div>Loading today's most active stocks...</div>;
  }

  if (error) {
    return <div>Error:Could not fetch stockdata.</div>;
  }

  const MostActive = data?.actives || [];

  return (
    <div>
      <h2 className="text-center border-collapse">
        Today's Most Active Stocks
      </h2>
      <Display stocks={MostActive} />
    </div>
  );
};

export default Most_Active_Today;
