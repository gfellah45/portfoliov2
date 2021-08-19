import React from "react";
import Container from "../Container";
import Details from "./About/Details";
import Contact from "./Hero/Contact";
import Title from "./Hero/Title";
import Experience from "./Experience/Experience";

const Landing: React.FC = () => {
  return (
    <div>
      <div
        className="flex flex-col flex-wrap justify-between min-h-[95vh] lg:min-h-[90vh] "
        // style={{ minHeight: "90vh" }}
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

      <Details />
      <Experience />
    </div>
  );
};

export default Landing;
