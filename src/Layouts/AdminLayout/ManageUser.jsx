import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; // Importing React Icon for the delete button

const usersData = [
  { id: 1, username: "John Doe", email: "john@example.com", role: "user" },
  { id: 2, username: "Jane Smith", email: "jane@example.com", role: "user" },
  { id: 3, username: "Mark Twain", email: "mark@example.com", role: "admin" },
  // More mock user data
];

const ManageUser = () => {
  const [users, setUsers] = useState(usersData);
  const [roleFilter, setRoleFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(null); // To manage dropdown visibility

  const handleRoleChange = (userId, newRole) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, role: newRole } : user
    );
    setUsers(updatedUsers);
    setOpenDropdown(null); // Close the dropdown after selecting a role
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const filteredUsers =
    roleFilter === "all"
      ? users
      : users.filter((user) => user.role === roleFilter);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl p-6">
        {/* Filter dropdown */}
        <div className="flex justify-end mb-6">
          <select
            className="p-2 border rounded-lg shadow-md bg-white hover:bg-gray-50 focus:outline-none"
            onChange={(e) => setRoleFilter(e.target.value)}
            value={roleFilter}
          >
            <option value="all">All Roles</option>
            <option value="user">User</option>
            <option value="moderator">Moderator</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-sm">
                  User Name
                </th>
                <th className="px-6 py-3 text-left font-medium text-sm">
                  User Email
                </th>
                <th className="px-6 py-3 text-left font-medium text-sm">
                  User Role
                </th>
                <th className="px-6 py-3 text-center font-medium text-sm">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="relative inline-block">
                      <button
                        className="text-blue-600 font-semibold hover:text-blue-800 focus:outline-none"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === user.id ? null : user.id
                          )
                        } // Toggle dropdown visibility
                      >
                        {user.role}
                      </button>

                      {/* Dropdown for changing roles */}
                      {openDropdown === user.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white border shadow-lg rounded-lg z-10">
                          <ul className="space-y-1">
                            {["user", "moderator", "admin"].map(
                              (role) =>
                                role !== user.role && (
                                  <li
                                    key={role}
                                    onClick={() =>
                                      handleRoleChange(user.id, role)
                                    }
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-lg"
                                  >
                                    {role.charAt(0).toUpperCase() +
                                      role.slice(1)}
                                  </li>
                                )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    >
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
