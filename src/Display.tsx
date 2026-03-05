import MiniChart from "./MiniCharts";

export interface DisplayProps {
  stocks: stocks[];
}

export interface stocks {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changesPercentage: number;
}

const Display = ({ stocks = [] }: DisplayProps) => {
  console.log(stocks);

  return (
    <div className="w-full bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500">
              <th className="px-6 py-4 font-semibold">Symbol</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Price</th>
              <th className="px-6 py-4 font-semibold">Percentage Change%</th>
              <th className="px-6 py-4 font-semibold">14-Day Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {stocks.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td>{stock.changesPercentage.toFixed(2)}%</td>
                <td>
                  <MiniChart symbol={stock.symbol} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Display;
