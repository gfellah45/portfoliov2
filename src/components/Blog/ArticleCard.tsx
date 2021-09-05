import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../Animations";
import { useInView } from "react-intersection-observer";

interface Props {}

const ArticleCard = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
    <>
      <motion.div
        ref={ref}
        variants={fadeUp}
        animate={inView ? "animate" : "initial"}
      >
        <div className="relative flex my-4 md:flex-col lg:flex-row ">
          <div className="relative w-60 h-60">
            <Image
              src="/context.png"
              alt="blog image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="px-4 w-60 h-60">
            <div className="justify-center py-2 overflow-hidden text-sm tracking-wide text-justify text-gray-600 lg:py-0 overflow-ellipsis h-3/4 dark:text-light-bg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              quisquam, laudantium excepturi suscipit amet omnis optio doloribus
              veritatis dolore officiis itaque accusamus delectus nisi quidem
              aliquid unde, incidunt a adipisci.
            </div>
            <p className="my-8 text-gray-500 underline cursor-pointer dark:text-light-bg">
              Read more
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ArticleCard;
