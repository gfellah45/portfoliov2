import React from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Email from "../../svgs/Email";
import Github from "../../svgs/Github";
import Linkden from "../../svgs/Linkden";
import Twitter from "../../svgs/Twitter";
import { motion } from "framer-motion";
import { width } from "../Animations";

const Contact: React.FC = () => {
  const [isLightTheme] = useLocalStorage("lightTheme", true);
  return (
    <motion.div
      variants={width}
      initial="hidden"
      animate="show"
      className="relative flex items-center justify-center h-full bg-light-bg2 dark:bg-dark-text1"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.3, type: "spring" }}
        className="absolute hidden transition-all duration-300 ease-in-out lg:block top-10 lg:left-28 xl:left-96 animate-pulse motion-safe:animate-bounce"
      >
        <Email currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
      </motion.div>
      <div className="">
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, type: "spring", duration: 2 }}
          className="my-4 text-lg font-semibold text-dark-text1 dark:text-light-bg2"
        >
          jerry.aaron45@gmail.com
        </motion.p>
        <motion.div className="flex items-center justify-between ">
          <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 1.8, type: "spring" }}
          >
            <a
              href="http://twittercom/uncleJAA"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-light-bg1"
            >
              <Twitter currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 1.9, type: "spring" }}
          >
            <a
              href="https://github.com/gfellah45"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Linkden currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateY: "50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 2, type: "spring" }}
          >
            <a
              href="https://www.linkedin.com/in/jerry-aaron-agbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Github currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
