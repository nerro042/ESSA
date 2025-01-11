import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

import React from "react";
import Dropdown from "@/components/ui/Dropdown";
import MobileNav from "@/components/ui/MobileNav";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <>
      <div
        className="px-20 py-[5px] md: hidden border-b-[1px] text-white border-b-white
     md:flex justify-between"
      >
        <div
          className=" text-[40px] cursor-pointer tracking-[10px] font-pacifico"
          onClick={() => navigation("/")}
        >
          ESSA
        </div>

        <ul
          className="text-[17px] flex mx-auto justify-center 
      items-center font-extralight space-x-10"
        >
          <li
            className={`cursor-pointer hover:text-blue-400 transition 
          duration-200 ease-in ${pathMatchRoute("/bio") && "text-blue-400"}`}
            onClick={() => navigation("/bio")}
          >
            About
          </li>

          <li
            className={`cursor-pointer hover:text-blue-400 transition 
          duration-200 ease-in ${
            pathMatchRoute("/projects") && "text-blue-400"
          }`}
            onClick={() => navigation("/projects")}
          >
            Projects
          </li>

          <li>
            <div className="z-[100] hover:text-blue-400">
              <Dropdown />
            </div>
          </li>

          <li
            className={`cursor-pointer hover:text-blue-400 transition 
          duration-200 ease-in ${
            pathMatchRoute("/contact") && "text-blue-400"
          }`}
            onClick={() => navigation("/contact")}
          >
            Contact
          </li>
        </ul>

        <div className="flex items-center justify-center space-x-5 text-[18px]">
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaXTwitter />
          </div>
          <div>
            <IoLogoDiscord />
          </div>
          <div>
            <CiLinkedin />
          </div>
        </div>
      </div>

      <div className="z-[100]">
        <MobileNav />
      </div>
    </>
  );
};

export default Header;
