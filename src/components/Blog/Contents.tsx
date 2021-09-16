import React, { useContext } from "react";
import { BlogContext } from "../../Context/Blog";
import BlogCard from "./BlogCard";

interface Props {}

const Contents = (props: Props) => {
  const { state } = useContext(BlogContext);

  return (
    <div className="flex w-10/12 h-screen mx-auto my-8">
      <div>
        <div className="text-2xl text-light-bg2 dark:text-white">
          All of my articles
        </div>
        <div className="grid my-8 md:grid-cols-2">
          {state.blogs.map((item) => (
            <BlogCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contents;
