import type { Metadata } from "next";
import { Page } from "../shell";
import { entries } from "../site";
import { Tree } from "../tree";

const HERE = "/contact";

export const metadata: Metadata = {
  title: "contact",
};

export default function Contact() {
  return (
    <Page path={HERE}>
      <Tree label="Contact" className="spacer" nodes={entries(HERE)} />
    </Page>
  );
}
