import React from "react";
import { motion } from "framer-motion";
import { listDesktop } from "../Animations";

const Navigation: React.FC = () => {
  const navItem = [
    {
      item: "About",
      tag: "#about",
    },
    {
      item: "Experience",
      tag: "#experience",
    },
    {
      item: "Works",
      tag: "#works",
    },
    {
      item: "Blog",
      tag: "#blog",
    },
  ];

  return (
    <nav className="items-center justify-around py-28 lg:py-0 lg:flex-row xl:flex-row lg:justify-between xl:justify-between h-5/6 lg:h-full xl:h-full">
      <motion.ul className="flex flex-col items-center justify-between w-full lg:mt-0 xl:mt-0 h-4/6 lg:h-full xl:h-full lg:flex-row xl:flex-row">
        {navItem.map((item, idx) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={listDesktop}
            custom={idx}
            initial="initial"
            animate="animate"
            key={idx}
            className={`text-text-heading2 hover:text-light-bg2 dark:text-dark-text1 text-lg font-semibold transition-all ease-in-out transform-gpu  lg:text-text-heading2 hover:scale-120`}
          >
            <a href={item.tag}>{item.item}</a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;
