import React from "react";
import AboutMe from "../assets/AboutMe.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-4">
        <h1 className=" my-20 text-center text-4xl">
          About
          <span className=" text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
          <motion.div className="w-full lg:w-1/2 lg:p-8">
            <div className=" flex items-center justify-center">
              <img
                src={AboutMe}
                className=" rounded-2xl  lg:w-[500px] lg:mr-14 w-96"
                alt="AboutMe"
              />
            </div>
          </motion.div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl ">{ABOUT_TEXT}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
