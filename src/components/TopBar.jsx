import React from "react";
import Notification from "./Notification";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <div className="bg-white text-gray-800 shadow-md flex items-center justify-between px-4 py-2 sticky top-0 z-50 h-12">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="bg-[#2a3eb1] text-white h-6 w-6 rounded flex items-center justify-center mr-2">
            <span className="font-bold text-xs">BRS</span>
          </div>
          <span className="text-sm font-medium text-gray-800">Admin</span>
        </Link>
      </div>

      <div className="flex-1 mx-4 relative max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-xs" />
          </div>
          <input
            type="text"
            placeholder="Search businesses, users, or reports..."
            className="bg-gray-100 text-gray-800 placeholder-gray-500 rounded py-1 pl-8 pr-4 w-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 h-8 border border-gray-200"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-600 transition-colors">
          <FontAwesomeIcon icon={faBars} className="text-sm" />
        </button>
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default TopBar;
