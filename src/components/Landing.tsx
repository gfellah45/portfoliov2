import React from "react";
import Container from "../Container";
import Contact from "./Hero/Contact";
import Title from "./Hero/Title";

const Landing: React.FC = () => {
  return (
    <div className="relative " style={{ minHeight: "89vh" }}>
      <div className="pt-14 lg:pt-20">
        <Container>
          <Title />
        </Container>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-28">
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
