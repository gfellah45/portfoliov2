import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-full">
      <p className="text-2xl font-semibold text-light-bg2 dark:text-dark-text1">
        Hi, my name is
      </p>
      <h1 className="py-4 my-2 text-4xl font-extrabold text-transparent transform-gpu md:text-6xl lg:my-7 lg:text-7xl xl:text-8xl bg-gradient-to-r from-light-text1 bg-clip-text to-light-bg2 dark:to-light-bg2 dark:from-dark-text1">
        Jerry Aaron Agbo.
      </h1>
      <p className="text-4xl font-bold lg:text-5xl xl:text-7xl dark:text-dark-text1 text-light-text2">
        I love building things for the web
      </p>
      <p className="w-full my-4 space-x-3 text-2xl font-medium tracking-wider text-gray-500 md:w-11/12 lg:text-3xl lg:w-8/12 xl:w-7/12 dark:text-gray-400">
        I'm a Nigerian base software developer who enjoys building exceptional
        digital experiences. Currently, I'm an engineer at{" "}
        <span className="inline-block font-bold text-light-bg2">
          <a
            href="http://everyfarmer.farm"
            target="_blank"
            rel="noopener noreferrer"
          >
            EveryFarmer Eco System Ltd
          </a>
        </span>{" "}
        focused on building accessible, human-centered products.
      </p>
    </div>
  );
};

export default Hero;
