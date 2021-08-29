import React, { FC } from "react";
import Heading from "../Elements/Heading";
import { useInView } from "react-intersection-observer";
import { nameV, lineWidth } from "../Animations";

interface Props {}

const Preview: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });
  return (
    <div>
      <Heading
        ref1={ref}
        ref2={ref2}
        inView1={inView}
        inView2={inView2}
        variant1={nameV}
        variant2={lineWidth}
        text="04. Blog"
        ligthColorMain="text-light-bg2"
        darkColorMain="text-light-bg3"
        bgLight="bg-light-bg2"
        bgDark="bg-dark-text1"
      />
    </div>
  );
};

export default Preview;
