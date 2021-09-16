export interface IBlog {
  id: string;
  title: string;
  publish_at: string;
  body: string;
  splash_image: {
    url: string;
  }[];
}

export type InitialStateType = {
  blogs: IBlog[];
  singleBlog: IBlog | {};
};
