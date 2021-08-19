import React, { useContext } from "react";
import {
  navVariant,
  barVariant1,
  barVariant2,
  barVariant3,
} from "../Animations";
import { motion } from "framer-motion";
import { HeaderContext } from "../../Context/Header";

const MobileNav: React.FC = () => {
  const { header, toggleHeader } = useContext(HeaderContext);
  return (
    <motion.div
      initial={{ borderRadius: 10 }}
      animate={header ? "open" : "close"}
      variants={navVariant}
      className="flex flex-col justify-between w-10 h-10 p-2 rounded-sm bg-light-bg2 dark:bg-dark-text1"
      onClick={() => {
        toggleHeader();
      }}
    >
      <motion.div
        animate={header ? "open" : "close"}
        variants={barVariant2}
        className="w-full h-1 origin-center bg-light-bg1 dark:bg-light-text2 "
      ></motion.div>
      <motion.div
        animate={header ? "open" : "close"}
        variants={barVariant1}
        className="w-full h-1 origin-center transform bg-light-bg1 dark:bg-light-text2 "
      ></motion.div>
      <motion.div
        animate={header ? "open" : "close"}
        variants={barVariant3}
        className="w-full h-1 origin-center transform bg-light-bg1 dark:bg-light-text2 "
      ></motion.div>
    </motion.div>
  );
};

export default MobileNav;
