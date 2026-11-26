import type { Metadata } from "next";
import Image from "next/image";
import fromTheFront from "./from-the-front.jpg";
import overTheArm from "./over-the-arm.jpg";
import { Page } from "../../shell";

export const metadata: Metadata = {
  title: "arm table",
};

// Photos are capped at 600px by the img rule in globals.css. Saying so here
// lets the browser pick from the srcset before layout: 640px on a plain
// screen, 1200px on a dense one. Without it the browser assumes the 2000px
// intrinsic width and pulls the 3840px file for everybody.
const COLUMN = "(max-width: 600px) 100vw, 600px";

// Imported rather than referenced from /public, so the dimensions are known at
// build time and the page reserves the space before the file arrives.
const PHOTOS = [
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
      {PHOTOS.map((photo) => (
        <Image key={photo.alt} src={photo.src} alt={photo.alt} sizes={COLUMN} />
      ))}
    </Page>
  );
}
