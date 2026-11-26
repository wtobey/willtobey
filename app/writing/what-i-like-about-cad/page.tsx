import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "../../prose";
import { Tree } from "../../tree";

export const metadata: Metadata = {
  title: "what i like about cad",
};

// The post, one string per paragraph. *Marked* runs render as emphasis.
// Empty until the author writes it: the route and the links are in place, so
// the text is the only thing left to add.
const PARAGRAPHS: string[] = [];

export default function Post() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> /{" "}
        <Link href="/writing">writing</Link>
      </p>
      <article className="spacer">
        <h1>what i like about cad</h1>
        {PARAGRAPHS.map((text) => (
          <p key={text.slice(0, 32)}>
            <Prose text={text} />
          </p>
        ))}
      </article>
      <Tree
        label="Back"
        className="spacer"
        nodes={[{ label: "back", href: "/writing" }]}
      />
    </main>
  );
}
