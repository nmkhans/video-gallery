import React from "react";
import Search from "../Search/Search";
import Img from "../../utils/Img";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img className="h-10" src={Img.logo} alt="Learn with Sumit" />
        </Link>
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
