import Link from "next/link";

// The invitation under a post. The rule is drawn rather than styled, the way
// the tree draws its own branches, and hidden from screen readers because it
// says nothing the <footer> element does not already say.
export function WritingFooter() {
  return (
    <footer>
      <p aria-hidden="true">---</p>
      <p className="spacer">
        I love talking to people about everything I write about. If this made
        you think or you had a different experience, please get in{" "}
        <Link href="/contact">contact</Link> to share.
      </p>
    </footer>
  );
}
