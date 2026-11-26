import { POSTS } from "./posts";
import { PROJECTS } from "./projects";
import type { TreeNode } from "./tree";

// The whole site as one tree, and the only place its shape is written down.
// Posts and projects come from their own lists, so adding either never touches
// this file.
export const SITE: TreeNode[] = [
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

// One step of the path to a page: somewhere to go, and what to call it.
export type Crumb = { label: string; href: string };

// The site is a tree, so it has a root, and the root is a page like any other.
export const ROOT: Crumb = { label: "willtobey.com", href: "/" };

// Depth-first search for `href`, returning the crumbs from `nodes` down to it.
// A node with no href of its own (contact) is a heading rather than a page, so
// it is left out of the path even when the match is inside it.
function descend(nodes: TreeNode[], href: string): Crumb[] | null {
  for (const node of nodes) {
    if (node.href === href) return [{ label: node.label, href }];
    const below = node.children ? descend(node.children, href) : null;
    if (!below) continue;
    return node.href ? [{ label: node.label, href: node.href }, ...below] : below;
  }
  return null;
}

// The path from the root down to `href`, root first and the page itself last.
// Every page's breadcrumb and back link is a slice of this, so a page cannot
// disagree with the tree about where it sits.
//
// A page not in the tree throws. Every route is prerendered, so that fails the
// build: a page is either listed in the tree and reachable from the indexes, or
// it does not ship. That is the whole point of the lookup.
export function trail(href: string): Crumb[] {
  if (href === ROOT.href) return [ROOT];
  const path = descend(SITE, href);
  if (!path) {
    throw new Error(
      `${href} has no entry in the site tree. Add it to SITE in app/site.ts, ` +
        `by way of POSTS or PROJECTS if it is a post or a project.`,
    );
  }
  return [ROOT, ...path];
}
