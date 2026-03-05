import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Winners from "./Winners";
import Losers from "./Losers";
import Most_Active_Today from "./Most_Active_Today";
import { StockDataProvider } from "./StockDataContext";

function App() {
  return (
    <StockDataProvider>
      <Navbar />
      <div>
        <Routes>
          <Route path="/Winners" element={<Winners />} />
          <Route path="/Losers" element={<Losers />} />
          <Route path="/Most_Active_Today" element={<Most_Active_Today />} />
        </Routes>
      </div>
    </StockDataProvider>
  );
}

export default App;
