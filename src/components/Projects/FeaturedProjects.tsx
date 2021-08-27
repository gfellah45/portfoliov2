import React, { useState } from "react";
import Heading from "../Elements/Heading";
import { nameV, lineWidth, fadeUp } from "../Animations";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import BG from "../../../public/screencapture-localhost-3000-2021-08-20-19_50_01.png";
import ProjectCard from "./ProjectCard";

interface Props {}

const FeaturedProjects = (props: Props) => {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();
  const [project] = useState([
    {
      title: "Personal Portfolio",
      discription:
        "This is my personal  website build to market my skills also have a blog integrated where i cn share my knowledege and document my journey ",
      image: "/jerry.png",
      link: "",
      github: "https://github.com/gfellah45/portfoliov2",
      technologies: [
        "React",
        "NextJs",
        "Typescript",
        "Tailwindcss",
        "Strapi",
        "HeadlessUi",
      ],
      featured: false,
    },
    {
      title: "Jiffix Web App",
      discription:
        "Jiffx is an auto mobile repair and services startup. I was contracted to build the front end of their new web app which automate repairs and services for the user. also store user repiar history for better automivle advices on services ",
      image: "/jiffix.png",
      link: "https://jiffix-v1.vercel.app/",
      github: "https://github.com/gfellah45/portfoliov2",
      technologies: ["React", "NextJs", "Javascript", "Redux", "ChakraUi"],
      featured: true,
    },
  ]);

  return (
    <div id="works" className="min-h-screen">
      <div>
        <Heading
          ref1={ref}
          ref2={ref2}
          inView1={inView}
          inView2={inView2}
          variant1={nameV}
          variant2={lineWidth}
          text="03. Projects"
          ligthColorMain="text-light-bg2"
          darkColorMain="text-light-bg3"
          bgLight="bg-light-bg2"
          bgDark="bg-dark-text1"
        />
      </div>
      {project.map((item) => (
        <ProjectCard {...item} />
      ))}
    </div>
  );
};

export default FeaturedProjects;
