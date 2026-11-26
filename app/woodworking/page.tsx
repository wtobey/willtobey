import type { Metadata } from "next";
import Link from "next/link";
import { PROJECTS } from "../projects";

export const metadata: Metadata = {
  title: "woodworking",
};

export default function Woodworking() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> / woodworking
      </p>
      {PROJECTS.length === 0 ? (
        <p className="spacer">nothing here...yet</p>
      ) : (
        <nav aria-label="Projects" className="spacer">
          <ul>
            {PROJECTS.map((project, i) => {
              const last = i === PROJECTS.length - 1;
              return (
                <li key={project.slug}>
                  <span aria-hidden="true">{last ? "└── " : "├── "}</span>
                  <Link href={`/woodworking/${project.slug}`}>
                    {project.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </main>
  );
}
