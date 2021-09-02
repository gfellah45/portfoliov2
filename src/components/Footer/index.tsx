import React from "react";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="py-8 text-lg text-center dark:text-dark-text1">
      Designed & Built by{" "}
      <span className="italic text-light-bg2">
        {" "}
        <a
          href="https://www.linkedin.com/in/jerry-aaron-agbo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jerry Aaron
        </a>{" "}
      </span>
    </div>
  );
};

export default index;
