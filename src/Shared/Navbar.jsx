import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import UseAuth from "../Hook/UseAuth";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();

  const handleLogout = () => {
    logOutUser()
      .then(() => toast.success("Sign out Successfully"))
      .catch((err) => toast.error(err.message));
  };

  const dashLink = user?.role
    ? user.role === "admin"
      ? "/admin"
      : user.role === "moderator"
      ? "/moderator"
      : "/user"
    : "/";

  const links = (
    <>
      <li>
        <Link to="/" className="font-bold text-[16px]">
          Home
        </Link>
      </li>
      {user?.role && (
        <li>
          <Link to={dashLink} className="font-bold text-[16px]">
            Dashboard
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <Link to="/" className="text-[20px] hidden md:block font-bold">
            ScholarBeacon
          </Link>
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>

        {user?.email ? (
          <button
            onClick={handleLogout}
            className="btn bg-[#0AA592] text-white hover:bg-slate-800"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#0AA592] text-white hover:bg-slate-800"
          >
            Login
          </Link>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Navbar;
