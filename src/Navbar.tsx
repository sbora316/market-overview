import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <h1>Market Overview</h1>
      </div>
      <div className="flex p-2 ">
        <Link to="/Winners" className="px-4">
          Winner
        </Link>
        <Link to="/Losers" className="px-4">
          {" "}
          Losers
        </Link>
        <Link to="/Most_Active_Today" className="px-4">
          {" "}
          Most Active Today
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
