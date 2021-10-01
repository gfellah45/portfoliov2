import { IBlog, BlogPreviewProps } from "../../types";

export interface GetAllPost {
  type: "All_Blog_Post";
  payload: IBlog[];
}

export interface GetSinglePost {
  type: "Single_Blog_Post";
  payload: IBlog;
}

export interface GetPostPreview {
  type: "Blog_Post_Preview";
  payload: BlogPreviewProps;
}

export const fecthPost = (post: IBlog[]): GetAllPost => ({
  type: "All_Blog_Post",
  payload: post,
});

export const fetchSinglePost = (post: IBlog): GetSinglePost => ({
  type: "Single_Blog_Post",
  payload: post,
});

export const fetchPostPreview = (post: BlogPreviewProps): GetPostPreview => ({
  type: "Blog_Post_Preview",
  payload: post,
});

export type BlogAction = GetAllPost | GetSinglePost | GetPostPreview;
