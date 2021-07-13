import React from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import Email from "../../svgs/Email";
import Github from "../../svgs/Github";
import Linkden from "../../svgs/Linkden";
import Twitter from "../../svgs/Twitter";

const Contact: React.FC = () => {
  const [isLightTheme] = useLocalStorage("lightTheme", true);
  return (
    <div className="relative flex justify-center pt-10 mt-40 pb-14 md:mt-64 lg:mt-24 xl:mt-28 bg-light-bg2 dark:bg-dark-text1">
      <div className="absolute hidden transition-all duration-300 ease-in-out lg:block top-16 lg:left-24 xl:left-72 animate-pulse motion-safe:animate-bounce">
        <Email currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
      </div>
      <div className="">
        <p className="text-3xl text-dark-text1 dark:text-light-bg2">
          jerry.aaron45@gmail.com
        </p>
        <div className="flex justify-between pt-14">
          <div>
            <a
              href="http://twittercom/uncleJAA"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-light-bg1"
            >
              <Twitter currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
            </a>
          </div>

          <div>
            <a
              href="https://github.com/gfellah45"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Linkden currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/jerry-aaron-agbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Github currentColor={isLightTheme ? "#ffffff" : "#7510F7"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
