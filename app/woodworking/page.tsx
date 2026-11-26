import type { Metadata } from "next";
import { Page } from "../shell";
import { entries } from "../site";
import { Tree } from "../tree";

const HERE = "/woodworking";

export const metadata: Metadata = {
  title: "woodworking",
};

export default function Woodworking() {
  const projects = entries(HERE);
  return (
    <Page path={HERE}>
      {projects.length === 0 ? (
        <p className="spacer">nothing here...yet</p>
      ) : (
        <Tree label="Projects" className="spacer" nodes={projects} />
      )}
    </Page>
  );
}
