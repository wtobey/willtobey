// Every woodworking project, newest first. The home tree and the woodworking
// index both read this list, so a new project is one entry here plus a page at
// app/woodworking/<slug>/page.tsx.
//
// It is empty on purpose. While it is empty the index says so and the home
// tree shows the branch with nothing under it.
export type Project = {
  slug: string;
  title: string;
};

export const PROJECTS: Project[] = [];
