import React from "react";
import { motion } from "framer-motion";
import { container, item } from "../Animations/index";
const Hero: React.FC = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full min-h-full"
    >
      <motion.p
        variants={item}
        className="text-lg font-semibold font-heading lg:text-2xl text-light-bg2 dark:text-dark-text1"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        variants={item}
        className="py-2 text-4xl font-extrabold text-transparent font-heading md:text-6xl lg:my-2 lg:py-2 lg:text-7xl xl:text-7xl bg-gradient-to-r from-light-text1 bg-clip-text to-light-bg2 dark:to-light-bg2 dark:from-dark-text1 "
      >
        Jerry Aaron Agbo.
      </motion.h1>
      <motion.p
        variants={item}
        className="text-4xl font-bold font-heading lg:text-5xl xl:text-5xl dark:text-dark-text1 text-light-text2"
      >
        I love building things for the web
      </motion.p>
      <motion.p
        variants={item}
        className="w-full my-4 space-x-3 text-lg font-medium tracking-wider text-gray-500 font-text md:w-11/12 lg:text-lg lg:w-8/12 xl:w-7/12 dark:text-gray-400"
      >
        I&#39;m a Nigerian base software developer who enjoys building
        exceptional digital experiences. Currently, I&#39;m focused on the
        front-end of the web and mobile, building accessible, human-centered
        products.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
