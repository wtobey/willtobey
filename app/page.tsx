import Link from "next/link";
import { POSTS } from "./posts";

export default function Home() {
  return (
    <main>
      <p>willtobey.com</p>
      <nav aria-label="Writing" className="spacer">
        <ul>
          <li>
            <span aria-hidden="true">{"├── "}</span>
            <Link href="/writing">writing</Link>
            <ul>
              {POSTS.map((post, i) => {
                const last = i === POSTS.length - 1;
                return (
                  <li key={post.slug}>
                    <span aria-hidden="true">
                      {last ? "│   └── " : "│   ├── "}
                    </span>
                    <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
      <nav aria-label="Contact" className="spacer">
        <ul>
          <li>
            <span aria-hidden="true">{"└── "}</span>contact
            <ul>
              <li>
                <span aria-hidden="true">{"    ├── "}</span>
                <a href="mailto:wtobey1@gmail.com">wtobey1@gmail.com</a>
              </li>
              <li>
                <span aria-hidden="true">{"    └── "}</span>
                <a
                  href="https://www.linkedin.com/in/william-tobey-a3b981167/"
                  rel="noreferrer"
                >
                  linkedin
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </main>
  );
}
