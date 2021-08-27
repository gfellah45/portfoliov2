import React, { FC } from "react";
import Image from "next/image";

interface Props {
  title: string;
  discription: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
  featured: boolean;
}

const ProjectCard: FC<Props> = ({
  title,
  discription,
  image,
  link,
  github,
  technologies,
  featured,
}) => {
  return (
    <div className="w-11/12 h-80 md:w-11/12 lg:w-9/12 xl:w-8/12 mx-auto lg:h-[50vh] xl:h-[60vh]">
      <div className="flex flex-wrap w-full shadow-2xl md:flex-row h-4/5">
        <div className="relative w-full h-full p-4 rounded-lg shadow-inner md:rounded-none md:w-6/12 lg:w-6/12 dark:bg-dark-text1 bg-light-bg2">
          {featured && (
            <p className="absolute text-xs text-white dark:text-dark-bg left-4 md:text-lg">
              Featured Project
            </p>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="absolute w-5 h-5 text-white cursor-pointer dark:text-dark-bg md:w-6 md:h-6 right-16">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="external-link-alt"
                  className="svg-inline--fa fa-external-link-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                  ></path>
                </svg>
              </p>
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="openner nooppener">
              <p className="absolute w-5 h-5 text-white cursor-pointer dark:text-dark-bg md:w-6 md:h-6 right-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="svg-inline--fa fa-github fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </p>
            </a>
          )}

          <div className="flex flex-col justify-between mt-8 h-5/6">
            <h3 className="text-2xl text-white dark:text-dark-bg md:mt-2 md:text-3xl">
              {title}
            </h3>
            <p className="text-sm text-white dark:text-dark-bg rounded-lg md:py-2 md:mt-1 b md:text-[14px] ">
              {discription}
            </p>

            <div className="grid w-full grid-cols-4 gap-2 md:grid-cols-5 ">
              {technologies.map((item, id) => (
                <p
                  key={id}
                  className="px-1 py-1 text-[.6em] md:text-xs text-center dark:text-white bg-white dark:bg-dark-bg cursor-pointer rounded-2xl text-light-bg2"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div
          className="relative hidden w-full bg-center bg-no-repeat bg-contain md:w-6/12 md:block"
          // style={{
          //   backgroundImage: `url(${"/ji.png"})`,
          // }}
        >
          <Image src={image} layout="fill" objectFit="fill" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
