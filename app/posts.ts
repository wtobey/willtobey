// Every post, newest first. The home tree and the writing index both read
// this list, so a new post is one entry here and nothing else.
export type Post = {
  slug: string;
  title: string;
};

export const POSTS: Post[] = [
  {
    slug: "spaghetti-all-the-way-down",
    title: "spaghetti all the way down",
  },
];
