import React, { useState } from "react";
import Link from "next/link";
import { LogoLight, LogoDark } from "./Logo";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import Switcher from "./Switcher";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Header: React.FC = () => {
  // const [toggle, setToggle] = useState(false);
  // const handleCollapse = () => {
  //   setToggle((prevState) => !prevState);
  // };

  const [isLightTheme] = useLocalStorage("lightTheme", true);

  return (
    <header className="flex flex-wrap justify-between py-4">
      {/* logo */}
      <Link href="/">
        <motion.div
          initial={{ translateX: "-100px" }}
          animate={{ translateX: "0px" }}
          transition={{ type: "spring", duration: 1 }}
          className="rounded-md cursor-pointer "
        >
          {isLightTheme ? <LogoLight /> : <LogoDark />}
        </motion.div>
      </Link>

      {/* navigation */}
      <div className="flex flex-wrap items-center justify-between w-5/12 lg:w-7/12">
        <div className="">
          <Switcher />
        </div>
        <div className="lg:w-9/12">
          <div className="hidden sm:hidden md:hidden lg:block xl:block ">
            <Navigation />
          </div>
          <div className="lg:hidden xl:hidden">
            <div className="ml-auto mr-0 ">
              <MobileNav />
            </div>

            <Overlay />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
