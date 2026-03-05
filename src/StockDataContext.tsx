import { createContext, useState, useEffect, type ReactNode } from "react";

export interface stocks {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changesPercentage: number;
}
interface Stock_Quote {
  gainers: stocks[];
  losers: stocks[];
  actives: stocks[];
}

export interface StockData_Context_Type {
  data: Stock_Quote | null;
  loading: boolean;
  error: boolean;
}

export const StockDataContext = createContext<StockData_Context_Type | null>(
  null,
);

export const StockDataProvider = ({ children }: { children: ReactNode }) => {
  const [stockData, setStockData] = useState<null | Stock_Quote>(() => null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchStockData = async () => {
    setLoading(true);
    const apikey = import.meta.env.VITE_API_KEY;
    try {
      const [gainersRes, losersRes, activesRes] = await Promise.all([
        fetch(
          `https://financialmodelingprep.com/stable/biggest-gainers?apikey=${apikey}`,
        ),
        fetch(
          `https://financialmodelingprep.com/stable/biggest-losers?apikey=${apikey}`,
        ),
        fetch(
          `https://financialmodelingprep.com/stable/most-actives?apikey=${apikey}`,
        ),
      ]);

      const gainers = await gainersRes.json();
      const losers = await losersRes.json();
      const actives = await activesRes.json();

      setStockData({
        gainers: gainers,
        losers: losers,
        actives: actives,
      });
      setError(false);
    } catch (err) {
      console.error("Failed to fetch FMP data:", err);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <StockDataContext.Provider
      value={{
        data: stockData,
        loading: loading,
        error: error,
      }}
    >
      {children}
    </StockDataContext.Provider>
  );
};
