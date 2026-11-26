import type { Metadata } from "next";
import { Prose } from "../../prose";
import { Page } from "../../shell";

export const metadata: Metadata = {
  title: "what i like about cad",
};

// The post, one string per paragraph. *Marked* runs render as emphasis.
// Empty until the author writes it: the route and the links are in place, so
// the text is the only thing left to add.
const PARAGRAPHS: string[] = [];

export default function Post() {
  return (
    <Page path="/writing/what-i-like-about-cad">
      {PARAGRAPHS.map((text) => (
        <p key={text.slice(0, 32)}>
          <Prose text={text} />
        </p>
      ))}
    </Page>
  );
}
