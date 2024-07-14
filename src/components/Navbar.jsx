import React from "react";
import logo from "../assets/DRlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 h-16 w-16 rounded-lg cursor-pointer"
          src={logo}
          alt=""
        />
      </div>
      <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/darshan2006" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Darshanajay" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/darshan_darshu_7353/"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.snapchat.com/add/darshu7353?share_id=d20oPS-sL9U&locale=en-US"
          target="_blank"
        >
          <FaSnapchatSquare />
        </a>
        <FaSquareXTwitter className=" cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
