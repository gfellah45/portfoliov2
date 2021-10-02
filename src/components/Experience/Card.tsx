import React, { FC } from "react";
import Arrow from "../../svgs/Arrow";

interface CardProps {
  title: "string";
  duration: "string";
  duties: string[];
}

const Card: FC<CardProps> = ({ title, duration, duties }) => {
  return (
    <div className="relative ">
      <div className="absolute z-0 transition-colors opacity-75 -inset-2 hover:blur-lg dark:bg-gradient-to-tr from-purple-700 to-red-600 rounded-2xl blur animate-pulse"></div>
      <div className="relative z-20 w-full p-4 my-3 origin-center bg-white border-b border-gray-200 transform-gpu dark:bg-dark-bg rounded-2xl lg:my-0 bg-opacity-20 backdrop-filter backdrop-blur-lg ">
        <div>
          <span className="text-sm text-white lg:text-lg">
            {title.substr(0, title.lastIndexOf("@"))}
          </span>
          <span className="text-sm font-semibold lg:text-lg dark:text-dark-text1 text-light-text2 ">
            {title.substr(title.lastIndexOf("@"))}
          </span>
        </div>
        <div className="my-3 text-sm italic font-semibold dark:text-dark-text1 text-light-text2">
          {duration}
        </div>
        <div>
          {duties.map((duties, i) => (
            <div key={i} className="flex items-center my-6 ">
              <span>
                <Arrow />
              </span>{" "}
              <span className="mx-4 text-xs text-white lg:text-sm">
                {duties}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
