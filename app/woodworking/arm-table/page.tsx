import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Tree } from "../../tree";
import fromTheFront from "./from-the-front.jpg";
import overTheArm from "./over-the-arm.jpg";

export const metadata: Metadata = {
  title: "arm table",
};

// Imported rather than referenced from /public, so the dimensions are known
// at build time and the page reserves the space before the file arrives.
// Served unoptimized. These sources are already small and already lossy, and
// the optimizer only offers q=75, which re-encodes them from 4.8 bits/pixel
// down to 0.8 and turns the fabric and the grain to mush. It would save about
// 170 KB on a page that is otherwise a few kilobytes of text, on two images
// that load lazily. Not a trade worth making. Drop this prop once there are
// full-resolution originals for it to work from.
const PHOTOS = [
  {
    src: overTheArm,
    alt: "A wooden table straddling the padded arm of a sofa, seen from above and behind.",
  },
  {
    src: fromTheFront,
    alt: "The same table from the front, its side panel hanging down the outside of the sofa arm.",
  },
];

export default function ArmTable() {
  return (
    <main>
      <p>
        <Link href="/">willtobey.com</Link> /{" "}
        <Link href="/woodworking">woodworking</Link>
      </p>
      <article className="spacer">
        <h1>arm table</h1>
        {PHOTOS.map((photo) => (
          <Image key={photo.alt} src={photo.src} alt={photo.alt} unoptimized />
        ))}
      </article>
      <Tree
        label="Back"
        className="spacer"
        nodes={[{ label: "back", href: "/woodworking" }]}
      />
    </main>
  );
}
