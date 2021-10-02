import React from "react";

import { IBlog, IBlogList } from "../../types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { useRouter } from "next/router";

interface Props {
  post: IBlogList;
}

const SinglePost = ({ post }: Props) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <div className="w-10/12 pt-10 mx-auto">
        <div
          onClick={() => router.back()}
          className="my-8 text-sm italic underline cursor-pointer dark:text-white"
        >
          Back
        </div>
        <h1 className="text-3xl text-dark-bg dark:text-white">
          {post.frontmatter.title}
        </h1>
        <span className="mt-10 text-dark-bg dark:text-white">
          Date posted: {post.frontmatter.Date}
        </span>
        <div
          className="my-6 text-lg text-dark-bg dark:text-white"
          dangerouslySetInnerHTML={{
            __html: marked(post.content, { gfm: true, breaks: true }),
          }}
        ></div>
      </div>
    </div>
  );
};

export default SinglePost;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((file) => ({
    params: { slug: file.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const slug = params.slug;

  const file = fs.readFileSync(path.join("posts", slug + ".md"), "utf8");

  const { data: frontmatter, content } = matter(file);

  const post = {
    frontmatter,
    content,
  };

  return {
    props: {
      post,
    },
  };
};
