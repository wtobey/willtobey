import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "../posts";
import { Tree } from "../tree";

export const metadata: Metadata = {
  title: "writing",
};

export default function Writing() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> / writing
      </p>
      <Tree
        label="Posts"
        className="spacer"
        nodes={POSTS.map((post) => ({
          label: post.title,
          href: `/writing/${post.slug}`,
        }))}
      />
    </main>
  );
}
