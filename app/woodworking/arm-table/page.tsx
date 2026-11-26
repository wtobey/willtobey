import type { Metadata } from "next";
import Image from "next/image";
import fromTheFront from "./from-the-front.jpg";
import render from "./render.png";
import overTheArm from "./over-the-arm.jpg";
import { Page } from "../../shell";

export const metadata: Metadata = {
  title: "arm table",
};

// Images are capped at 600px by the img rule in globals.css. Saying so here
// lets the browser pick from the srcset before layout: 640px on a plain
// screen, 1200px on a dense one. Without it the browser assumes each file's
// own width, 2000px for the photos and 2940 for the render, and pulls the
// 3840px version for everybody.
const COLUMN = "(max-width: 600px) 100vw, 600px";

// The render first, then the thing itself. Imported rather than referenced
// from /public, so the dimensions are known at build time and the page
// reserves the space before the file arrives.
const IMAGES = [
  {
    src: render,
    alt: "A render of the table hooked over the arm of a sofa, a glass standing on the top, the rail dropping down the arm's inner face.",
  },
  {
    src: overTheArm,
    alt: "A wooden table resting over the padded arm of a sofa, seen from above, its side panel dropping down the inner face of the arm.",
  },
  {
    src: fromTheFront,
    alt: "The same table at seat level from the front, its top running level over the arm.",
  },
];

export default function ArmTable() {
  return (
    <Page path="/woodworking/arm-table">
      {IMAGES.map((image) => (
        <Image key={image.alt} src={image.src} alt={image.alt} sizes={COLUMN} />
      ))}
    </Page>
  );
}
