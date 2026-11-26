import Link from "next/link";

// One entry per post. The tree branches are drawn from this list, so a new
// post is one line here.
const POSTS = [
  {
    slug: "spaghetti-all-the-way-down",
    title: "spaghetti all the way down",
  },
];

export default function Home() {
  return (
    <main>
      <p>willtobey.com</p>
      <nav aria-label="Site" className="spacer">
        <ul>
          <li>
            <span aria-hidden="true">{"└── "}</span>writing
            <ul>
              {POSTS.map((post, i) => {
                const last = i === POSTS.length - 1;
                return (
                  <li key={post.slug}>
                    <span aria-hidden="true">
                      {last ? "    └── " : "    ├── "}
                    </span>
                    <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </main>
  );
}
