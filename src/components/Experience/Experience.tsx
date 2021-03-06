import React, { FC } from "react";
import Heading from "../Elements/Heading";
import { useInView } from "react-intersection-observer";
import { nameV, lineWidth, fadeUp } from "../Animations";
import Container from "../../Container";
import Tabs from "./Tabs";
import { motion } from "framer-motion";

const Experience: FC = () => {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const { ref: ref3, inView: inView3 } = useInView();

  return (
    <div
      id="experience"
      className="w-full h-16 min-h-[80vh] py-2 lg:min-h-screen dark:bg-dark-bg lg:h-32 "
    >
      <Heading
        ref1={ref}
        ref2={ref2}
        inView1={inView}
        inView2={inView2}
        variant1={nameV}
        variant2={lineWidth}
        text="02. Experience"
        ligthColorMain="text-light-bg2"
        darkColorMain="text-light-bg3"
        bgLight="bg-light-bg2"
        bgDark="bg-dark-text1"
      />
      <div className="my-12 dark:bg-dark-text1 bg-light-bg2">
        <Container>
          <motion.div
            ref={ref3}
            variants={fadeUp}
            animate={inView3 ? "animate" : "initial"}
            className="py-6 lg:py-10"
          >
            <Tabs />
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
