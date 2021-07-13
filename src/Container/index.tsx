import React from "react";

interface Props {}

const index: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:w-10/12">{children}</div>
    </div>
  );
};

export default index;
