import React, { useState } from "react";
import Container from "../../Container";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container, lineWidth, nameV } from "../Animations";
import Heading from "../Elements/Heading";

const Details: React.FC = () => {
  const [hover, setHover] = useState<Boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const { ref: ref5, inView: inView5 } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const container2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        delay: 0.7,
        delayChildren: 3,
        type: "spring",
        duration: 2,
      },
    },
  };

  const bounce = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,

      transition: {
        delay: 0.4,

        type: "spring",
      },
    },
  };

  const fromMiddle = {
    initial: {
      opacity: 0,
      scaleX: 0,
    },
    animate: {
      opacity: 1,
      scaleX: 1,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const imgVariant = {
    initial: {
      opacity: 0,
      translateY: "100px",
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      translateY: "0px",
      scaleY: 1,
      transition: {
        delay: 0.5,
        duration: 1,
        type: "spring",
      },
    },
  };

  const textVariant = {
    initial: {
      opacity: 0,
      translateY: "100px",
      scaleY: 0,
    },
    animate: {
      opacity: 1,
      translateY: "0px",
      scaleY: 1,
      transition: {
        delay: 0.4,
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <div
      id="about"
      className="flex flex-col flex-wrap justify-between w-full min-h-screen bg-light-bg dark:bg-dark-bg"
    >
      <motion.div className="w-full h-16 lg:h-32 bg-light-bg2 dark:bg-dark-text1">
        <Heading
          ref1={ref2}
          ref2={ref3}
          inView1={inView2}
          inView2={inView3}
          variant1={nameV}
          variant2={lineWidth}
          text="About"
          ligthColorMain="text-light-bg"
          ligthColorSecondary="text-white"
          darkColorMain="text-dark-bg"
          darkColorSecondary="text-dark-bg"
          borderColor="border-white"
          darkBorder="border-dark-bg"
        />
      </motion.div>

      {/* image and about description */}

      <Container>
        <div className="flex flex-col-reverse flex-wrap w-full py-6 text-justify lg:flex-row ">
          <div className="flex items-center justify-center w-full lg:w-6/12">
            <motion.p
              ref={ref6}
              variants={textVariant}
              animate={inView6 ? "animate" : "initial"}
              className="w-11/12 md:w-9/12 py-4 md:text-justify lg:w-10/12 text-[12px] md:text-sm font-medium leading-7 lg:leading-8 lg:text-sm dark:text-light-bg3 lg:text-justify text-light-text1"
            >
              Hello! My name is Jerry and I enjoy creating things that live on
              the web. My interest in programing started back in 2015 when I
              took a C++ course in school. Fastrack 2018 i developed intrest in
              web developmet after attending a local meet up. Fast-forward to
              today, I&apos;ve had the privilege of working at an Agric Tech
              start-up, Health Startup. I also interned with Devcareer Bootcamp,
              HNG internship, UK-Nigeria Tech-Hub | Decagon Dev Plecement
              Internship. My main focus these days is building accessible,
              inclusive products and digital experiences at EveryFarmer Eco
              System.
            </motion.p>
          </div>
          <div className="flex items-center justify-center w-full h-full lg:w-6/12">
            <motion.div
              whileHover={{ borderRadius: "50%" }}
              variants={imgVariant}
              ref={ref5}
              animate={inView5 ? "animate" : "initial"}
              style={{
                backgroundImage: `url(/IMG_8330.JPG)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="relative border-4 rounded-full cursor-pointer w-44 h-44 lg:rounded-xl border-light-bg2 dark:border-dark-text1 lg:w-72 lg:h-72 "
            >
              <motion.div
                whileHover={{ opacity: 0 }}
                className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 lg:rounded bg-light-bg2"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* below list of technologies */}
      <div className="w-full h-48 lg:h-36 bg-light-bg2 dark:bg-dark-text1">
        <Container>
          <motion.div className="w-full h-8 my-5 lg:h-24">
            <motion.p
              ref={ref}
              variants={fromMiddle}
              animate={inView ? "animate" : "initial"}
              className="text-xs font-semibold text-center origin-center md:text-sm lg:text-lg text-light-bg dark:text-dark-bg"
            >
              Here are some few technologies i have been working with recently:
            </motion.p>
            <div className="lg:ml-28">
              <motion.div
                ref={ref4}
                variants={container2}
                animate={inView4 ? "animate" : "initial"}
                className="grid grid-cols-3 gap-4 py-4 mx-auto md:grid-cols-4 lg:grid-cols-4 justify-items-start "
              >
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm lg:text-sm text-light-bg dark:text-dark-bg"
                >
                  Javascript(ES6+)
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm lg:text-sm text-light-bg dark:text-dark-bg"
                >
                  Typescript
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm lg:text-sm text-light-bg dark:text-dark-bg"
                >
                  Reactjs / React Native
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm text-light-bg dark:text-dark-bg"
                >
                  Nextjs
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm text-light-bg dark:text-dark-bg"
                >
                  Nodejs
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[10px] md:text-sm text-light-bg dark:text-dark-bg"
                >
                  HTML5
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm text-light-bg dark:text-dark-bg"
                >
                  CSS3/SCSS
                </motion.div>
                <motion.div
                  variants={bounce}
                  className="text-[11px] md:text-sm text-light-bg dark:text-dark-bg"
                >
                  Chakra UI/TailwindCSS
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Details;
