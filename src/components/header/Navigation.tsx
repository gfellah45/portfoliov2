import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { listDesktop } from "../Animations";
import { useRouter } from "next/router";

type Nav = {
  item: string;
  tag: string;
}[];

const Navigation: React.FC = () => {
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

  return (
    <nav className="items-center justify-around py-28 lg:py-0 lg:flex-row xl:flex-row lg:justify-between xl:justify-between h-5/6 lg:h-full xl:h-full">
      <motion.ul className="flex flex-col items-center justify-between w-full lg:mt-0 xl:mt-0 h-4/6 lg:h-full xl:h-full lg:flex-row xl:flex-row">
        {nav.map((item, idx) => (
          <motion.li
            whileHover={{ scale: 1.2 }}
            variants={listDesktop}
            custom={idx}
            initial="initial"
            animate="animate"
            key={idx}
            className={`text-text-heading2 hover:text-light-bg2 dark:text-dark-text1 text-lg font-semibold transition-all ease-in-out transform-gpu  lg:text-text-heading2 hover:scale-120`}
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
  );
};

export default Navigation;
