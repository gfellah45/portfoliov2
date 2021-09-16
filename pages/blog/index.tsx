import React, { useContext, useEffect } from "react";
import Head from "next/head";
import Contents from "../../src/components/Blog/Contents";
import { gql } from "@apollo/client";
import client from "../../graphql";
import { GetStaticProps } from "next";
import { BlogContext } from "../../src/Context/Blog";
import { fecthPost } from "../../src/Context/actions";
import { IBlog } from "../../types";

interface Props {
  data: IBlog[];
}

const Blog = ({ data }: Props) => {
  const { dispatch } = useContext(BlogContext);

  useEffect(() => {
    if (data) {
      dispatch(fecthPost(data));
    }
  }, [data]);
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
  const { data } = await client.query({
    query: gql`
      query getAllBlogs {
        blogs {
          id
          title
          body
          published_at
          splash_image {
            url
          }
        }
      }
    `,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.blogs,
    },
  };
};
