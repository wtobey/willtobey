import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "spaghetti all the way down",
};

export default function Post() {
  return (
    <main>
      <p>willtobey.com / writing</p>
      <p className="spacer">spaghetti all the way down</p>
      <p className="spacer">not written yet.</p>
      <p className="spacer">
        <span aria-hidden="true">{"└── "}</span>
        <Link href="/">back</Link>
      </p>
    </main>
  );
}
