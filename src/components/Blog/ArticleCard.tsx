import React from "react";
import Image from "next/image";

interface Props {}

const ArticleCard = (props: Props) => {
  return (
    <>
      <div>
        <div className="relative flex my-4 ">
          <div className="relative w-60 h-60">
            <Image
              src="/context.png"
              alt="blog image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="px-4 w-60 h-60">
            <div className="justify-center text-sm tracking-wide text-justify text-gray-600 dark:text-light-bg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              quisquam, laudantium excepturi suscipit amet omnis optio doloribus
              veritatis dolore officiis itaque accusamus delectus nisi quidem
              aliquid unde, incidunt a adipisci.
            </div>
            <p className="my-8 text-gray-500 underline cursor-pointer dark:text-light-bg">
              Read more
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
