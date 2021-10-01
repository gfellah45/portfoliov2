import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Contents from "../../src/components/Blog/Contents";

import { GetStaticProps } from "next";
import { BlogContext } from "../../src/Context/Blog";
import { fecthPost, fetchPostPreview } from "../../src/Context/actions";
import { IBlog, IBlogList } from "../../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Props {
  post: IBlogList[];
}

const Blog = ({ post }: Props) => {
  const { dispatch } = useContext(BlogContext);

  useEffect(() => {
    if (post) {
      dispatch(fetchPostPreview(post));
    }
  }, [post]);
  return (
    <div>
      <Head>
        <title>Jerry Aaron | Portfolio - Blog</title>

        <meta
          name="description"
          content="Jerry Aaron Agbo blog where tect content specifically web developmet articles live."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A192F" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="9gkZIamgcY2zCKw2T739ArhnV5zgK0-CS3aXrPrzbuc"
        />
      </Head>
      <div>
        <Contents />
      </div>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  if (!files) {
    return {
      notFound: true,
    };
  }

  const post = files.map((file) => {
    const slug = file.replace(".md", "");

    const markdownMeta = files.map((file) => {
      const filePath = path.join("posts", file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      return fileContent;
    });

    const { data: frontmatter } = matter(markdownMeta[0]);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      post,
    },
  };
};
