import { FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { SiFacebook } from "react-icons/si";
import { NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const Footer = () => {
  const { user } = UseAuth();

  const dashLink =
    user?.role === "admin"
      ? "/admin"
      : user?.role === "moderator"
      ? "/moderator"
      : "/user";

  return (
    <footer className="footer footer-horizontal footer-center bg-slate-800 text-neutral-content p-10 pt-5 md:pt-10">
      <div className="flex flex-col md:flex-row justify-between md:justify-evenly gap-5 md:gap-10 w-full">
        <div className="text-center md:text-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              className="w-10 md:w-14 lg:w-16"
              alt="Company Logo"
            />
          </div>
          <p className="font-bold text-[22px] py-3 text-transparent bg-gradient-to-r from-white to-[#06e7cd] bg-clip-text font-oswald">
            ScholarBeacon NinetyOne.com
          </p>
          <p className="font-semibold text-[16px] md:text-[18px]">
            Providing Scholarship services since 1992
          </p>
        </div>
        <div className="flex gap-10 md:gap-14 lg:gap-20 justify-between">
          <nav className="flex flex-col text-start space-y-1 md:space-y-2 text-[18px] md:text-xl">
            <h6 className="footer-title  pb-1 md:pb-3 text-transparent bg-gradient-to-r from-white to-[#06e7cd] bg-clip-text font-oswald">
              Quick Links
            </h6>

            <a
              to="/"
              href="https://www.linkedin.com/in/tainur/"
              target="_blank"
            >
              Contact
            </a>
            <NavLink to="allScholarship">Scholarships</NavLink>
            {user?.role && <NavLink to={dashLink}>DashBoard</NavLink>}
            <NavLink to="/">About Us</NavLink>
          </nav>
          <nav className="text-start text-[18px] md:text-xl">
            <h6 className="footer-title text-transparent bg-gradient-to-r from-white to-[#06e7cd] bg-clip-text font-oswald">
              Follow Here
            </h6>
            <div className="flex gap-2 md:gap-4 pt-1 md:pt-3">
              <a
                href="https://en.wikipedia.org/wiki/Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl"></FaTwitter>
              </a>

              <a
                href="https://en.wikipedia.org/wiki/YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl"></FaYoutube>
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="text-2xl" />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <aside className="w-full flex justify-center pt-0 md:pt-3">
        <p className="font-medium text-[14px] md:text-[16px] text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-transparent bg-gradient-to-r from-white to-[#06e7cd] bg-clip-text font-oswald">
            {" "}
            ScholarBeacon NinetyOne.com
          </span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
