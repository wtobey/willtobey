"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { WORDS } from "./words";

const CELLS = 20;
const STEP = 2.5;
const TICKS = Math.ceil(100 / STEP) + 1;
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

  // One counter. The bar and the label are both derived from it, so the
  // first frame is the same on the server and in the browser.
  const [tick, setTick] = useState(4);

  useEffect(() => {
    if (still) return;
    const id = setInterval(() => setTick((t) => t + 1), 100);
    return () => clearInterval(id);
  }, [still]);

  const progress = Math.min(100, (tick % TICKS) * STEP);
  const filled = Math.round((progress / 100) * CELLS);
  const pct = String(Math.floor(progress)).padStart(3, " ");

  const cycle = Math.floor(tick / TICKS);
  const label = WORDS.length > 0 ? WORDS[cycle % WORDS.length] : "loading";

  return (
    <main>
      <p>willtobey.com</p>
      <p>
        {label}{" "}
        <span aria-hidden="true">
          [{"█".repeat(filled)}
          {"░".repeat(CELLS - filled)}] {pct}%
        </span>
      </p>
    </main>
  );
}
