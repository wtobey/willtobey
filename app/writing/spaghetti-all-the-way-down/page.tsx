import type { Metadata } from "next";
import Link from "next/link";
import { Prose } from "../../prose";
import { Tree } from "../../tree";

export const metadata: Metadata = {
  title: "spaghetti all the way down",
  description:
    "If the product is spaghetti, the best you can do is spaghetti in your frontend, backend, and database as well.",
};

// The post, one string per paragraph. *Marked* runs render as emphasis.
const PARAGRAPHS = [
  "Like everyone else I do not spend much time writing code anymore. I spend most of my time thinking about the product I want to build. Its been jarring and taken away a part of the work that I really enjoyed but its also been consistent with how I thought about software engineering in the *before times*.",
  "When I was writing code myself, one of the strongest convictions I had in my first few years working professionally was that there was no clean distinction between building good product and writing good software. A good abstraction in the product is a good abstraction in the codebase, and a codebase that naturally extends to the requirements the user will bring to next planning is owed to a product designed well.",
  "This is how I understood why the best PMs I worked with had the best knowledge of the nuts and bolts of the system. This allowed them to direct the product along the happy path of the system.",
  "I’ve experienced the convergence of product and software engineering consistently across teams building user facing product, internal tooling, and dev tools. All of these have product surface, and in all cases the architecture of the product is inextricably linked the quality of the backing implementation.",
  "I worked on scaled human review at Meta. The manual review tool was, by any account, a disaster inside and out. A major scaling constraint on our product was a three tier taxonomy system for workflow configuration that had absolutely no correlation to anything real. It mixed metadata up with real axis of configuration. The result of that was that our backend had a million if statements and carveouts for specific taxonomies (sometimes the first level and third, sometimes first and second, sometimes second and third). It was a disaster, but fixing the code wasn’t possible without fixing the product.",
  "I solved this by identifying what “real” thing in the world differentiated our workflows. We rebuilt the system around the subject of the review. This allowed our process owners to reuse configuration intuitively, by simply specifying the subject of their review. Previously every new configuration had to be hand managed to steer around landmines and carveouts and if statements in our backend and frontend. Now, our product was organized correctly and configuration was able to be made self serve, more comprehensible, and we simplified our backend massively because we could finally drive the system through one centralized configuration. Was this a product change or a software engineering change? There’s no difference!",
  "Spaghetti code starts in the product. If the product is spaghetti, the best you can do is spaghetti in your frontend, backend, and database as well. Its spaghetti all the way down.",
  "I credit Meta’s approach to software engineering, where engineers blur the boundaries between their title and product management. If an engineer isn’t able to think about and influence their product (internal, dev tools, external or otherwise) then they’re working with their hands tied behind their back.",
  "To bring this full circle, some days I feel like Im doing an entirely new job, but most days I find myself struggling with the same challenges as I did before.",
];

export default function Post() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> /{" "}
        <Link href="/writing">writing</Link>
      </p>
      <article className="spacer">
        <h1>spaghetti all the way down</h1>
        {PARAGRAPHS.map((text) => (
          <p key={text.slice(0, 32)}>
            <Prose text={text} />
          </p>
        ))}
      </article>
      <Tree
        label="Back"
        className="spacer"
        nodes={[{ label: "back", href: "/" }]}
      />
    </main>
  );
}
