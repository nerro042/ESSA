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
import { Link } from "react-router-dom";
import Dropdown from "@/components/ui/Dropdown";

const Header = () => {
  return (
    <div
      className="px-20 py-[5px] border-b-[1px] border-b-black
     flex justify-between"
    >
      <div className=" text-[40px] tracking-[10px] font-pacifico">ESSA</div>

      <div
        className="text-[17px] flex space-x-1 mx-auto justify-center 
      items-center font-extralight space-x-10"
      >
        <Link>About</Link>
        <Link>Projects</Link>

        <div>
          {/* <DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>NFT's</DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link className="cursor-pointer">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DropdownMenu> */}
          <div className="z-[100]">
            <Dropdown />
          </div>
        </div>

        <Link>Contact</Link>
      </div>

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
  );
};

export default Header;
