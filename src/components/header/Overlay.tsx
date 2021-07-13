import React from "react";
import { motion } from "framer-motion";
import { listMobile, overLay } from "../Animations";

interface Props {
  toggle: boolean;
  handleCollapse: () => void;
}

const Overlay: React.FC<Props> = ({ toggle, handleCollapse }) => {
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

  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        type: "spring",
        delay: 1,
        delayChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      variants={overLay}
      animate={toggle ? "open" : "close"}
      className="fixed top-0 bottom-0 left-0 z-50 w-6/12 h-screen "
      onClick={() => handleCollapse()}
    >
      <div className="w-full h-full text-3xl bg-light-bg2 dark:bg-dark-text1">
        <nav className="items-center justify-around py-28 lg:py-0 lg:flex-row xl:flex-row lg:justify-between xl:justify-between h-5/6 lg:h-full xl:h-full">
          <motion.ul
            variants={container}
            animate={toggle ? "animate" : "initial"}
            className="flex flex-col items-center justify-between w-full lg:mt-0 xl:mt-0 h-4/6 lg:h-full xl:h-full lg:flex-row xl:flex-row"
          >
            {navItem.map((item, idx) => (
              <motion.li
                // whileHover={{ scale: 1.2 }}
                variants={listMobile}
                custom={idx}
                animate={toggle ? "animate" : "initial"}
                key={idx}
                className={` text-light-bg dark:text-dark-bg text-lg font-semibold transition-all ease-in-out transform-gpu  lg:text-text-heading2 hover:scale-120`}
              >
                <a href={item.tag}>{item.item}</a>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Overlay;
