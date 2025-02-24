// import React from "react";
// import { Link, NavLink } from "react-router-dom";

// const UserDashBoard = () => {
//   return (
//     <div>
//       <nav className="w-64 bg-white p-5 shadow-lg">
//         <h2 className="text-xl font-bold mb-4">User Dashboard</h2>
//         <ul className="space-y-3">
//           <li>
//             <Link to="profile" className="block p-2 rounded hover:bg-gray-200">
//               My Profile
//             </Link>
//           </li>
//           <li>
//             <NavLink
//               to="/applications"
//               className="block p-2 rounded hover:bg-gray-200"
//             >
//               My Applications
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/reviews"
//               className="block p-2 rounded hover:bg-gray-200"
//             >
//               My Reviews
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default UserDashBoard;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserDashBoard = () => {
  return (
    <div className="flex">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-white p-5 shadow-lg min-h-screen">
        <h2 className="text-xl font-bold mb-4">User Dashboard</h2>
        <ul className="space-y-3">
          <li>
            <NavLink
              to="profile" // Fixed relative path
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
              to="applications" // Fixed relative path
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
              to="reviews" // Fixed relative path
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
      <div className="flex-1 p-5">
        <Outlet /> {/* This will render child components */}
      </div>
    </div>
  );
};

export default UserDashBoard;
