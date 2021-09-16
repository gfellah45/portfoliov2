import { IBlog } from "../../types";

export interface GetAllPost {
  type: "All_Blog_Post";
  payload: IBlog[];
}

export interface GetSinglePost {
  type: "Single_Blog_Post";
  payload: IBlog;
}

export const fecthPost = (post: IBlog[]): GetAllPost => ({
  type: "All_Blog_Post",
  payload: post,
});

export const fetchSinglePost = (post: IBlog): GetSinglePost => ({
  type: "Single_Blog_Post",
  payload: post,
});

export type BlogAction = GetAllPost | GetSinglePost;
