import React, { FC } from "react";
import { motion } from "framer-motion";
import Container from "../../Container";

interface Props {
  ref1: React.Ref<HTMLDivElement> | undefined;
  ref2: React.Ref<HTMLDivElement> | undefined;
  inView1: Boolean;
  inView2: Boolean;
  variant1: object | any;
  variant2: object | any;
  text: string;
  ligthColorMain?: string;
  bgLight?: string;
  darkColorMain?: string;
  bgDark?: string;
}

const Heading: FC<Props> = ({
  ref1,
  ref2,
  variant1,
  variant2,
  inView1,
  inView2,
  text,
  ligthColorMain,
  darkColorMain,
  bgLight,
  bgDark,
}) => {
  return (
    <Container>
      <motion.div
        ref={ref1}
        variants={variant1}
        animate={inView1 ? "animate" : "initial"}
        className="flex items-center py-2 my-6 "
      >
        {/* shalow about */}

        {/* main about */}
        <p
          className={`text-3xl pb-4 font-bold dark:${darkColorMain} lg:text-5xl ${ligthColorMain} `}
        >
          {text}
        </p>
        <p className={`w-5/12 h-[.7px] ml-2 ${bgLight} dark:${bgDark} `}></p>
      </motion.div>
    </Container>
  );
};

export default Heading;
