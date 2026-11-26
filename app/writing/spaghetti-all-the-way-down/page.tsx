import type { Metadata } from "next";
import { Prose } from "../../prose";
import { Page } from "../../shell";

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
  "I worked on scaled human review at Meta. The manual review tool was, by any account, a disaster inside and out. A major scaling constraint on our product was a three tier taxonomy system for workflow configuration that had absolutely no correlation to how we actually needed our system configured. It mixed metadata up with real axis of configuration. The result of that was that our backend had a million if statements and carveouts for specific combinations of taxonomies. It was a disaster, but fixing the code wasn’t possible without fixing the product.",
  "I solved this by cataloguing all our workflows to discover what really differentiated these workflows, and then rebuilt the configuration around that axis. This couldn’t just be an engineering change; it changed how our processes owners (customers) organized their processes, how our XFNs measured our work, and how our organization onboarded new products.",
  "The impact was significant. Previously, every onboarding had to be chaperoned by an engineer to steer around landmines and carveouts and if statements in our backend and frontend. This slowed our work down which delayed new products from entering the market. Now that our product was organized correctly, we were able to offer self serve onboarding, our communication to customers was simplified massively, and complexity in our software melted away because we could finally drive the system through one centralized configuration engine. Was this a product change or a software engineering change? There’s no difference!",
  "Spaghetti code starts in the product. If the product is spaghetti, the best you can do is spaghetti in your frontend, backend, and database as well. Its spaghetti all the way down.",
  "I credit Meta’s approach to software engineering, where engineers blur the boundaries between their title and product management. If an engineer isn’t able to think about and influence their product (internal, dev tools, external or otherwise) then they’re working with their hands tied behind their back.",
  "To bring this full circle, some days I feel like Im doing an entirely new job, but most days I find myself struggling with the same challenges as I did before.",
];

export default function Post() {
  return (
    <Page path="/writing/spaghetti-all-the-way-down">
      {PARAGRAPHS.map((text) => (
        <p key={text.slice(0, 32)}>
          <Prose text={text} />
        </p>
      ))}
    </Page>
  );
}
