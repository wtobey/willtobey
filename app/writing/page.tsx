import type { Metadata } from "next";
import { Page } from "../shell";
import { entries } from "../site";
import { Tree } from "../tree";

const HERE = "/writing";

export const metadata: Metadata = {
  title: "writing",
};

export default function Writing() {
  return (
    <Page path={HERE}>
      <Tree label="Posts" className="spacer" nodes={entries(HERE)} />
    </Page>
  );
}
