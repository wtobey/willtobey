import { Page } from "./shell";
import { SITE } from "./site";
import { Tree } from "./tree";

export default function Home() {
  return (
    <Page path="/">
      <Tree label="Site" nodes={SITE} className="spacer branches" />
    </Page>
  );
}
