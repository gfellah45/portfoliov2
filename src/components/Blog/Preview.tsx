import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

import { nameV, lineWidth, container } from "../Animations";
import Container from "../../Container";
import Heading from "../Elements/Heading";
import ArticleCard from "./ArticleCard";

interface Props {}

const Preview: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
    triggerOnce: true,
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
        <div className="flex justify-between my-2 mb-8">
          <div className="text-2xl text-gray-800 dark:text-light-bg">
            Latest Articles
          </div>
          <div className="text-2xl text-gray-800 dark:text-light-bg">
            <Link href="/blog">View all articles</Link>
          </div>
        </div>
        <motion.div
          variants={container}
          animate="show"
          initial="hidden"
          className="flex flex-col overflow-y-auto md:justify-between md:flex-row md:w-11/12"
        >
          <ArticleCard />
          <ArticleCard />
        </motion.div>
      </Container>
    </div>
  );
};

export default Preview;
