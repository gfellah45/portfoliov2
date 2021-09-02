import React from "react";
import Head from "next/head";
import Contents from "../../src/components/Blog/Contents";

interface Props {}

const index = (props: Props) => {
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

export default index;
