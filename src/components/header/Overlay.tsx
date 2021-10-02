import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { listMobile, overLay } from "../Animations";
import MobileNav from "./MobileNav";
import { LogoLight, LogoDark } from "./Logo";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { HeaderContext } from "../../Context/Header";
import { useRouter } from "next/router";

type Nav = {
  item: string;
  tag: string;
}[];

const Overlay: React.FC = () => {
  const [isLightTheme] = useLocalStorage("lightTheme", true);

  const { header, toggleHeader } = useContext(HeaderContext);

  const router = useRouter();

  const pathName = router.pathname === "/blog" ? router.pathname : "";

  const [nav, setNav] = useState<Nav>([
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
      tag: "/blog",
    },
  ]);

  useEffect(() => {
    if (pathName) {
      setNav([{ item: "Home", tag: "/" }]);
    } else {
      setNav([...nav]);
    }
  }, [pathName]);

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
      animate={header ? "open" : "close"}
      onClick={() => toggleHeader()}
      className="absolute top-0 bottom-0 left-0 z-20 w-full h-screen "
    >
      <div className="absolute w-full h-full opacity-90 bg-light-bg2 backdrop-filter backdrop-blur-2xl dark:bg-dark-text1 "></div>
      <div className="absolute z-50 flex items-center justify-center w-full h-full">
        <nav className="items-center justify-around py-28 lg:py-0 lg:flex-row xl:flex-row lg:justify-between xl:justify-between h-5/6 lg:h-full xl:h-full">
          <motion.ul
            variants={container}
            animate={header ? "animate" : "initial"}
            className="flex flex-col items-center justify-between w-full h-full lg:mt-0 xl:mt-0 lg:h-full xl:h-full lg:flex-row xl:flex-row"
          >
            {nav.map((item, idx) => (
              <motion.li
                onClick={() => toggleHeader()}
                // whileHover={{ scale: 1.2 }}
                variants={listMobile}
                custom={idx}
                animate={header ? "animate" : "initial"}
                key={idx}
                className={` text-light-bg my-4 dark:text-dark-bg text-5xl font-semibold transition-all ease-in-out transform-gpu  lg:text-text-heading2 hover:scale-120`}
              >
                {item.tag === "/blog" ? (
                  <Link href={item.tag}>{item.item}</Link>
                ) : (
                  <a href={item.tag}>{item.item}</a>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </nav>
        <div className="absolute top-0 left-0 flex items-center justify-between w-full h-16 p-2 bg-white dark:bg-dark-bg bg-opacity-30 backdrop-filter backdrop-blur-lg">
          {!isLightTheme ? <LogoLight /> : <LogoDark />}

          <MobileNav />
        </div>
      </div>
    </motion.div>
  );
};

export default Overlay;
