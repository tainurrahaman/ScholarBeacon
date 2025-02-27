import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icon.png";
import UseAuth from "../Hook/UseAuth";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, logOutUser } = UseAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success("Sign out Successfully");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const dashLink =
    user?.role === "admin"
      ? "/admin"
      : user?.role === "moderator"
      ? "/moderator"
      : "/user";

  const links = (
    <>
      <li>
        <Link to="/" className="font-bold text-[16px]">
          Home
        </Link>
      </li>
      <li>
        <Link to="/allScholarship" className="font-bold text-[16px]">
          All Scholarship
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
          <button tabIndex={0} className="btn btn-ghost md:hidden">
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
          <Link className="text-[20px] hidden md:block font-bold">
            ScholarBeacon
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex gap-1">
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover cursor-pointer"
              />
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {user.displayName}
              </div>
            </div>{" "}
            <button
              onClick={handleLogout}
              className="btn bg-[#0AA592] text-white hover:bg-slate-800"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#0AA592] text-white hover:bg-slate-800"
          >
            Login
          </Link>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
