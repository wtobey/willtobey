// Every woodworking project, newest first. The home tree and the woodworking
// index both read this list, so a new project is one entry here plus a page at
// app/woodworking/<slug>/page.tsx.
export type Project = {
  slug: string;
  title: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "arm-table",
    title: "arm table",
  },
];
