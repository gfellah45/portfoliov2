import Head from "next/head";
import Landing from "../src/components/Landing";
export default function Home() {
  return (
    <>
      <Head>
        <title>Jerry Aaron | Portfolio</title>
        <meta
          name="description"
          content="Jerry Aaron Agbo is a self-taught Front End Developer from Abuja, Nigeria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0A192F" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Landing />
      </main>
    </>
  );
}
