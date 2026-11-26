import { POSTS } from "./posts";
import { PROJECTS } from "./projects";
import { Tree, type TreeNode } from "./tree";

// The whole site, as one tree. Posts and projects come from their own
// lists, so adding either never touches this file.
const NODES: TreeNode[] = [
  {
    label: "writing",
    href: "/writing",
    children: POSTS.map((post) => ({
      label: post.title,
      href: `/writing/${post.slug}`,
    })),
  },
  {
    label: "woodworking",
    href: "/woodworking",
    children: PROJECTS.map((project) => ({
      label: project.title,
      href: `/woodworking/${project.slug}`,
    })),
  },
  {
    label: "contact",
    children: [
      { label: "wtobey1@gmail.com", href: "mailto:wtobey1@gmail.com" },
      {
        label: "linkedin",
        href: "https://www.linkedin.com/in/william-tobey-a3b981167/",
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <p>willtobey.com</p>
      <Tree label="Site" nodes={NODES} className="spacer branches" />
    </main>
  );
}
