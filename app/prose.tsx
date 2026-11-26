// Renders *emphasis* inside a paragraph, and nothing else. Posts are written
// as plain strings, and one italic phrase is not worth a markdown parser, a
// dependency and a build step. If a post ever needs more than this, that is
// the moment to reach for a real one.
export function Prose({ text }: { text: string }) {
  // Splitting on a capturing group keeps the captures, so the odd indices are
  // exactly the marked runs and the even ones are the literal text between.
  return (
    <>
      {text
        .split(/\*([^*]+)\*/g)
        .map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part))}
    </>
  );
}
