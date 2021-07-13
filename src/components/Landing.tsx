import React from "react";
import Container from "../Container";
import Contact from "./Hero/Contact";
import Header from "./header/Header";
import Title from "./Hero/Title";

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        {/* <div>
          <Header />
        </div> */}
        <div className="min-w-full mt-28 h-4/6">
          <Title />
        </div>
      </Container>
      <Contact />
    </>
  );
};

export default Landing;
