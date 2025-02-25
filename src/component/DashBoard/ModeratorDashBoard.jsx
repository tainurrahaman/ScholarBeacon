import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ModeratorDashBoard = () => {
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-white p-5 shadow-lg min-h-screen">
        <h2 className="text-xl font-bold mb-4">Moderator Dashboard</h2>
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
              to="manageScholarship"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-gray-300" : "hover:bg-gray-200"
                }`
              }
            >
              Manage Scholarships.
            </NavLink>
          </li>
          <li>
            <NavLink
              to="allreview"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-gray-300" : "hover:bg-gray-200"
                }`
              }
            >
              All reviews.
            </NavLink>
          </li>
          <li>
            <NavLink
              to="allAppliedScholarship"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-gray-300" : "hover:bg-gray-200"
                }`
              }
            >
              All applied Scholarship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addScholarship"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-gray-300" : "hover:bg-gray-200"
                }`
              }
            >
              Add Scholarship
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default ModeratorDashBoard;
