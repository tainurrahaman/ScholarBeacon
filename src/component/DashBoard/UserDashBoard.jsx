import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const UserDashBoard = () => {
  return (
    <div className="max-w-7xl mx-auto font-mulish pt-14 lg:pt-20">
      <Navbar></Navbar>
      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-44 bg-white p-5 shadow-lg ">
          <h2 className="text-lg font-bold mb-4">User Dashboard</h2>
          <ul className="space-y-3">
            <li>
              <NavLink
                to="profile"
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? "bg-gray-300" : "hover:bg-gray-200"
                  }`
                }
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="applications"
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? "bg-gray-300" : "hover:bg-gray-200"
                  }`
                }
              >
                My Applications
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? "bg-gray-300" : "hover:bg-gray-200"
                  }`
                }
              >
                My Reviews
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Content Area */}
        <div className="flex-1 p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
