import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import { nameV, lineWidth } from "../Animations";
import Container from "../../Container";
import Heading from "../Elements/Heading";
import ArticleCard from "./ArticleCard";

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

      <Container>
        <div className="my-2 mb-8">
          <div className="text-2xl text-light-bg2 dark:text-light-bg">
            Latest Articles
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <ArticleCard />
          <ArticleCard />
        </div>
      </Container>
    </div>
  );
};

export default Preview;
