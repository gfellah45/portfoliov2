import React from "react";
import Container from "../Container";
import Contact from "./Hero/Contact";
import Title from "./Hero/Title";

const Landing: React.FC = () => {
  return (
    <div
      className="flex flex-col flex-wrap justify-between "
      style={{ minHeight: "90vh" }}
    >
      <div className="pt-20 lg:pt-20">
        <Container>
          <Title />
        </Container>
      </div>

      <div className="w-full h-36">
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
