import type { Metadata } from "next";
import Link from "next/link";
import { Tree } from "../../tree";

export const metadata: Metadata = {
  title: "spaghetti all the way down",
  description:
    "If the product is spaghetti, it will be spaghetti in your frontend, backend, and database as well.",
};

// The post, one string per paragraph.
const PARAGRAPHS = [
  "Today, I spend most of my time thinking about designing my software product, and much less thinking about the implementation details of that product than I used to. That is a less substantial change than I think most people believe.",
  "When I was writing code myself, it was also very clear to me (and I had written a version of this post) that there was no clean distinction between good product and good software. A good abstraction in the product is a good abstraction in the codebase, and a codebase that naturally extends to the requirements the user would have next half is owed to a product designed well to do the same.",
  "I could struggle to build good product just as hard as I could struggle to design good software. Designing good product was deeply architectural and required identifying abstractions in concepts, designing modularity and reusability. Essentially the same things that went on under the hood.",
  "This explains a lot about why the best PMs I worked with had the best understanding of the nuts and bolts of the system. This allowed them to recommend solutions that build on the product and technical strength of the system. I’ll probably follow up on this with an article about Falling into the Pit of Success which feels relevant here.",
  "I’ve experienced this working on teams building user facing product, building internal tooling, and building dev tooling for MLEs. All of these have product surface, and in all cases the architecture of the product determines the quality of the backing implementation.",
  "One example of this is an internal tool I worked on for scaled human review at Meta. The tool was, by any account, a disaster inside and out. Our product sucked because it fragmented the system with a three tier taxonomy system for workflow configuration that had absolutely no correlation to anything “real”. The result of that was that our backend was a million if statements and carveouts for specific taxonomies (sometimes the first level and third, sometimes first and second, sometimes second and third). It was a disaster, but fixing the code wasn’t possible without fixing the product. It was fixed when I took the time to figure out what “real” thing in the world differentiated these product and would allow us to centralize configuration around the concepts that consistently required shared configuration. We rebuilt the system around the subject of the review. This allowed our process architect partners to reuse configuration intuitively, by simply specifying the subject of their review. Previously every new configuration had to be hand managed to steer around landmines and carveouts and if statements. Now, our product was organized correctly. Was this a product change or an architecture change? There’s no difference!",
  "I titled this “spaghetti all the way down” because what i understood from that is that if the product is spaghetti, it will be spaghetti in your frontend, backend, and database as well.",
  "This experience is why I credit Meta’s approach to software engineering, where engineers blur the boundaries between their title and product management, and why I don’t ask engineers who I manage to work from tickets. To tie this back to the opener, some days I feel like I\u2019m doing an entirely new job, but other days I bang my head against a wall trying to figure out what the product should offer its users, and it feels very familiar. It\u2019s also the thing that I’ve struggled to get AI to be useful for.",
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
          <p key={text.slice(0, 32)}>{text}</p>
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
