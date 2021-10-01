import React from "react";
import Image from "next/image";
import { IBlog, IBlogList } from "../../../types";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "../Animations";

interface Props {
  data: IBlogList;
}

const BlogCard = ({ data }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  console.log(data);

  const { slug, frontmatter } = data;
  const { title, cover_image, excerpt, Date } = frontmatter;

  return (
    <>
      <motion.div
        ref={ref}
        variants={fadeUp}
        animate={inView ? "animate" : "initial"}
      >
        <div className="relative flex flex-col my-4 lg:flex-row ">
          <div className="relative w-full md:w-72 h-60">
            <Image
              src={cover_image}
              layout="fill"
              objectFit="cover"
              alt={title}
              priority={true}
            />
          </div>
          <div className="w-full px-0 py-2 lg:py-0 lg:px-4 md:w-72 lg:w-96 h-60">
            <h3 className="text-xl text-white">{title}</h3>
            <div className="justify-center py-2 my-2 text-sm tracking-wide text-justify text-gray-600 lg:py-0 overflow-ellipsis h-2/4 dark:text-light-bg">
              {excerpt.substring(0, 200)}...
            </div>
            <Link href={`/blog/${slug}`}>
              <a className="my-8 text-gray-500 underline cursor-pointer dark:text-light-bg">
                Read more
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogCard;
