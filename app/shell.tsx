import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { trail } from "./site";
import { Tree } from "./tree";

// The frame every page shares: the breadcrumb above, the back link below, and
// on an entry its heading. A page passes its own route and nothing else, so
// the only thing it can get wrong is where it says it is, and saying that
// wrong fails the build in trail().
export function Page({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  const crumbs = trail(path);
  const here = crumbs[crumbs.length - 1];
  const above = crumbs.slice(0, -1);
  const parent = above[above.length - 1];

  // The site is two levels deep: the root, the sections in it, and the entries
  // in those. An entry carries its own name in a heading, so its breadcrumb
  // stops at the section above and a back link closes the page. The root and
  // the sections have no heading, so they end the breadcrumb with their own
  // name and need no back link, the breadcrumb being the way up already.
  const isEntry = crumbs.length > 2;

  return (
    <main>
      <p>
        {above.map((crumb, i) => (
          <Fragment key={crumb.href}>
            {i > 0 ? " / " : null}
            <Link href={crumb.href}>{crumb.label}</Link>
          </Fragment>
        ))}
        {isEntry ? null : above.length ? ` / ${here.label}` : here.label}
      </p>
      {isEntry ? (
        <article className="spacer">
          <h1>{here.label}</h1>
          {children}
        </article>
      ) : (
        children
      )}
      {isEntry && parent ? (
        <Tree
          label="Back"
          className="spacer"
          nodes={[{ label: "back", href: parent.href }]}
        />
      ) : null}
    </main>
  );
}
