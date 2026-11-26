import { SITE } from "./site";
import { Tree } from "./tree";

export default function Home() {
  return (
    <main>
      <p>willtobey.com</p>
      <Tree label="Site" nodes={SITE} className="spacer branches" />
    </main>
  );
}
