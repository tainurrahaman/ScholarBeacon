import { FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { SiFacebook } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-slate-800 text-neutral-content rounded p-10">
      <div className="flex flex-col md:flex-row justify-between md:justify-evenly gap-5 md:gap-10 w-full">
        <div className="text-center md:text-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={logo}
              className="w-10 md:w-14 lg:w-16"
              alt="Company Logo"
            />
          </div>
          <p className="font-semibold text-[16px] pt-3">
            ScholarBeacon NinetyOne.com <br />
            Providing scholarship services since 1992
          </p>
        </div>
        <div className="flex gap-10 md:gap-14 lg:gap-20 justify-between">
          <nav className="flex flex-col text-start">
            <h6 className="footer-title">Company</h6>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Contact</NavLink>
            <NavLink to="/">Jobs</NavLink>
            <NavLink to="/">Press kit</NavLink>
          </nav>
          <nav className="text-start">
            <h6 className="footer-title">Social</h6>
            <div className="flex gap-2 md:gap-4">
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
      <aside className="w-full flex justify-center pt-0 md:pt-8">
        <p className="font-medium text-[14px] md:text-[16px] text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by
          ScholarBeacon NinetyOne.com
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
