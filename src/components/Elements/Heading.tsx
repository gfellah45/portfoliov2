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
  ligthColorSecondary?: string;
  darkColorMain?: string;
  darkColorSecondary?: string;
  borderColor?: string;
  darkBorder?: any;
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
  ligthColorSecondary,
  darkColorMain,
  darkColorSecondary,
  borderColor,
  darkBorder,
}) => {
  return (
    <Container>
      <motion.div
        ref={ref1}
        variants={variant1}
        animate={inView1 ? "animate" : "initial"}
        className="relative h-8 my-6 lg:h-20"
      >
        {/* shalow about */}
        <p
          className={`absolute text-4xl italic ${ligthColorSecondary} opacity-25 dark:${darkColorSecondary} lg:text-6xl -top-6 lg:-top-2 left-12`}
        >
          {text}
        </p>

        {/* main about */}
        <p
          className={`absolute bottom-0 left-0 text-3xl font-bold dark:${darkColorMain} lg:text-5xl ${ligthColorMain} `}
        >
          {text}
        </p>
        <motion.div
          ref={ref2}
          variants={variant2}
          animate={inView2 ? "animate" : "initial"}
          className={`absolute bottom-0 ${borderColor} left-0 w-6/12 border-b-2 dark:${borderColor}`}
        ></motion.div>
      </motion.div>
    </Container>
  );
};

export default Heading;
