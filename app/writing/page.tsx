import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "../posts";

export const metadata: Metadata = {
  title: "writing",
};

export default function Writing() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> / writing
      </p>
      <nav aria-label="Posts" className="spacer">
        <ul>
          {POSTS.map((post, i) => {
            const last = i === POSTS.length - 1;
            return (
              <li key={post.slug}>
                <span aria-hidden="true">{last ? "└── " : "├── "}</span>
                <Link href={`/writing/${post.slug}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </main>
  );
}
