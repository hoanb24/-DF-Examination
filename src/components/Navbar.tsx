import React from "react";
import { FaSearch, FaComments, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-black p-4 rounded-md text-white mx-2 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search anything"
          className="pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
      </div>
      <div className="flex space-x-4">
        <FaComments className="text-xl cursor-pointer" />
        <FaBell className="text-xl cursor-pointer" />
        <FaUserCircle className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
