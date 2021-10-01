import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../Animations";
import { useInView } from "react-intersection-observer";
import { IBlog, BlogPreviewProps, IBlogList } from "../../../types";
import Link from "next/link";
interface Props {
  data: IBlogList;
}

const ArticleCard: React.FC<Props> = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { frontmatter, slug } = data;

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
              src={frontmatter.cover_image}
              layout="fill"
              objectFit="cover"
              alt={frontmatter.title}
              priority={true}
            />
          </div>
          <div className="px-4 w-60 h-60">
            <h3 className="text-xl text-white">{frontmatter.title}</h3>
            <div className="justify-center py-2 my-2 text-sm tracking-wide text-justify text-gray-600 lg:py-0 overflow-ellipsis h-2/4 dark:text-light-bg">
              {frontmatter.excerpt}...
            </div>
            <Link href={`/blog/${slug}`}>
              <p className="my-8 text-gray-500 underline cursor-pointer dark:text-light-bg">
                Read more
              </p>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ArticleCard;
