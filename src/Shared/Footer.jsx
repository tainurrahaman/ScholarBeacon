import { FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-neutral-content px-10 py-5 md:py-10 md:mt-14 lg:mt-20">
      <div className="flex flex-col md:flex-row justify-between md:justify-evenly gap-5 md:gap-10 w-full">
        {" "}
        <aside className="text-center md:text-start">
          <div className="flex justify-center md:justify-start">
            {" "}
            <img
              src={logo}
              className="w-10 md:w-14 lg:w-16"
              alt="Company Logo"
            />
          </div>
          <p className="font-semibold text-[16px] pt-3">
            ScholarBeacon NinetyOne.com
            <br />
            Providing scholarship services since 1992
          </p>
        </aside>
        <div className="flex gap-10 md:gap-14 lg:gap-20 justify-between">
          <div className="flex gap-10 md:gap-14 lg:gap-20 justify-between">
            <nav className="flex flex-col">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
          </div>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-row md:grid-flow-col gap-2 md:gap-4">
              <a>
                <FaTwitter className="text-2xl"></FaTwitter>
              </a>
              <a>
                <FaYoutube className="text-2xl"></FaYoutube>
              </a>
              <a>
                <SiFacebook className="text-2xl"></SiFacebook>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <aside className="w-full flex justify-center pt-4 md:pt-8">
        <p className="font-medium text-[14px] md:text-[16px] text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by
          ScholarBeacon NinetyOne.com
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
