import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ImHappy } from "react-icons/im";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="w-10/12 mx-auto my-10 font-montseerat">
        <div className="mt-3 md:mt-10 flex items-center text-lg md:text-3xl">
          <h2 className="font-semibold md:font-bold  flex">
            Hey {user?.displayName}, Welcome to ScholarBeacon...{" "}
          </h2>
          <div>
            <ImHappy></ImHappy>
          </div>
        </div>
        <div className="flex  justify-evenly items-center border-2 border-gray-400 mx-10 mt-10 p-5 rounded-lg">
          <div>
            {" "}
            <img
              className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-cover rounded-full"
              src={user?.photoURL}
              alt="UserName"
            />
          </div>
          <div>
            {user.role === "user" ? (
              ""
            ) : (
              <p className="uppercase font-bold md:text-[20px]">{user.role}</p>
            )}

            <h2 className="font-semibold md:text-[20px] pt-4">
              Name: {user.displayName}
            </h2>
            <h2 className="font-semibold  md:text-[20px] pt-1 pb-3">
              Email: {user.email}
            </h2>

            <Link
              to="/updateProfile"
              className="btn bg-[#009286] text-white hover:bg-slate-800"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
