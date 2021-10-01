export interface IBlog {
  id: string;
  title: string;
  publish_at: string;
  body: string;
  splash_image: {
    url: string;
  }[];
}

export interface IBlogList {
  frontmatter: {
    Date: string;
    cover_image: string;
    excerpt: string;
    title: string;
  };
  slug: string;
  content?: string | any;
}

export type BlogPreviewProps = {
  frontmatter: {
    Date: string;
    cover_image: string;
    excerpt: string;
    title: string;
  };
  slug: string;
}[];

export type InitialStateType = {
  blogs: IBlog[];
  singleBlog: IBlog | {};
  blogPreview: BlogPreviewProps;
};
