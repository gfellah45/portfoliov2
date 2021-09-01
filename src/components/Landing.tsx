import React, { useEffect, useState, useContext } from "react";
import Container from "../Container";
import Details from "./About/Details";
import Contact from "./Hero/Contact";
import Title from "./Hero/Title";
import Experience from "./Experience/Experience";
import { HeaderContext } from "../Context/Header";
import FeaturedProjects from "./Projects/FeaturedProjects";
import Preview from "./Blog/Preview";
import ContactForm from "./Contact/ContactForm";

const Landing: React.FC = () => {
  const [top, setTop] = useState(false);

  const { setHeader } = useContext(HeaderContext);
  useEffect(() => {
    const rezize = () => {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        setHeader(false);
      }

      if (scrollY > 200) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", rezize);
    return () => {
      window.removeEventListener("scroll", rezize);
    };
  }, [setHeader]);

  return (
    <div>
      <div
        className="relative min-h-[89vh]  lg:min-h-[90vh] "
        // style={{ minHeight: "90vh" }}
      >
        <div className="pt-20 lg:pt-20">
          <Container>
            <Title />
          </Container>
        </div>

        <div className="absolute bottom-0 w-full h-36">
          <Contact />
        </div>
      </div>

      <Details />
      <Experience />
      {top && (
        <a href="#">
          <div className="fixed z-50 flex flex-col items-center justify-center w-12 h-12 p-4 text-white transition-all duration-300 ease-in-out rounded-full shadow-2xl cursor-pointer animate-bounce bottom-4 right-4 bg-light-text2 dark:bg-light-bg2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#FFFFFF"
              >
                <rect fill="none" height="24" width="24" />
                <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
              </svg>
            </p>
            <p className="text-xs font-light">Top</p>
          </div>
        </a>
      )}

      <FeaturedProjects />
      <Preview />
      <ContactForm />
    </div>
  );
};

export default Landing;
