import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24">
        <h1 className=" my-20 text-center text-4xl">Technologies</h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className=" text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className=" text-7xl text-green-600" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <DiJava className=" text-7xl " />
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssFill className=" text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiJavascript className=" text-7xl bg-black text-yellow-300" />
          </motion.div>
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiCss3 className=" text-7xl  text-blue-800" />
          </motion.div>
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaHtml5 className=" text-7xl  text-orange-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaPython className=" text-7xl" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaGitAlt className=" text-7xl text-orange-700" />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiRedux className=" text-7xl text-violet-800" />
          </motion.div>

          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <GrMysql className=" text-7xl text-blue-600" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Technologies;
