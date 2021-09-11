import React from "react";
import Night from "../../../public/night.svg";
import Day from "../../../public/sun-warm 1.svg";
import Image from "next/image";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { motion } from "framer-motion";
const Switcher: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useLocalStorage("lightTheme", true);

  const toggle = () => {
    setIsLightTheme((prev) => !prev);
  };
  return (
    <div
      className="w-6 h-8 cursor-pointer sm:w-8 md:w-8 "
      onClick={() => toggle()}
    >
      {!isLightTheme ? (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <Image src={Night} alt="night time" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <Image src={Day} alt="daylight" />
        </motion.div>
      )}
    </div>
  );
};

export default Switcher;
