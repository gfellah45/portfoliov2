import React, { useState } from "react";
import Heading from "../Elements/Heading";
import { nameV, lineWidth, fadeUp } from "../Animations";
import { useInView } from "react-intersection-observer";

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
      github: "",
      technologies: ["React", "NextJs", "Javascript", "Redux", "ChakraUi"],
      featured: true,
    },
    {
      title: "Livrite Healthcare App",
      discription:
        "Livrite healthcare is a health startup which aims to provide top notch healthcare service via technology with its Bimrec app. i was part of the team that built the ui and at some point lead the front end team  ",
      image: "/livrite.png",
      link: "https://livritehealthcare.com.ng/",
      github: "",
      technologies: ["React", "Javascript", "Redux", "MaterialUI"],
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
      {project.map((item, id) => (
        <ProjectCard key={id} {...item} />
      ))}
    </div>
  );
};

export default FeaturedProjects;
