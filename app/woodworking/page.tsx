import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "../projects";
import { Tree } from "../tree";

export const metadata: Metadata = {
  title: "woodworking",
};

export default function Woodworking() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> / woodworking
      </p>
      {PROJECTS.length === 0 ? (
        <p className="spacer">nothing here...yet</p>
      ) : (
        <Tree
          label="Projects"
          className="spacer"
          nodes={PROJECTS.map((project) => ({
            label: project.title,
            href: `/woodworking/${project.slug}`,
          }))}
        />
      )}
    </main>
  );
}
