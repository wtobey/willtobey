"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { WORDS } from "./words";

const FRAMES = ["|", "/", "-", "\\"];
const TICKS = 32; // frames per label, about four seconds
const REDUCED = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function Terminal() {
  const still = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );

  // One counter. The spinner and the label are both derived from it, so the
  // first frame is the same on the server and in the browser.
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (still) return;
    const id = setInterval(() => setTick((t) => t + 1), 125);
    return () => clearInterval(id);
  }, [still]);

  const spinner = FRAMES[tick % FRAMES.length];
  const cycle = Math.floor(tick / TICKS);
  const label = WORDS.length > 0 ? WORDS[cycle % WORDS.length] : "loading";

  return (
    <main>
      <p>willtobey.com</p>
      <p>
        {label} <span aria-hidden="true">{spinner}</span>
      </p>
    </main>
  );
}
