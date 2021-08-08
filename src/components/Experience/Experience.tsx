import React, { FC } from "react";
import Heading from "../Elements/Heading";
import { useInView } from "react-intersection-observer";
import { nameV, lineWidth } from "../Animations";
import Container from "../../Container";
import Tabs from "./Tabs";

const Experience: FC = () => {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <div
      id="experience"
      className="w-full h-16 min-h-screen py-2 li dark:bg-dark-bg lg:h-32 "
    >
      <Heading
        ref1={ref}
        ref2={ref2}
        inView1={inView}
        inView2={inView2}
        variant1={nameV}
        variant2={lineWidth}
        text="Experience"
        ligthColorMain="text-light-bg2"
        ligthColorSecondary="text-light-bg2"
        darkColorMain="text-light-bg3"
        darkColorSecondary="text-light-bg3"
        borderColor="border-light-bg2"
        darkBorder="border-light-bg3"
      />
      <div className="my-12 dark:bg-dark-text1 bg-light-bg2">
        <Container>
          <div className="py-6 lg:py-16">
            <Tabs />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
