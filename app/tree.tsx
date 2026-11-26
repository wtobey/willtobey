import Link from "next/link";

// A node in an ASCII tree. `href` turns the label into a link; without one
// the label is plain text. `children` nest one level deeper.
export type TreeNode = {
  label: string;
  href?: string;
  children?: TreeNode[];
};

const TEE = "├── "; // |--
const ELBOW = "└── "; // `--
const BAR = "│   "; // |
const GAP = "    ";

// The box-drawing run in front of one node: one column per ancestor, then
// this node's own connector. An ancestor that was the last of its siblings
// has no more branches below it, so its column is blank rather than a bar.
function prefix(ancestorWasLast: boolean[], isLast: boolean) {
  const columns = ancestorWasLast.map((last) => (last ? GAP : BAR)).join("");
  return columns + (isLast ? ELBOW : TEE);
}

// Internal routes get next/link so they prefetch and navigate client-side.
// Anything else (mailto:, https:) is a plain anchor.
function Label({ label, href }: TreeNode) {
  if (!href) return <>{label}</>;
  if (href.startsWith("/")) return <Link href={href}>{label}</Link>;
  return (
    <a href={href} rel="noreferrer">
      {label}
    </a>
  );
}

function Branches({
  nodes,
  ancestorWasLast,
}: {
  nodes: TreeNode[];
  ancestorWasLast: boolean[];
}) {
  return (
    <ul>
      {nodes.map((node, i) => {
        const isLast = i === nodes.length - 1;
        return (
          <li key={node.label}>
            <span aria-hidden="true">{prefix(ancestorWasLast, isLast)}</span>
            <Label {...node} />
            {node.children?.length ? (
              <Branches
                nodes={node.children}
                ancestorWasLast={[...ancestorWasLast, isLast]}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

// Draws a nested list of links the way `tree` draws a directory. `label`
// names the navigation region for screen readers, which read the nested
// lists and skip the box-drawing characters.
export function Tree({
  nodes,
  label,
  className,
}: {
  nodes: TreeNode[];
  label: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <Branches nodes={nodes} ancestorWasLast={[]} />
    </nav>
  );
}
